<template>
    <div class="post_essay">
        <el-form > 
            <el-form-item label="文章标题">
                <el-input v-model="articleData.article_name"></el-input>
            </el-form-item>
            <el-form-item label="文章内容">
                <el-input type='textarea' v-model="articleData.article_content"></el-input>
            </el-form-item>
            <el-form-item label="添加图片">
                <p>不大于9张(第一张为默认产品图)</p>
            </el-form-item>
            <el-form-item label="'">
                <div class='imgsPreview'>
                    <img width="80px" height='80px' v-for='(item, index) in imgsPreviewList' :key='index' :src=item>
                    <label for="productImg">
                        <img :src="require('../../assets/upload.png')" width="80px" height="80px" v-show='isShowUpload'>
                        <input type="file" ref='imgUpload' id="productImg" style='display:none'>
                    </label>
                </div>
            </el-form-item>
            <el-form-item label="关联产品">
                <el-button @click='goToLinkProducts'>添加关联商品</el-button>
            </el-form-item>
            <el-form-item label="'">
                <!-- <div class='img_list'>
                    <img src="../../assets/post_essay.png" alt="">
                    <img src="../../assets/post_essay.png" alt="">
                    <img src="../../assets/post_essay.png" alt="">
                    <img src="../../assets/post_essay.png" alt="">
                    <img src="../../assets/post_essay.png" alt="">
                    <img src="../../assets/post_essay.png" alt="">
                </div> -->
            </el-form-item>
            <div class='post_now' @click='publishPassageNow'>立即发布</div>
        </el-form>
    </div>
</template>

<script>
export default{
    data () {
        return {
            isShowUpload: true,
            imgsPreviewList: [],
            articleData: {
                article_content: '',
                article_name: '',
                link_product: '90',
                picture: ''
            }
        }
    },
    created () {
        this.$store.commit('stepChange', true)
    },
    mounted () {
        this.imgUpload()
    },
    methods: {
        goToLinkProducts () {
            this.$router.push({
                name: 'myPosts'
            })
        },
        publishPassageNow () {
            this.http({
                url: '/api/article/addArticle',
                method: 'post',
                data: this.articleData
            }).then(res => {
                console.log('发布推文返回信息', res)
            })
        },
        imgUpload () {
            let inpt = this.$refs.imgUpload
            let that = this
            inpt.onchange = function () {
                that.$store.commit('startLoading')
                console.log('onchange事件执行')
                let file = this.files[0]
                let formData = new FormData()
                formData.append('file', file)
                console.log(formData,file, that.http)
                that.http.post('/api/member/option/uploadFile', formData).then(res => {
                that.$store.commit('endLoading')
                let imgUrl = res.data.result
                that.imgsPreviewList.push(imgUrl)
                // that.requireData.picture_or_video.push({
                //     type: 1,
                //     url: imgUrl
                // })
                    // if(that.imgsPreviewList.length >=9 ) {
                    // console.log(that.imgsPreviewList.length)
                    // that.isShowUpload = false
                    // }
                })
            }
        },
    }
}
</script>

<style lang='less'>
 .post_essay {
     background-color: #fff;
     padding-left: 300px;
     padding-top: 39px;
     padding-bottom: 44px;
     .el-form {
        //  width: ;
        .el-form-item__label  {
            width: 120px;
        }
        .el-input, .el-textarea {
            width: 309px;
        }
        .post_now {
            width:310px;
            height:56px;
            background:rgba(255,199,51,1);
            border-radius:4px;
            line-height: 56px;
            font-size: 24px;
            font-weight: 400;
            color: #333;
            text-align: center;
            margin-left: 120px;
            margin-top: 50px;
            cursor: pointer;
        }
     }
     .img_list {
         width: 309px;
         display: flex;
         flex-wrap: wrap;
         justify-content: space-between;
         img {
             width: 92px;
             height: 92px;
             margin-bottom: 10px;
         }
     }
      .imgsPreview {
        display: flex;
        flex-wrap: wrap;
        width: 300px;
        > img {
            margin-right: 20px;
        }
    }
 }
</style>