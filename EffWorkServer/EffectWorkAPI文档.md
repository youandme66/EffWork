### 用户注册
url : /user/register

|请求参数名|类型|约束|
|-|-|
|login_name|string|2-8个字|
|phone_number|number|11位|
|password|string|6-12位|
|signature|string|20-30位|
|qq_number|number|11位以内 |
返回示例
``` bash
{
    code: 500,
    msg: "注册失败"
}
{
    code: 500,
    msg: "已有此用户"
}
{		
    code: 200,  
    msg: '注册成功'
}

```
### 用户登录
url : /user/login

|请求参数名|类型|约束|
|-|-|-|
|phone_number|string|11位|
|password|string|6-14位|
返回示例
``` bash
{
    code: 500,
    msg: '登录失败'
}
{
    code: 500,
    msg: "无此用户"
}
{
    code: 200,
    msg: "登录成功"
}
{
    code: 500,
    msg: "密码不正确"
}
```

### 第三方登录路由
url : /user/otherlogin

|请求参数名|类型|约束|
|-|-|-|
|qq_sign|string|无|
返回示例
``` bash
{
    code:500,
    msg: '登录失败'
}
{
    code:500,
    msg:'服务器错误'
}
{
    code:200,
    msg:'登录成功'
}
```


### 获取用户信息
url : /user/getuserinfo

不需要请求参数
返回示例
``` bash
{
    code:500,
    msg:'服务器错误'
}
{
  "code": 200,
  "msg": {
    "_id": "58c93f77462aa0c8cd530968",
    "create_at": "2017-03-14T16:00:00.000Z",
    "qq_number": "1319135082",
    "phone_number": "13554468370",
    "signature": "我们都是好孩子",
    "isSetProblem": true,
    "isOpenShake": false,
    "isOpenMusic": false,
    "login_name": "liuzhihao"
  }
}
```


### 设置密保
url : /user/setsafeproblem

|请求参数名|类型|约束|
|-|-|-|
|problem|string|20-30位|
|answer|string|10-20位|
返回示例
``` bash
{
    code:500,
    msg:'设置密保失败'
}
{
    code:500,
    msg:'你已经设置过密保，不需要再次设置'
}
{
    code:500,
    msg:'服务器出错'
}
{
    code:200,
    msg:'添加密保成功'
}
```


### 设置个性签名
url : /user/changesignature

|请求参数名|类型|约束|
|-|-|-|
|signature|string|无|
返回示例
``` bash
{
    code:500,
    msg:'修改个性签名失败'
}
{
    code:200,
    msg:'修改个性签名成功'
}
```


### 更改用户设置
url : /user/updateusersetting

|请求参数名|类型|约束|
|-|-|-|
|isOpenMusic|boolean|无|
|isOpenShake|boolean|无|
返回示例
``` bash
{
    code:200,
    msg:'修改个性签名成功'
}
{
    code:200,
    msg:'修改设置成功'
}
```


### 修改密码
url : /user/updatepassword

|请求参数名|类型|约束|
|-|-|-|
|oldPassword|string|无|
|newPassword|string|无|
返回示例
``` bash
{
    code:500,
    msg:'修改失败'
}
{
    code:500,
    msg:'原密码错误'
}
{
    code:200,
    msg:'修改成功'
}
```


### 获得用户密保问题
url : /user/getproblem

|请求参数名|类型|约束|
|-|-|-|
|phone_number|string|11位|
返回示例
``` bash
{
    code:500,
    msg:'服务器错误'
}
{
    code:500,
    msg:'未找到此手机号'
}
{
  "code": 200,
  "msg": {
    "_id": "58c93f77462aa0c8cd530968",
    "problem": "我的母亲是谁?"
  }
}
```


### 验证密保问题
url : /user/validator

|请求参数名|类型|约束|
|-|-|-|
|phone_number|string|11位|
|answer|string|无|
返回示例
``` bash
{
    code:500,
    msg:'服务器错误'
}
{
    code:500,
    msg:'回答问题错误'
}
{
    code:200,
    msg:'问题回答正确'
}
```


### 找回密码
url : /user/findpassword

|请求参数名|类型|约束|
|-|-|-|
|phone_number|string|11位|
|password|string|6-12位|
返回示例
``` bash
{
    code:500,
    msg:'密码找回失败'
}
{
    code:200,
    msg:'密码找回成功'
}
```


### 获得用户设置
url : /user/getinfo

无请求参数
返回示例
``` bash
{
    code:500,
    msg:'获取失败'
}
{
  "code": 200,
  "msg": {
    "_id": "58c93f77462aa0c8cd530968",
    "isOpenShake": false,
    "isOpenMusic": false
  }
}
```


### 退出登录
url : /user/logout

无请求参数
返回示例
``` bash
{
    code:200,
    msg:'退出成功'
}
```

### 添加任务
url : /task/addtask

|请求参数名|类型|约束|
|-|-|-|
|task_name|string|4-10位|
|task_description|string|30-40位|
|tomato_count|number||
|task_enddate|date|大于当前日期|
返回示例
``` bash
{
    code:500,
    msg:'添加任务失败'
}
{
    code:200,
    msg:'添加任务成功'
}
```


