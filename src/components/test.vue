<template>
  <div class="hello">
    <el-button @click="login()">登录</el-button><br />
    <el-button @click="helloWorld()">HelloWorld</el-button>
    <el-button @click="getEmpList()">getEmpList</el-button>
    <el-button @click="addEmp()">addEmp</el-button>
      <el-button @click="logout()">logout</el-button>
  </div>
</template>

<script>
import qs from 'qs';
import {login,helloWorld,getEmpList,addEmp,logout} from '../api/test'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){

  },
  methods:{

    login(){

      let user = {"username":"admin","password":"admin"};
          user = {"username":"user","password":"user"};

      login(user).then(data=>{
       console.log('ss',data);
      })
    },
    helloWorld(){
      helloWorld().then(data=>{
       console.log('hh',data);
      })
    },
    getEmpList(){
      let ata = {"pageNum":1,"pageSize":3};
      getEmpList(ata).then(data=>{
       console.log('hh',data);
      })
    },
    addEmp(){
      let ata = {"empname":"小橘子","age":"1","email":"xiaojuzi@ff.com","birthday":"2017-02-13"};
      addEmp(ata).then(data=>{
       console.log('add',data);
      })
    },
    logout(){
      logout().then(data=>{
       console.log('add',data);
      })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
