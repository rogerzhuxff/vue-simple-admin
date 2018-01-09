<template>
  <div class="hello">

        <!-- <center class="padding-top-50">
            <div class="title">Vue+SSM框架——详细整合教程</div>
            <el-row class="title">Vue+Vuex+ElementUI+Spring+SpringMvc+Mybatis+shiro+swagger</el-row>
        </center> -->
        <el-button class="margin-top-50" @click="logout()">退出</el-button>
        <emp ></emp>

  </div>
</template>

<script>
import {login,helloWorld,getEmpList,addEmp,logout} from '../api/test'
import emp from './account/Emp'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{emp},
  created(){

  },
  methods:{
    logout(){
      logout().then(data=>{
        if(data.code==200){
          this.$router.push({path:'/login'});
        }else {
          _g.toastMsg('warning',data.msg);
        }

      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
  font-size: 32px;
}
.hello{
  height: 100%;
  width: 100%;
  background: url(../assets/bg.jpg) no-repeat;
  background-size:100% 100%;
}
.padding-top-50{
  padding-top: 50px;
}
.margin-top-50{
  margin-top:50px;
}
</style>
