<template>
  <div class='my_info'>
     <el-form :inline='false' label-width="100px">
         <el-form-item label='头像' class='avatar'>
             <img 
             width="92"
             height="92"
             :src="myInfo.face" >
            <span class='modify_button' @click='handleEditMyInfo' v-show='!isEdible'>编辑</span>
            <span class='modify_button' @click='isEdible=false' v-show="isEdible">查看</span>
            <label for="editAvatar" class='edit_avatar' v-show='isEdible'>
                <span>上传</span>
                <input type="file" style='display:none' id='editAvatar' @change='uploadAvatar'>
            </label>
         </el-form-item>
         <el-form-item label='登录ID'>
             <p>{{myInfo.mobile}}</p>
         </el-form-item>
         <el-form-item label='昵称'>
             <p v-show='!isEdible'>{{myInfo.nickname}}</p>
             <el-input v-show='isEdible' v-model='myInfo.nickname'></el-input>
         </el-form-item>
         <el-form-item label='性别'>
             <p v-show='!isEdible'>{{myInfo.sex || '未选择'}}</p>
              <el-select v-show='isEdible' v-model='myInfo.sex'>
                  <el-option 
                    v-for='(item, index) in sexOptions'
                    :key='index'
                    :label="item.label"
                    :value='item.value'></el-option>
              </el-select>
         </el-form-item>
         <el-form-item label='生日'>
             <p v-show='!isEdible'>{{dateFormat(myInfo.birthday) || '未选择'}}</p>
              <el-date-picker type='date' v-show='isEdible' v-model='myInfo.birthday'></el-date-picker>
         </el-form-item>
         <el-form-item label='常住地址'>
             <p v-show='!isEdible'>{{myInfo.resident || '未选择'}}</p>
             <el-input v-show='isEdible' v-model='myInfo.resident'></el-input>
         </el-form-item>
         <el-form-item label='简介'>
             <p v-show='!isEdible'>{{myInfo.introduction || '未填写'}}</p>
             <el-input type='textarea' v-show='isEdible' v-model='myInfo.introduction'></el-input>
         </el-form-item>
         <el-form-item label='喜欢的'>
             <el-tag type="info" v-for='item in myInfo.like' :key='item'>{{item}}</el-tag>
         </el-form-item>
         <el-form-item label=' '>
             <div class='edit_myinfo' @click='submitEditMyInfo' v-show='isEdible'>提交</div>
         </el-form-item>
     </el-form>
  </div>
</template>

<script>
import { dateFormat } from '../../../../utils/transform.js'
export default {
    data () {
        return {
            modifyButtonText: '修改',
            isEdible: false,
            avatarSrc: require('../../../../assets/user_avatar1.png'),
            myInfo: {
                mobile: '',
                face: '',
                nickname: '',
                birthday: '',
                sex: '',
                resident: '',
                like: [],
                introduction: ''
            },
            sexOptions: [
                {
                    label: '男',
                    value:'男'
                },
                {
                    label: '女',
                    value: '女'

                }
            ]
        }
    },
    created () {
        this.getMyInfo()
    },
    components: {
    },
    methods: {
        dateFormat: dateFormat,
        uploadAvatar (e) {
            console.log('upload')
            this.$store.commit('startLoading')
            let file = e.target.files[0]
            let formData = new FormData()
            formData.append('file', file)
            this.http.post('/api/member/option/uploadFile', formData).then(res => {
                this.myInfo.face = res.data.result
                this.$store.commit('endLoading')
            })

        },
        handleLogout () {
            localStorage.clear()
            this.$router.push('/')
        },
        handleEditMyInfo () {
            this.isEdible = true
        },
        getMyInfo () {
            this.http.get('/api/member/personalInformation').then(res => {
                if(res.data.code === 200) {
                    this.myInfo = res.data.result
                }
                console.log('个人信息', this.myInfo)
            })
        },
        submitEditMyInfo () {
            console.log('submit => post', this.myInfo)
            this.myInfo.birthday = new Date(this.myInfo.birthday).getTime()
            this.http.post('/api/member/updatePersonalInformation', this.myInfo).then(res => {
                console.log('submit-res', res)
                if(res.data.code === 200) {
                    this.$message({
                        type: 'success',
                        message: res.data.msg
                    })
                } else {
                    this.$message({
                        type: 'warning',
                        message: res.data.msg
                    })
                }
                this.getMyInfo()
                this.isEdible = false
            })
        }
    }
}
</script>

<style lang='less' scoped>
.my_info {
    padding-top: 51px;
    padding-left: 41px;
    .el-form {
        .el-form-item {
            display: flex;
            /deep/.el-form-item__label {
                font-size: 16px;
                color: #333;
            }
            /deep/.el-form-item__content {
                display: flex;
            }
            .el-select {
                width: 224px;
            }
            .el-textarea {
                width: 224px;
                .el-textarea__inner {
                    height: 100px;
                }
            }
        }
        .avatar {
            position: relative;
            /deep/.el-form-item__content {
            }
            .edit_avatar {
                position: absolute;
                bottom: 0;
                width: 92px;
                height: 30px;
                line-height: 30px;
                text-align: center;
                color: #fff;
                background-color: rgba(0, 0, 0, 0.6);
                cursor: pointer;
            }
        }
        .log_out {
            cursor: pointer;
        }
        .modify_button {
            flex-grow: 0;
            margin-left: 200px;
            display: inline-block;
            width:90px;
            height: 36px;
            line-height: 36px;
            background:rgba(255,201,15,1);
            padding-left: 17px;
            font-size: 18px;
            font-weight: 550;
            border-radius:4px;
            background-image: url('../../../../../src/assets/pencil.png');
            background-repeat: no-repeat;
            background-position: 57px 10px;
            background-size: 16px 16px;
            color: #fff;
            cursor: pointer;
        }
        .edit_myinfo {
            width: 224px;
            height: 40px;
            text-align: center;
            line-height: 40px;
            background-color: #FFC733;
            cursor: pointer;
        }
    }
    
}
</style>