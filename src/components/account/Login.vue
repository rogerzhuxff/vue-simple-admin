<template>
  <div class="bg">
    <el-form :model="form" :rules="rules2" ref="form" label-position="left" label-width="0px" class="demo-ruleForm card-box loginform">
      <h3 class="title">{{systemName}}</h3>
      <el-form-item prop="username">
        <el-input type="text" v-model="form.username" auto-complete="off" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="form.password" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" v-loading="loading" @click.native.prevent="handleSubmit2('form')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {login} from '../../api/test'
  export default {
    data() {
      return {
        systemName: '简易后台登录系统',
        loading: false,
        form: {
          username: '',
          password: '',
        },
        rules2: {
          username: [
            { required: true, message: '请输入账号', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ],
          verifyCode: [
            { required: false, message: '请输入验证码', trigger: 'blur' }
          ]
        },
        checked: false
      }
    },
    methods: {

      handleSubmit2(form) {
        if (this.loading) return
        this.$refs.form.validate((valid) => {
          if (valid) {
                  this.loading = !this.loading
                  //登录接口
                  this.doLogin();
          } else {
            return false
          }
        })
      },
      doLogin(){
        login(this.form).then(data=>{
          sessionStorage.setItem('user', JSON.stringify(data));
          this.$router.push({ path: '/hello' })
        })
      },

    },
    created() {

    },
    mounted() {
      window.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
            this.doLogin();
        }
      })
    }
  }
</script>

<style scoped="scoped">
.bg{
  height: 100%;
}
.card-box {
	padding: 20px;
	/*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
	-webkit-border-radius: 5px;
	border-radius: 5px;
	-moz-border-radius: 5px;
	background-clip: padding-box;
	background-color: #F9FAFC;
	margin: 300px auto;
	width: 400px;
}

.title {
	margin: 0px auto 40px auto;
	text-align: center;
	color: #505458;
}

.loginform {
	width: 350px;
	padding: 35px 35px 15px 35px;
}
</style>
