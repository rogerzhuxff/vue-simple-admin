<template>
  <div class="hello" :style="backgroundDiv">

        <center class="padding-top-50">
            <div class="title">Vue+Springboot</div>
        </center>

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
      msg: 'Welcome to Your Vue.js App',
      backgroundDiv: {
          backgroundImage: 'url(' + require('../assets/bg.jpg') + ')',
        }
    }
  },
  components:{emp},
  created(){

  },
  methods:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
  font-size: 32px;
  margin-bottom: 20px;
}
.hello{
  height: 100%;
  width: 100%;
  background-size:100% 100%;
  background: no-repeat;
  /* background-image: url('../assets/bg.jpg'); */
}
.padding-top-50{
  padding-top: 50px;
}
.margin-top-50{
  margin-top:50px;
}
</style>
