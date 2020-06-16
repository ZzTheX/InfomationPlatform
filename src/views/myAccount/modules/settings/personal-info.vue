<template>
  <div class='my_info'>
     <el-form :inline='false' label-width="100px">
         <el-form-item label='头像' class='avatar'>
             <img 
             width="92"
             height="92"
             :src="myInfo.face" >
            <span class='modify_button' @click='handleEditMyInfo' v-show='!isEdible'>修改</span>
            <span class='modify_button' @click='isEdible=false' v-show="isEdible">查看</span>
            <label for="editAvatar" class='edit_avatar' v-show='isEdible'>
                <span>编辑</span>
                <input type="file" style='display:none' id='editAvatar'>
            </label>
         </el-form-item>
         <el-form-item label='登录ID'>
             <p v-show='!isEdible'>123456789</p>
             <el-input v-show='isEdible' v-model='myInfo.mobile'>123456789</el-input>
         </el-form-item>
         <el-form-item label='昵称'>
             <p v-show='!isEdible'>昵称</p>
             <el-input v-show='isEdible' v-model='myInfo.nickname'>123456789</el-input>
         </el-form-item>
         <el-form-item label='性别'>
             <p v-show='!isEdible'>性别</p>
              <el-input v-show='isEdible' v-model='myInfo.sex'>123456789</el-input>
         </el-form-item>
         <el-form-item label='生日'>
             <p v-show='!isEdible'>19980326</p>
              <el-input v-show='isEdible' v-model='myInfo.birthday'>123456789</el-input>
         </el-form-item>
         <el-form-item label='常住'>
             <p v-show='!isEdible'>成都</p>
             <el-input v-show='isEdible' v-model='myInfo.resident'>123456789</el-input>
         </el-form-item>
         <el-form-item label='简介'>
             <p v-show='!isEdible'>个人简介</p>
             <el-input type='textarea' v-show='isEdible' v-model='myInfo.introduction'>个人简介</el-input>
         </el-form-item>
         <el-form-item label='喜欢的'>
             <el-tag type="info" v-for='item in 3' :key=item>标签{{item}}</el-tag>
         </el-form-item>
         <el-form-item label=' '>
             <div class='edit_myinfo' @click='submitEditMyInfo' v-show='isEdible'>提交</div>
         </el-form-item>
     </el-form>
  </div>
</template>

<script>
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
                sex: '',
                resident: '',
                like: [],
                introduction: ''
            }
        }
    },
    created () {
        this.getMyInfo()
    },
    components: {
    },
    methods: {
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
            console.log('submit => post')
            this.http.post('/api/member/updatePersonalInformation', this.myInfo).then(res => {

                console.log('submit-res', res)
                if(res.data.code === 200) {
                    this.$message({
                        type: 'success',
                        message: '密码修改成功'
                    })
                } else {
                    this.$message({
                        type: 'warning',
                        message: res.data.msg
                    })
                }
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
            .el-textarea {
                width: 224px;
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