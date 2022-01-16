## 生成树状目录结构：tree /f > txt.txt

1. (/是根目录 ./是当前目录! ../是上一层目录!)
2. （cd 到下一级目录 cd..返回上一级目录）

```
name:包名
version:包的版本号，每次发包这个版本号都要改
description：包的描述
private：是否私有，一般都是false
author:作者
license：npm包协议 MIT
keywords：关键字，供npm上模糊搜索到包 []
main: 入口文件

npm login //登录自己的npm账号
npm publish
npm unpublish 包名@版本号
```

---

_ git config --global user.name "李岚清"
_ git config --global user.email 958614130@qq.com

---

-     * 如果你是使用 https 推拉，配置客户端记住密码：git config --global credential.helper store

---

      *  git clone  克隆远程仓库地址 自动会将仓库分支关联
      * bug修复分支名-hotfix  功能需求分支名-feture  主分支-master 开发分支-dev  测试分支-test

---

-     * 本地仓库关联远程仓库: git remote add origin 你的远程仓库地址 (如果远程没有分支 就自动新建master)
      * 取消本地目录下关联的远程库：git remote remove origin
      *  git remote -v 查看远程仓库地址
      * git statu 然后查看状态

---

-     *  当github上已经有master分支和dev分支
      *  在本地git checkout -b dev 新建并切换到本地dev分支
      *  git pull origin dev 本地分支与远程分支相关联
-     *  当远程没有分支,在本地新建分支并推送到远程
      *  git checkout -b test
      *  git push origin test   这样远程仓库中也就创建了一个test分支
      *  第一次push远程地址要加-u
-     *

---

       *  本地分支合并方法：
       *  假如我们现在在dev合并到master，
       *  git add .
       *  git commit -m ‘dev'
       *  git push -u origin dev
       *  然后我们要把dev分支的代码合并到master分支上 该如何？
       *  首先切换到master分支上
       *  git checkout master
       *  如果是多人开发的话 需要把远程master上的代码pull下来
       *  git pull origin master
       *  如果是自己一个开发就没有必要了，为了保险期间还是pull
       *  然后我们把dev分支的代码合并到master上
       *  git merge dev

---

       * 撤销当前的修改：git reset --hard
       * 回退到某一版本但保存自该版本起的修改，可以将 --hard 改为具体的Commit的id如: git reset 1d7f5d89346
       * 回退到某一版本并且放弃所有的修改 如: git reset --hard 1d7f5d89346
       * 如何以当前版本为基础，回退指定个commit：git reset HEAD~X X代表你要回退的版本数量，是数字！！！
       * 如何回退到和远程版本一样：git reset --hard origin/master  origin代表你远程仓库的名字，master代表分支名

---

- git 公钥生成方法：
  - ssh-keygen -t rsa -C '你的邮箱' -f ~/.ssh/gitee_id_rsa
  - ssh-keygen -t rsa -C '你的邮箱' -f ~/.ssh/github_id_rsa
  - 在 Git Bash 中输入 ssh-keygen -t rsa -C "你的邮箱" 或者 ssh-keygen -t ed25519 -C "你的邮箱"
  - 查看公钥命令：cat ~/.ssh/id_ed25519.pub 或者直接在 C 盘 user 文件中的.ssh 文件中用记事本打开
