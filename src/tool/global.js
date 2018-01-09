const commonFn = {
  c(i,obj){ //调试
    if(debug){
      console.log(i,obj);
    }
  },
  cns(){
    if(debug){
      console.log('<--------------start------------->');
    }
  },
  cne(){
     if(debug){
      console.log('<---------------end-------------->');
    }
  },
  ce(i,obj){
    if(debug){
      console.error(i,obj);
    }
  },
  j2s(obj) {//json转字符串
    return JSON.stringify(obj)
  },
  s2j(obj) {//字符串转json
    return JSON.parse(obj)
  },
  cloneJson(obj) { //克隆对象
    return JSON.parse(JSON.stringify(obj))
  },
  removeByValue(arr, val) {
    for(var i=0; i<arr.length; i++) {
      if(arr[i] == val) {
        arr.splice(i, 1);
        break;
      }
    }
  },
  getAuth(role,authName){
    var temp = auth[role];
    if(temp.indexOf(authName) > 0){
      return true;
    }else{
      return false;
    }

  },
  toastMsg(type, msg) { //消息提示
    switch (type) {
      case 'normal':
        bus.$message(msg)
        break
      case 'success':
        bus.$message({
          message: msg,
          type: 'success'
        })
        break
      case 'warning':
        bus.$message({
          message: msg,
          type: 'warning'
        })
        break
      case 'error':
        bus.$notify.error({message:msg})
        break
    }
  },
  solveArray(arr){
    /*for(var i in arr){
      if(typeof arr[i] == 'object'){
        for(var j in arr[i]){
          if(!arr[i][j]){
            arr[i][j] = '-';
          }
        }
      }else{
        if(!arr[i]){
          arr[i] = '-';
        }
      }

    }*/
    return arr;
  }
}

export default commonFn
