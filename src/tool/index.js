import axios from 'axios' //http请求工具
//import axiosMain from 'axios'
import router from '../router' //加载路由
import _g from './global' //加载公共方法
window.debug = true;
import Router from 'vue-router'
axios.defaults.baseURL = 'http://localhost:8082' //接口地址
//axios.defaults.baseURL = 'http://www.xuhuifeng.online/test' //接口地址

axios.defaults.timeout = 1000 * 60 //请求超时时间
axios.defaults.withCredentials = true
// axios.defaults.headers.AUTHORIZTION_FLAG = 'sds334fsfsdfdsfsfsf'


// const axios = axiosMain.create({
//     baseURL: 'http://localhost:8080/',
//     timeout: 5000,
//     headers: {
//         'Content-Type': 'application/json',
//         'AUTHORIZTION_FLAG': 'xxxasdasdads',
//     },
//     withCredentials:true
// });



import Vue from 'vue'
const bus = new Vue();
window.bus = bus

// 添加请求拦截器
axios.interceptors.request.use(function(config) {
  // 在发送请求之前做些什么
  // config.headers = {
  //   'Content-Type': 'application/json',
  // }

  _g.c('requestConfig',config);
  return config;
}, function(error) {
  // 对请求错误做些什么

  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function(response) {
  //调试模式 打印请求返回的数据
  if (debug) {
    _g.cns();
    _g.c('请求地址：', response.config.url);
    if (response.config.data) {
      _g.c('请求参数：', response.config.data);
    } else {
      _g.c('请求参数：', null);
    }
    _g.c('response->status', response.status);
    _g.c('响应数据：', response.data);
    _g.cne();
  }

  if (response.data.code == 1001) {

    _g.toastMsg("warning","登录失效,3秒后自动跳转到登陆页！");

    setTimeout(function() {
      router.push({
        path: '/login'
      })
    }, 3000)
  } else if(response.data.code !=200){
    _g.toastMsg("error",response.data.message);
  }

  // 对响应数据做点什么
  return response;
}, function(error) {
  // 对响应错误做点什么
  _g.c('response-error:', error)
  return Promise.reject(error);
});


//添加到windowd对象中

window.axios = axios
