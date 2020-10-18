<template>
  <div id="test1">
  
    <!-- 文件下载 -->
    <el-button  size="small" @click="downLoad('testZip.zip')">下载</el-button>

</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'app',
  methods:{
    //下载文件
    downLoad: function (val) {
        window.open("http://localhost:8082/test/download?fileName=" + val, '_blank')
    }
  }
}

</script>
