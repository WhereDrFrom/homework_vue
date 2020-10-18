<template>
 <el-upload
 :before-upload="beforeAvatarUpload"
  class="upload-demo"
  drag
  accept=".doc,.docx"
  action="http://localhost:8082/test/upload"
  multiple>
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
  <div class="el-upload__tip" slot="tip">只能上传doc/docx文件，且不超过5mb</div>
</el-upload>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },methods:{
    beforeAvatarUpload(file) {
        const isLt5M = file.size / 1024 / 1024 < 5;
        console.log(file.name);
        let flag = "yes";
        let flag2 = true;
        var reg = new RegExp('[0-9]{8}_.{2,4}_.*')
        flag2 = reg.test(file.name);
        let len = file.name.length;
        
        if (!isLt5M) {
          this.$message.error('上传文件大小不能超过 5MB!');
        }

        if(!flag2){
          this.$message.error('文件名字错误');
        }
        return isLt5M && flag2;
      }
  }
}

</script>
