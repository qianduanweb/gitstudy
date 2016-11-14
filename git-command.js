
 /*
   具体参考如下地址 http://www.51siyuan.cn/8.html
 1.增加/删除文件
    #添加指定文件到暂存区
	$ git add [file1] [file2] ...
	#添加指定目录到暂存区，包括子目录
	$ git add [dir]
	#添加当前目录的所有文件到暂存区
	$ git add .
	#对于同一个文件的多处变化，可以实现分次提交
	$ git add -p
	#删除工作区文件，并且将这次删除放入暂存区
	$ git rm [file1] [file2] ...
	#停止追踪指定文件，但该文件会保留在工作区
	$ git rm --cached [file]
	#改名文件，并且将这个改名放入暂存区
	$ git mv [file-original] [file-renamed]
2.代码提交
	# 提交暂存区到仓库区
	$ git commit -m [message]
	# 提交暂存区的指定文件到仓库区
	$ git commit [file1] [file2] ... -m [message]
	# 提交工作区自上次commit之后的变化，直接到仓库区
	$ git commit -a
	# 提交时显示所有diff信息
	$ git commit -v
	# 使用一次新的commit，替代上一次提交
	# 如果代码没有任何新变化，则用来改写上一次commit的提交信息
	$ git commit --amend -m [message]
	# 重做上一次commit，并包括指定文件的新变化
	$ git commit --amend [file1] [file2] ...
 */