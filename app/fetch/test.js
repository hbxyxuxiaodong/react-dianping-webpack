import 'whatwg-fetch'
export function getData(){
    // '/api/1' 获取字符串
    var result = fetch('/api/1',{
        credentials:'include',//传cookie的一个设置
        headers:{
            'Accept':'application/json,text/plain,*/*'
        }
    })
    result.then(res => {
        return res.text()
    }).then(text => {
        console.log(text)
    })
    // '/api/2' 获取json
    var result1 = fetch('/api/2',{
        credentials:'include',
        headers:{
            'Accept':'application/json,text/plain,*/*'
        }
    });
    result1.then(res => {
        return res.json()
    }).then(json => {
        console.log(json)
    })
}
export function postData(){
    // '/api/post' 提交数据
    var result = fetch('/api/post',{
        method:'post',
        credentials:'include',
        headers:{
            'Accept':'application/json,text/plain,*/*',
            'Content-Type':'application/x-www-form-urlencoded'
        },
        body:'a=100&b=200'
    });
    result.then(res => {
        return res.json()
    }).then(json => {
        console.log(json)
    })
}