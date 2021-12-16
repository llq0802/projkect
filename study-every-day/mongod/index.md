<!--
 * @Author: your name
 * @Date: 2021-11-26 14:35:02
 * @LastEditTime: 2021-12-16 12:13:25
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3.0-cli-ts\study-every-day\mongod\index.md
-->

db //表示当前数据库

标准连接数据库的格式
mongodb://[username:password@]host1[:port1],host2[:port2],...[,hostN[:portN]]][/[database][?options]]
mongodb://admin:123456@localhost/test

"show dbs" 命令可以显示所有数据库
show <collections> //某个数据库中所有集合（数组）。

use <数据库名> //进入某个数据库 不需要创建

db.createCollection(name, options)创建集合

db.<集合名>>.insert() 新增
db.<collection>.find().sort({key：1}) 1 升 -1 降
db.<collection>.find().limit() 前多少条数据 （多少条）
db.<collection>.find().skip() 后多少条数据 （从哪条跳过）
db.<collection>.update()更新
db.<collection>.find().count()

db.update({},{\$set:{}},{multi:true})

db.<collection>.drop()//删除集合（数组，表）
db.dropDatebase()//删除数据库

$gte >=
$gt >
$lte <=
$lt <
\$ne != 不等于

db.col.find(
{
\$or: [
{key1: value1}, {key2:value2}
]
}
)

\*\*
如果想获取 "col" 集合中 title 为 String 的数据，你可以使用以下命令：
db.col.find({"title" : {$type : 2}})
或
db.col.find({"title" : {$type : 'string'}})

db.collection.createIndex(keys, options)
db.<collection>.createIndex({name:1}) //为表中的数据设置索引
db.<collection>.entrueIndex({name:1}) //为表中的数据设置索引
db.col.getIndexes()

db.mycol.aggregate([{$group : {_id : "$by_user", num_tutorial : {$sum : 1}}}])

\$lookup

分页查询
db.表名.find().skip((page-1) \* pageSize).limit(pageSize)

\$or 　　　　或关系

\$nor 　　　 或关系取反

\$gt 　　　　大于

\$gte 　　　 大于等于

\$lt 　　　　 小于

\$lte 　　　 小于等于

\$ne 不等于

\$in 在多个值范围内

\$nin 不在多个值范围内

\$all 匹配数组中多个值

\$regex 　　正则，用于模糊查询

\$size 　　　匹配数组大小

\$maxDistance 　　范围查询，距离（基于 LBS）

\$mod 　　 取模运算

\$near 　　　邻域查询，查询附近的位置（基于 LBS）

\$exists 　　 字段是否存在

\$elemMatch 　　匹配内数组内的元素

\$within 　　范围查询（基于 LBS）

\$box 　　　 范围查询，矩形范围（基于 LBS）

\$center 范围醒询，圆形范围（基于 LBS）

\$centerSphere 　　范围查询，球形范围（基于 LBS）

\$slice 　　　　查询字段集合中的元素（比如从第几个之后，第 N 到第 M 个元素）

$regex 正则查询 //   关键字查询 db.posts.find({title:{$regex:title,$Option:"\$i"} }})

db.mycol.aggregate(
[
{
$lookup:
{
from: <collection to join>,
localField: <field from the input documents>,
foreignField: <field from the documents of the "from" collection>,
as: <output array field>
}
}
]
)

{
\$lookup:
{
from: <collection to join>, 表名
localField: <field from the input documents>, 主表关联的字段
foreignField: <field from the documents of the "from" collection>,副表关联的字段
as: <output array field>  
 }
}
语法值 解释说明
from
同一个数据库下等待被 Join 的集合（表名）。
localField
源集合中的 match 值，如果输入的集合中，某文档没有 localField

这个 Key（Field），在处理的过程中，会默认为此文档含

有 localField：null 的键值对。

foreignField
待 Join 的集合的 match 值，如果待 Join 的集合中，文档没有 foreignField
值，在处理的过程中，会默认为此文档含有 foreignField：null 的键值对。
as
为输出文档的新增值命名。如果输入的集合中已存在该值，则会覆盖掉，
