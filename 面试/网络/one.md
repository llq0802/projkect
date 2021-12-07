http 请求的推演过程

1.  url(www.baidu.com) => ip (192.168.1.2)
2.  拿到 ip 去跟服务器建立 tcp 连接
3.  建立 tcp 连接之后发起 http 请求 （ tcp 是比 http 更底层一个连接协议）（ip 是 tcp 下面一层）
4.  http 连接建立之后 服务器把 html 发送给浏览器
5.  浏览器解析 html（js 文件，css 文件，图片 下载 运行）
6.  浏览器渲染 html
7.  服务器关闭连接 tcp http

一次完整的 http 请求过程 版本 1.0
