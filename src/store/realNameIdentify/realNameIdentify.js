import axios from '../../api/index';
export default {
   namespaced: true,
   state: {
    frontImg: '',
    reverseImg: '',
    address: '',
    birthday: '',

   },
   mutations: {

   },
   actions: {
      //    上传身份证
      async upload(context,data) {
         console.log('上传身份证数据:', data)
         return await axios.post('/api/member/option/uploadFile',
            data,
            {
               headers: {
                  "Content-Type": "multipart/form-data"
               }
            }
         ).then(({ data }) => data)
      },
      //    开始认证
      async authentication(context,data){
         console.log(data);
         return await axios.post('/api/approve/realPersonCertification',data,
         {headers:{dataType:"jsonp",crossDomain: true,}}
         )
         .then(({data})=>data)
         .catch(({data})=>data)
      }
   }
}