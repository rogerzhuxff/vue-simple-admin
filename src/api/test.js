import {apiPost,apiGet} from '../tool/http'

//模拟请求数据
export const login = params => { return apiPost('/login/dologin', params).then(data => data); };

//登出
export const logout = () => { return apiPost('/login/logout').then(data => data); };

//模拟请求数据
export const helloWorld = () => { return apiPost('/hw/t1').then(data => data); };

//获取员工列表
export const getEmpList = params => { return apiPost('/emp/getEmpList',params).then(data => data); };

//新增员工
export const addEmp = params => { return apiPost('/emp/addEmp', params).then(data => data); };

//删除员工
export const deleteEmp = params => { return apiPost('/emp/deleteEmp/'+params).then(data => data); };

//修改员工信息
export const updateEmp = params => { return apiPost('/emp/updateEmp',params).then(data => data); };
