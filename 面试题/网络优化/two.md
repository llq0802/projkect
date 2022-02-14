<!--
 * @Author: your name
 * @Date: 2021-12-09 19:38:11
 * @LastEditTime: 2022-01-12 20:09:29
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \projkect\面试\网络\two.md
-->

http 缓存控制

1. http 缓存能够帮助服务器提高并发性能，很多资源不需要重复请求直接从浏览器中拿缓存
2. http 缓存分类 ：强缓存 协商缓存
3. 强缓存通过 expires 和 cache-control 控制 协商缓存 通过 last-Modify（服务器返回） if-modify-since（客户端请求） 和 E-tag（服务端返回） if-none-match（客户端请求）控制

补充： 1. 为什么有 expires(http1.0) 有需要 cache-control(http1.1)
因为 expires 有个服务器和浏览器时间不同步的问题
expires 是绝对时间 cache-control 是相对时间

    2. last-modify((http1.0))和Etag (http1.1)

     last-Modify（服务器返回）/if-modify-since（客户端请求）它是有个精度问题 到秒
     E-tag（服务端返回）/if-none-match（客户端请求）没有精度问题 只要文件改变  e-tag值就改变
