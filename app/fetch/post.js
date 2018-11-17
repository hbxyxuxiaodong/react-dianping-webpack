import 'whatwg-fetch'

//将对象拼接成key1=val1&key2=val2&key3=val3的字符串形式

function obj2params(obj){
  var result = '';
  for (var item in obj){
      result += '&'+item+'='+encodeURIComponent(obj[item]) //encodeURIComponent() 函数可把字符串作为 URI 组件进行编码。
  }
  if(result){
      result  = result.slice(1);
  }
  return result
}
export function post(url, paramsObj){
    var result = fetch(url, {
        method: 'POST',
        credentials:'include',
        headers: {
            'Accept':'application/json,text/plain,*/*',
            'Content-Type':'application/x-www-form-urlencoded'
        },
        body:obj2params(paramsObj)
    });

    return result;

}
