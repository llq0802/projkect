<!--
 * @Author: your name
 * @Date: 2021-11-26 14:35:02
 * @LastEditTime: 2021-12-01 11:42:49
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
db.表名.find().skip((page-1)\*pageSize).limit(pageSize)

\$regex 正则查询

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