### 更新任务
url : /task/updatetask

|请求参数名|类型|约束|
|-|-|-|
|id|string|原始id|
|task_name|string|4-10位|
|task_description|string|30-40位|
|task_tomato_count|number|无|
|task_enddate|date|大于当前日期|
返回示例
``` bash
{
    code:200,
    msg:'没有此任务或此任务正在进行中'
}
{
    code:500,
    msg:'修改任务成功'
}
```

### 删除任务
url : /task/deletetask

|请求参数名|类型|约束|
|-|-|-|
|id|string|原始id|
返回示例
``` bash
{
    code:500,
    msg:'删除任务失败'
}
{
    code:200,
    msg:'删除任务成功'
}
```

### 查询任务
url : /task/findtask

无请求参数
返回示例
``` bash
{
    code:500,
    msg:'查询任务失败'
}
{
  "code": 200,
  "msg": [
    {
      "_id": "58cbac83abf922405b37c13c",
      "task_enddate": "2017-03-17T16:00:00.000Z",
      "tomato_count": 5,
      "task_description": "叫上朋友一起去打球",
      "task_name": "周六去打球",
      "user_id": "58c93f77462aa0c8cd530968",
      "done_tomatoconut": 0,
      "task_begindate": "2017-03-16T16:00:00.000Z",
      "task_status": -1
    },
    {
      "_id": "58cbad1dabf922405b37c13d",
      "task_enddate": "2017-03-17T16:00:00.000Z",
      "tomato_count": 5,
      "task_description": "叫上朋友一起去打球",
      "task_name": "周六去打球",
      "user_id": "58c93f77462aa0c8cd530968",
      "done_tomatoconut": 0,
      "task_begindate": "2017-03-16T16:00:00.000Z",
      "task_status": -1
    }
  ]
}
```

### 更新番茄钟数量
url : /task/updatetomatocount

|请求参数名|类型|约束|
|-|-|-|
|id|string|原始id|
返回示例
``` bash
{
    code:500,
    msg:'此任务已完成'
}
{
    code:200,
    msg:'更新番茄钟成功'
}
```

### 更新任务状态
url : /task/updatetaskstatus

|请求参数名|类型|约束|
|-|-|-|
|id|string|无|
返回示例
``` bash
{
    code:500,
    msg:'更新失败'
}
{
    code:200,
    msg:'更新成功'
}
```

### 获得未完成任务
url : /task/getnodonetask

无请求参数
返回示例
``` bash
{
code:500,
msg:'查询失败'
}
{
  "code": 200,
  "msg": [
    {
      "_id": "58cbad1dabf922405b37c13d",
      "task_enddate": "2017-03-17T16:00:00.000Z",
      "tomato_count": 5,
      "task_description": "叫上朋友一起去打球",
      "task_name": "周六去打球",
      "user_id": "58c93f77462aa0c8cd530968",
      "done_tomatoconut": 0,
      "task_begindate": "2017-03-16T16:00:00.000Z",
      "task_status": -1
    }
  ]
}
```

### 获得已完成任务
url : /task/getdonetask

无请求参数
返回示例
``` bash
{
code:500,
msg:'查询失败'
}
{
  "code": 200,
  "msg": [
    {
      "_id": "58cbad1dabf922405b37c13d",
      "task_enddate": "2017-03-17T16:00:00.000Z",
      "tomato_count": 5,
      "task_description": "叫上朋友一起去打球",
      "task_name": "周六去打球",
      "user_id": "58c93f77462aa0c8cd530968",
      "done_tomatoconut": 0,
      "task_begindate": "2017-03-16T16:00:00.000Z",
      "task_status": 1
    }
  ]
}
```

### 获得正在进行中的任务
url : /task/getdoingtask

无请求参数
返回示例
``` bash
{
code:500,
msg:'查询失败'
}
{
  "code": 200,
  "msg": [
    {
      "_id": "58cbad1dabf922405b37c13d",
      "task_enddate": "2017-03-17T16:00:00.000Z",
      "tomato_count": 5,
      "task_description": "叫上朋友一起去打球",
      "task_name": "周六去打球",
      "user_id": "58c93f77462aa0c8cd530968",
      "done_tomatoconut": 0,
      "task_begindate": "2017-03-16T16:00:00.000Z",
      "task_status": 0
    }
  ]
}
```

### 获得未完成任务数量
url : /task/getnodonecount

无请求参数
返回示例
``` bash
{
    code:500,
    msg:'查询失败'
}
{
  "code": 200,
  "msg": 1
}
```

### 获得已完成任务的数量
url : /task/getdonecount

无请求参数
返回示例
``` bash
{
    code:500,
    msg:'查询失败'
}
{
  "code": 200,
  "msg": 1
}
```

### 获得正在进行的任务
url : /task/getdoingcount

无请求参数
返回示例
``` bash
{
    code:500,
    msg:'查询失败'
}
{
  "code": 200,
  "msg": 1
}
```