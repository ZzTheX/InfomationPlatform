<template>
    <div class='adress'>

        <!-- 新增收货地址 -->
        <div class='add_new_adress'>
            <p>新增收货地址</p>
           <el-form label-width="100px">
               <el-form-item label='联系人:'>
                   <el-input v-model="newAdress.contact_person"></el-input>
               </el-form-item>
               <el-form-item label='选择地址:'>
                   <el-cascader :options="cityList" v-model='newAdress.address_ids'></el-cascader>
               </el-form-item>
               <el-form-item label='详细地址:'>
                   <el-input v-model="newAdress.address_detail"></el-input>
               </el-form-item>
               <el-form-item label='联系电话:'>
                   <el-input v-model="newAdress.contact_mobile"></el-input>
               </el-form-item>
               <el-form-item label=' '>
                   <div class='edit_adress' @click='addNewAdress'>保存</div>
               </el-form-item>
           </el-form>
        </div>


        <!-- 收货地址列表 -->
       
        <h6>我的收货地址</h6>
        <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
                prop="contact_person"
                label="姓名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址">
            </el-table-column>
             <el-table-column
                prop="contact_mobile"
                label="电话"
                width="180">
            </el-table-column>
            <el-table-column
                label="操作"
                width="100">
                <template slot-scope="scope">
                    <el-button @click="editMyAdress(scope.row)" type="text" size="small">编辑</el-button>
                    <el-button @click="deleteAdress(scope.row)" type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
       <!-- 修改地址信息 -->
        <el-dialog
            title="提示"
            :visible.sync="centerDialogVisible"
            width="30%"
            center>
             <el-form label-width="100px">
               <el-form-item label='联系人:'>
                   <el-input v-model="editAdress.contact_person"></el-input>
               </el-form-item>
               <el-form-item label='选择地址:'>
                   <el-cascader :options="cityList" v-model='editAdress.address_ids'></el-cascader>
               </el-form-item>
               <el-form-item label='详细地址:'>
                   <el-input v-model="editAdress.address_detail"></el-input>
               </el-form-item>
               <el-form-item label='联系电话:'>
                   <el-input v-model="editAdress.contact_mobile"></el-input>
               </el-form-item>
               <el-form-item label=' '>
                   <div class='edit_adress' @click='updateAddress'>保存</div>
               </el-form-item>
           </el-form>
        </el-dialog>

    </div>
</template>

<script>
import qs from 'qs'
export default{
    data () {
        return {
            centerDialogVisible: false,
            currentIndex: '',
            cityList: [],
            addressList: [],
            isEdible: false,
            editAdress: {

            },
            newAdress: {
                contact_person: '',
                contact_mobile: '',
                address_detail: '',
                address_ids: ''
            },
            result: [
                {
                    adress: '',
                    adress_id: '',
                    contact_mobile: '',
                    contact_person: ''
                }
            ],
            adressInfo: {
                address_detail: '',
                contact_mobile: '',
                contact_person: '',
                address_id: ''
            }
           
        }
    },
    created () {
      this.getCitiesList()  
      this.getAdressList()
    },
    methods: {
        modifyCurrentAdress (index) {
            this.isEdible = true
            this.currentIndex = index
        },
        editMyAdress (rowData) {
            this.centerDialogVisible = true
            this.editAdress = rowData
        },
        deleteAdress (rowData) {
            this.http.post('/api/address/deleteAddress?address_id='+rowData.address_id).then(res => {
                console.log('删除地址返回信息：', res)
                if(res.data.code === 200) {
                    this.$message({
                        type: 'success',
                        message: res.data.msg
                    })
                    window.location.reload()
                }
            })
        },
        getAdressList () {
            this.http.get('/api/address/getAddressList').then(res => {
                console.log('请求地址列表返回数据：', res)
                if(res.data.code === 200) {
                    this.tableData = res.data.result
                }
            })
        },
        addNewAdress () {
            let adrs_ids = this.newAdress.address_ids
            if(Array.isArray(adrs_ids) && adrs_ids.length > 2) {
                this.newAdress.address_ids = this.newAdress.address_ids.join(',')
            }
            this.http.post('/api/address/addAddress',qs.stringify(this.newAdress), {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                    // 'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(res => {
                if(res.data.code === 200) {
                    this.$message({
                        type: 'success',
                        message: res.data.msg
                    })
                    // 刷新页面
                    this.getgetAdressList()
                    this.$router.go(0)
                }
            })
        },
        updateAddress () {
            let adrs_ids = this.editAdress.address_ids
            if(Array.isArray(adrs_ids) && adrs_ids.length > 2) {
                this.editAdress.address_ids = this.editAdress.address_ids.join(',')
            }
            this.http.post('/api/address/updateAddress',qs.stringify(this.editAdress), {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }).then(res => {
                if(res.data.code === 200) {
                    this.$message({
                        type: 'success',
                        message: res.data.msg
                    })
                    // 刷新页面
                    window.location.reload()
                }
            })
        },
        getCitiesList () {
            this.http.get('/api/member/option/getAddressOption').then(res => {
                console.log('城市列表:', res)
                this.cityList = this.formateCityList(res.data.result)
                console.log('cityList', this.cityList)
            })
        },
        formateCityList (cityList) {
            return cityList.map(item => {
                return {
                    label: item.name,
                    value: item.id,
                    children: item.children.map(item => {
                        return {
                            label: item.name,
                            value: item.id,
                            children: item.children.map(item => {
                                return {
                                    label: item.name,
                                    value: item.id
                                }
                            })
                        }
                    })
                }
            })
        }
    }
}
</script>

<style lang='less'>
 .adress {
    padding-top: 50px;
    padding-left: 160px; 
    .add_new_adress {
        width: 340px;
        font-size: 12px;
        >p {
            color: #333;
            margin-bottom: 15px;
        }

    }
    .el-form {
        margin-bottom: 50px;
        .el-form-item {
            margin-bottom: 10px;
        }
        .el-input {
            width: 240px;
        }
        .edit_adress {
            text-align: center;
            width: 200px;
            height: 40px;
            border-radius: 2px;
            background-color: #ffc90f;
            cursor: pointer;
        }
    }
 }
</style>