 console.log('第一部分--生成密钥');
 /*
* 具体请参考地址 https://help.github.com/articles/testing-your-ssh-connection/ or https://help.github.com/articles/generating-an-ssh-key/
* 1.验证是否存在密钥 (Checked for existing SSH keys) 执行命令：ls -al ~/.ssh
* 2.生成密钥
*    生成自己的SSH密钥公钥对 命令(ssh-keygen -t rsa -C "your_email@example.com")
* 	输入保存键的文件名:(默认不变id_rsa,直接回车)
* 	passphrase输入密码:
* 	确认密码:
* 	密钥默认保存在C:\用户\用户名\.ssh\id_rsa.pub
*  3.将密钥添加到github上
*    打开地址https://github.com/settings/keys
*    点击右上角的New SSH key按钮
* 	填写Title(随意填)
*    填写Key，就是将id_rsa.pub里面的内容全选copy进去
* 	点击Add SSH key按钮完成添加
*  4.验证是否能连上github（使用命令：ssh -T git@github.com）
*  5.以上可能出现的问题可以参考 https://help.github.com/categories/ssh/
 */ 
  console.log('第二部分');
/*
*  1.克隆代码 git clone url
* git clone ssh://admin@192.168.26.101/mypro.git
* 
*/
 console.log('第三部分--gitconfig配置文件');
/*
   具体配置请参考以下网址
   https://github.com/dbarsam/.gitconfig/blob/master/.gitconfig
   https://github.com/brauliobo/gitconfig/blob/master/configs/.gitconfig
   https://github.com/porn/gitconfig/blob/master/gitconfig
   https://github.com/cvrebert/gitconfig/blob/master/gitconfig
   # 显示当前的Git配置
   git config --list 
   # 编辑Git配置文件
   git config -e --global
   # 设置提交代码时的用户信息
   git config --global user.name "Xiao Fang"
   git config --global user.email xiaofang@example.com
   # 设置别名
   git config --global alias.hist 'log --pretty=format:"%C(yellow)%h%Cred%d\\ %Creset%s%Cblue\\ [%cn]" --decorate --numstat'
   # 配置文件,请在github上搜索(.gitconfig)
   # 忽略文件,请在github上搜索(.gitignore)

*/
 console.log('第四部分--常用命令及解释');
 /*
  具体参考以下网址
  https://www.kernel.org/pub/software/scm/git/docs/
  
  git add .(是将当前更改或者新增的文件加入到Git的index中，这也是提交之前所需要执行的一步)
  git commit -m''(提交当前工作空间的修改内容，类似于SVN的commit命令)
  git push [remote-name] [local-branch-name]:[remote-branch-name](将本地分支的更新，推送到远程仓库)
  git push [remote-name] [local-branch-name](如果省略远程分支名，则表示将本地分支推送与之存在"追踪关系"的远程分支（通常两者同名），如果该远程分支不存在，则会被新建)
  git push [remote-name] :[remote-branch-name](如果省略本地分支名，则表示删除指定的远程分支，因为这等同于推送一个空的本地分支到远程分支)
  git fetch [remote-name](将某个远程仓库的更新，全部取回本地)
  git fetch [remote-name] [remote-branch-name](取回特定分支的更新)
  git merge [remote-name]/[remote-branch-name](用于合并分支,支持版本库之间、本版本库中多个分支的合并)
  git pull [remote-name] [remote-branch-name]:[local-branch-name](=git fetch+ git merge)
  
  git remote(列出所有远程仓库)
  git remote -v(查看远程仓库的网址)
  git remote show [remote-name](查看远程仓库的详细信息)
  git remote add [remote-name] [url](添加远程仓库)
  git remote rm [remote-name](删除远程仓库)
  git remote rename [original-remote-name] [new-remote-name](修改远程仓库的名称)
  
  git branch(列出所有本地分支)
  git branch -r(列出所有远程分支)
  git branch -a(列出所有本地分支和远程分支)
  git branch [branch-name](新建一个分支，但依然停留在当前分支)
  git checkout -b [branch-name](新建一个分支，并切换到该分支)
  git checkout [branch-name](切换到指定分支，并更新工作区)
  git checkout -(切换到上一个分支)
  git branch -d [branch-name](删除分支)
  git push origin --delete [branch-name](删除远程分支)
  git branch -dr [remote/branch](删除远程分支)
  git status
  git checkout
  git diff
  git reset(重置)
  git reset [filename](如果已修改某一文件【通过git add，已在暂存区】，想撤销这次修改)
  git reset --soft [commitid](如果已修改某几个文件，但是想撤销到某个版本，但当前暂存区、工作区不想撤销)
  git reset --hard [commitid](如果已修改某几个文件，也提交到暂存区，想撤销到某个commitid),eg:git reset --hard master@{1} 回退到正确的(丢弃所有未提交的change)
  git reflog(恢复)
  git reflog show master | head -5  查看master分支 head向前的5个提交

  .....
 */
  console.log('第五部分--搭建内网git服务器');
  /*
  在Windows上搭建Git服务器
  下载git https://git-for-windows.github.io/和Bitvise SSH Server https://www.bitvise.com/download-area
  安装Bitvise SSH Server选择版本时记得选个人版(Person edition)
  配置Bitvise SSH Server 参考http://blog.michiru.me/posts/git-server-on-windows.html
  最后，在服务器端，Git 项目的存放路径下，运行：
  git init --bare <my_repo_name>
  接下来去客户端计算机，就能 clone 或者 push 到这个 repo 啦。
  git clone ssh://<user>@<ip-of-server>/<my_repo_name>
  */