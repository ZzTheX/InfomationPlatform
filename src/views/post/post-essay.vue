<template>
    <div class="post_essay">
        <el-form > 
            <el-form-item label="商品名称">
                <el-input></el-input>
            </el-form-item>
            <el-form-item label="添加描述详情">
                <el-input type='textarea'></el-input>
            </el-form-item>
            <el-form-item label="添加图片或视频">
                <p>不大于9张(第一张为默认产品图)</p>
            </el-form-item>
            <el-form-item label="'">
               <img src="../../assets/upload.png" alt="">
            </el-form-item>
            <el-form-item label="关联产品">
                <el-select></el-select>
            </el-form-item>
            <el-form-item label="'">
                <div class='img_list'>
                    <img src="../../assets/post_essay.png" alt="">
                    <img src="../../assets/post_essay.png" alt="">
                    <img src="../../assets/post_essay.png" alt="">
                    <img src="../../assets/post_essay.png" alt="">
                    <img src="../../assets/post_essay.png" alt="">
                    <img src="../../assets/post_essay.png" alt="">
                </div>
            </el-form-item>
            <div class='post_now'>立即发布</div>
        </el-form>
    </div>
</template>

<script>
export default{

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
 }
</style>