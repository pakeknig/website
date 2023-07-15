---
nav:
  title: 开发工具
  order: 3
group: git
toc: content
mobile: false

author: 'mudssky'
category: 'git'
lastUpdated: 1615964092
tags: ['git', 'github', 'cli']
createdAt: 1615964092
title: 'git笔记'
---

# Git 笔记

## 01.Git 的历史

2005 年 4 月 3 日开始开发，linus 花了 3 天就发布了

2005 年 4 月 7 日，git 已经能作为自身的版本控制工具了

2005 年 4 月 18 日，发生第一个多分支合并

2005 年 4 月 29 日，git 的性能已经达到 linus 的预期

2005 年 6 月 16 日，linux 核心 2.6.12 发布，那是 git 已经在维护 linux 核心的源代码了。

linus 决定开发 git 的起因是当时的版本控制工具 bitkeeper 开始收回授权。

## 02.基本使用

### 创建 git 仓库

在目录下执行`git init`,就会创建一个`.git`目录，这就是你的 git 仓库

#### 新建裸仓库

裸库就是没有工作区，只有.git 目录里的文件。

`git init --bare`

### 提交流程

1. **工作区**,就是在你项目目录的文件
2. 执行 `git add .` 工作区的文件，就会进入**暂存区**（staged）
3. 暂存区的文件执行`git commit ` （执行会会进入 vim，编辑好评论后提交）提交之后会进入**版本仓库**，使用`-m`参数可以添加评论

### 查看工作区状态

`git status` 可以查看当前所在的分支，哪些改变没有 commit，哪些文件没有 add 到暂存区之类的信息

`git status -u`后面可以跟三种参数

- no 只显示已经跟踪的文件
- normal 显示没有被跟踪的文件和文件夹
- all 为跟踪的文件夹内的文件

### 查看提交记录

`git log`可以查看提交记录

`git log -n `显示前 n 条数据

`git log --stat` 显示修改的行数

`git log --since=2.days` 显示近两天的改动

`git log  --since=2021-04-28` 显示从指定日期开始的记录

`git log --until=2021-04-28` 显示指定日期之前的数据

`git log --author=hello` 查看特定用户提交记录

`git log --grep=init` 查看包含 init 的提交

`git log --pretty=oneline` 单行显示

`git log --pretty=format:"%h-%an,%ar:%s" ` 指定 log 的显示格式

具体占位符的列表如下

```
%H
commit hash

%h
abbreviated commit hash

%T
tree hash

%t
abbreviated tree hash

%P
parent hashes

%p
abbreviated parent hashes

%an
author name

%aN
author name (respecting .mailmap, see git-shortlog[1] or git-blame[1])

%ae
author email

%aE
author email (respecting .mailmap, see git-shortlog[1] or git-blame[1])

%al
author email local-part (the part before the @ sign)

%aL
author local-part (see %al) respecting .mailmap, see git-shortlog[1] or git-blame[1])

%ad
author date (format respects --date= option)

%aD
author date, RFC2822 style

%ar
author date, relative

%at
author date, UNIX timestamp

%ai
author date, ISO 8601-like format

%aI
author date, strict ISO 8601 format

%as
author date, short format (YYYY-MM-DD)

%cn
committer name

%cN
committer name (respecting .mailmap, see git-shortlog[1] or git-blame[1])

%ce
committer email

%cE
committer email (respecting .mailmap, see git-shortlog[1] or git-blame[1])

%cl
committer email local-part (the part before the @ sign)

%cL
committer local-part (see %cl) respecting .mailmap, see git-shortlog[1] or git-blame[1])

%cd
committer date (format respects --date= option)

%cD
committer date, RFC2822 style

%cr
committer date, relative

%ct
committer date, UNIX timestamp

%ci
committer date, ISO 8601-like format

%cI
committer date, strict ISO 8601 format

%cs
committer date, short format (YYYY-MM-DD)

%d
ref names, like the --decorate option of git-log[1]

%D
ref names without the " (", ")" wrapping.

%S
ref name given on the command line by which the commit was reached (like git log --source), only works with git log

%e
encoding

%s
subject

%f
sanitized subject line, suitable for a filename

%b
body

%B
raw body (unwrapped subject and body)

%N
commit notes

%GG
raw verification message from GPG for a signed commit

%G?
show "G" for a good (valid) signature, "B" for a bad signature, "U" for a good signature with unknown validity, "X" for a good signature that has expired, "Y" for a good signature made by an expired key, "R" for a good signature made by a revoked key, "E" if the signature cannot be checked (e.g. missing key) and "N" for no signature

%GS
show the name of the signer for a signed commit

%GK
show the key used to sign a signed commit

%GF
show the fingerprint of the key used to sign a signed commit

%GP
show the fingerprint of the primary key whose subkey was used to sign a signed commit

%GT
show the trust level for the key used to sign a signed commit

%gD
reflog selector, e.g., refs/stash@{1} or refs/stash@{2 minutes ago}; the format follows the rules described for the -g option. The portion before the @ is the refname as given on the command line (so git log -g refs/heads/master would yield refs/heads/master@{0}).

%gd
shortened reflog selector; same as %gD, but the refname portion is shortened for human readability (so refs/heads/master becomes just master).

%gn
reflog identity name

%gN
reflog identity name (respecting .mailmap, see git-shortlog[1] or git-blame[1])

%ge
reflog identity email

%gE
reflog identity email (respecting .mailmap, see git-shortlog[1] or git-blame[1])

%gs
reflog subject
```

`git show commit-id` 查看某条 commit 记录的具体改动内容

#### 在历史修改中查找

`git log -G` 在历史修改行中查找 （在每个历史 patch 中找）

`git log -S`

### 工作区操作

#### 查找

`git grep -n content` 在工作区查找，不会查找未跟踪（untrack）文件

### 暂存区操作

#### 添加文件到暂存区

`git add .`添加当前目录下的内容到暂存区

`git add -u` 只添加已经被跟踪的文件

`git add -i` 交互式添加

#### 从暂存区删除

```powershell
git rm --cathed <filepath>
```

#### commit 提交到本地仓库

`git commit`

`git commit -a` 将 add 和 commit 结合为一步，但是没有被跟踪的文件不会提交。

`git commit -m msg`

### 删除和移动

`git rm`

`git mv`

### 撤销提交操作

#### git reset 回退不留记录

git reset 是通过把分支回退几个提交记录来实现撤销改动，相当于改变历史，这样，原来的提交记录就和从来没有提交过一样

在本地使用比较方便（通常用于撤销本地的提交），但是**对远程分支是无效的**

git reset 后面跟的是是节点，分支，也可以运用相对引用操作符

如`git reset head^ `,`git reset main~3`,

#### git reset 回退保留记录

```shell
git reset --soft
```

对于已经 push 的 commit，也可以使用该命令，不过再次 push 时，由于远程分支和本地分支有差异，需要强制推送 `git push -f` 来覆盖被 reset 的 commit。

#### git revert 撤销产生记录

git revert 会产生一次撤销的提交，内容就是撤销某一次的更改，这个撤销操作时可以推送到远程仓库和别人共享的

撤销某次提交的内容，同时会产生一个新的提交记录，通常用于撤销一次提交。比如 c1——c2，此时 revertc2，会创建一个新的提交记录 C2new，c1——c2——C2new,这次提交实际操作是 c2 的内容。

`git revert <commit-ish>`

### 配置基本信息

`git config` 分为 global 和 local（当前目录）两个配置，后者如果配置了优先级更高

`git config --get user.name` 默认从 local 取的优先级高于 global

## 03.分支相关命令

**分支的使用举例**

- 为每个 feature 申请一个分支
- 为每个版本建立一个分支
- 为每一个开发者建立分支

#### 查看分支

`git branch`

`git branch -avv` 显示所有分支（a）的详细信息(vv)

#### 新建分支

`git branch <branchname> ` 新建分支

也可以指定新建分支的节点`git branch <branchname> <commit id> `

#### 切换分支前保存未提交的内容 stash

当您想记录工作目录和索引的当前状态，但又想返回一个干净的工作目录时，请使用 git stash。该命令将保存本地修改，并恢复工作目录以匹配头部提交。

应用场景：某一天你正在 feature 分支开发新需求，突然产品经理跑过来说线上有 bug，必须马上修复。而此时你的功能开发到一半，于是你急忙想切到 master 分支，然后你就会看到以下报错：

因为当前有文件更改了，需要提交 commit 保持工作区干净才能切分支。由于情况紧急，你只有急忙 commit 上去，commit 信息也随便写了个“暂存代码”，于是该分支提交记录就留了一条黑历史

如果你学会 stash，就不用那么狼狈了。你只需要：

```sh
git stash
复制代码
```

就这么简单，代码就被存起来了。

当你修复完线上问题，切回 feature 分支，想恢复代码也只需要：

```sh
git stash apply
```

```sh
# 保存当前未commit的代码
git stash

# 保存当前未commit的代码并添加备注
git stash save "备注的内容"

# 列出stash的所有记录
git stash list

# 删除stash的所有记录
git stash clear

# 应用最近一次的stash
git stash apply

# 应用最近一次的stash，随后删除该记录
git stash pop

# 删除最近的一次stash
git stash drop

```

当有多条 stash，可以指定操作 stash，首先使用 stash list 列出所有记录：

```sh
$ git stash list
stash@{0}: WIP on ...
stash@{1}: WIP on ...
stash@{2}: On ...
复制代码
```

应用第二条记录：

```sh
$ git stash apply stash@{1}
复制代码
```

pop，drop 同理。

#### 切换分支或 commit 节点

我们建立分支后，当前分支还是原来的分支，此时 commit 会提交到原来的分支上，我们切换到当前的分支上才能提交到当前的分支

`git checkout <branchname> `切换到分支

`git checkout -b branchname` 创建并切换分支

`git checkout -b branchname  origin/branchname` 切换到远程仓库的分支

#### 删除分支

`git branch -D branchname` 删除分支，不能删除当前分支

#### 推送分支到远程仓库

`git push origin HEAD:branchname` 推送到远程仓库如果远程仓库没有分支会新建远端分支

#### 删除远程仓库分支

`git push origin :branchname`

#### 强制移动分支位置

会把当前分支指向另一个节点

`git branch -f branchname   position`

position 可以用相对节点或者 commithash,或者分支名字

## 04.合并分支的方法

有两种合并分支的方法 `git merge`和 `git rebase`

他们最主要的区别是 rebase 可以创造更线性的提交历史，就像你是按顺序提交的一样，他不会在你合并分支时再创建一条提交记录，git rebase 的实际操作是取出一系列提交记录，在另一个地方按顺序放下去。

`git merge`,就能看到分支了，你新建的分支的记录会得到保留，merge 是在两个父节点基础上创建一个新的 commit

#### git rebase 变基操作

它就相当于把当前分支从分支的地方开始连根拔起接到另一个分支上或者说提交节点上，整体分支接到了主分支上的话，提交记录就会变得更线性。

如果你在新建的分支上执行`git rebase main`，就会把新分支接到 main 节点上，但是此时 main 分支存在于当前分支的后面，我们需要把 main 的进度也提到当前分支的最前面，在同一条分支上切换到 main 执行 `git rebase  节点 `,带来的效果只是引用前移，因为之前 rebase 的分支是继承 main 的， main 节点就会移动你 rebase 的节点上

`git rebase <branchname|commitid>` 把当前分支的跟节点移动到指定分支之后，如果当前分支和移动的分支是继承关系，效果就变成引用移动。

#### git merge 合并分支

git merge 是基本的合并分支的操作，会把两个分支指定的节点作为父节点，生成一个合并的提交记录，并把当前的指针移到这个新提交的节点。

比如你在一个新创建的 bugFix 分支上提交了一些东西，想要 merge 到主分支上

`git merge main`,此时你当前的指针的引用时 bugFix，而如果切换到 main 上执行 `git merge bugFix`,此时前移的引用时是 main，也就是他会把你当前分支的指针前移。

## 05.HEAD 和相对引用相关操作（在提交树上移动）

### 分离 HEAD

head 是你当前检出记录的符号引用，他指向你正在其基础上进行工作的提交记录。通常是指向当前分支上最新的提交记录。

`git checkout`实际上就是在移动 head 指针

**所谓分离 HEAD 是让 HEAD 指针指向具体的提交记录，而不是分支名,HEAD 分离状态是进行提交，原来的分支名不会跟着提交移动**

### 相对引用（移动 HEAD）

`git checkout commitid` 不是一种直觉化的操作，因为你要先查看 log 里的 hash 值再切换，虽然输出的时候只要开头前几个字母能区分开就能识别出来了。实际上我们通常是用相对引用的方法来再提交记录之间移动，

你可以从一个方便记忆的节点或者分支开始计算。比如你新建的 bugFIx 分支，比如你原来就有的 main 分支

- 使用`^` 向上移动一个提交记录
- 使用`~<num>`下个上移动多个提交记录，如`~3`

举个例子，移到 main 的父节点：

`git chekout main^`

你也可以用 HEAD 或者其他分支作为参照，并且`^`是可以叠加的，一个`^`符号向上移动一次

叠加`^`比较麻烦，如果需要后退多步我们就会用`~<num>`

这两个操作符都是支持链式操作的。。。。

比如`git checkout HEAD~4`

`^`还有一个用途就是后面也跟数字，指定两分支处的移动方向，比如`^1`和`^2`,git 默认选择的是合并提交的第一个（更早的）父提交，`^2`可以改变这一行为

### 移动分支

移动分支到特定提交节点，也可以用相对位置的计算符

`git branch -f <branchname>  <branchname|commitid>`

## 06.自由修改提交树

### git cherry-pick

命令形式为`git cherry-pick <commit ish>`，后面可以跟多个节点，复制的时候时按照顺序的，执行这个操作，原来分支的节点也会前移

这个操作相当于把一些节点复制过来放到当前节点上，还是比较灵活简单的。

### 交互式 rebase

当知道提交记录的分支名或者哈希值的时候，用 cherry 比较方便，但是如果我们不清楚提交记录的哈希值，可以用交互式 rebase

交互式 rebase 使用带参数`--interactive`简写`-i`，执行这个操作的时候，原来分支的节点（比如默认的 main）不会前移，需要我们再移动分支

执行这个命令会打开一个交互式的 ui 界面，显示每个提交记录的哈希和提交说明，在这个界面里面，你主要能够做三件事

- 调整提交记录的顺序
- 删除你不想要的提交
- 合并提交

举个例子，下面这条命令你可以对当前分支的四个节点进行操作。

`git rebase -i HEAD~4`

## 07.标签 Tags

### git tags

分支很容易被人为移动，并且当新的提交发生时，分支也会移动。

我们需要一个永远指向某个提交记录的表示，这就是 tag，可以用于指向软件发布更新的大版本，修正一些重要 bug 或者是增加某些新特性。（tag 也可以被删除之后重新创建同名的，）

tag 创建以后就可以像分支一样使用了(可以 checkout 到指定的分支，也可以在 cherry-pick 和 rebase 之类的地方被使用)

`git tag v1 main`

#### 查看本地所有 tag

```
git tag or git tag -l
```

#### 查看 仓库 所有 tag

```
git ls-remote --tags origin
```

#### 创建 本地 tag

```
git tag -a <标签名> -m '标签内容文字描述'
```

#### 创建 仓库 tag

将本地 tag 推送到仓库，就成了仓库 tag

```
git push origin <标签名>
```

如果本地 tag 比较多，一次全部推送

```
git push origin --tags
```

#### 删除本地 tag

```
git tag -d <标签名>
```

#### 删除仓库 tag

```
git push origin :refs/tags/<标签名>
```

#### 将代码切换到某个标签

```
git checkout -b <tagName>
```

### git describe

用于描述距离你当前节点最近的标签

语法是`git describe <ref>`,`<ref>` 是任何可以被 git 识别成提交记录的引用，如果你不指定的话，默认是当前的位置也就是 HEAD

它的输出结果是这样的`<tag>_<numCommits>_g<hash>`

tag 是标签名，numComiits 是标签和当前的 ref 距离多少个提交记录，hash 表示给定 ref 哈希值的前几位。

当 ref 上含有某个标签的时候，只输出标签名称

## 08.远程仓库操作

### 添加远程仓库

```powershell
git remote add origin <repo_url>
```

### 查看当前的远程仓库

```powershell
git remote -v
```

### 克隆远程仓库

```powershell
git clone <repo_url>
```

需要设置公钥和私钥才能克隆，不过用 github 官方的命令行就可以用登录的方式了，不设置密钥也能下载。

克隆会产生一个 origin/master 分支 表示远程分支，远程分支默认和 HEAD 是分离的。

### 向远程仓库获取数据 git fetch

git fetch 会做两件事：

- 从远程仓库下载本地仓库中缺失的提交记录
- 更新远程分支的指针(origin/master)

实际上将本地仓库的远程分支，更新成了远程仓库相应分支最新的状态

git fetch 不会改变你本地仓库的状态，只是单纯的下载操作。执行以后你本地所在的分支不会发生变化，也不会修改你本地的文件。

git fetch 支持和 push 一样的 place 参数

`git fetch <remote> <place>`

举个例子，`git fetch origin main`

此时远程仓库跟踪的是 本地 origin/main 仓库，而不是 main 仓库，因为 git fetch 不会改动本地仓库

当执行这条更详细的 `git fetch origin <source>:<destination>`，这时就会覆盖本地仓库了，这条命令里面 sourc 指的是远程仓库的目标，destination 指的是本地的目标。这个命令实际开发倒是很少使用。

同样，如果执行命令时目标分支不存在会在本地创建一个。

`git fetch origin :<destination>` 会在本地创建一个新分支

### 从远程仓库获取数据并且合并 git pull

执行 git fetch 以后，我们可以有很多方法，合并本地的提交，比如 cherry-pick rebase merge 等

其中 git pull 就是 git fetch 和 git merge 结合的操作。

`git pull --rebase`是 fetch 和 rebase 操作合并的写法。

`git pull origin foo`等价于 `git fetch origin foo; git merge o/foo`

`git pull origin bar~1:bugFix` 相当于：`git fetch origin bar~1:bugFix; git merge bugFix`

### 推送到远程仓库 git push

git push 不带参数时的行为取决于 push.default 的配置。git push 会将你的变更上传到指定的远程仓库，并在远程仓库上合并你的提交记录。

其中 HEAD 是本地的位置，master 是远程仓库的分支。

第一次提交需要使用`git config`设置用户名和邮箱。

```powershell
git push origin HEAD:master
```

git push 的语法是`git push <remote> <place>`

举个例子`git push origin main`

找到本地仓库的 main 分支，获取所有提交，再到远程仓库 origin 中找到 main 分支，将远程仓库中没有的提交记录都添加上去。。。

place 参数告诉 git 提交记录来自于 main，要推送到远程仓库中的 main。

因为已经提供了所有推送的信息，所以我们 HEAD 不在 main 节点上也能实现这个提交

**如果 git push 不带参数，默认是推送当前的节点到 远程的 main，此时如果当前 HEAD 节点不在 main 上就会推送失败**

当 place 来源和去向不同的时候

`git push origin <source>:<destination>`

默认情况等价于这条命令`git push origin HEAD:master`

当你推送的分支在远程仓库不存在的时候，远程仓库会帮你创建这个分支

`git push origin :<destination>` 不指定 source，则会**删除远程的分支**

### 远程跟踪分支

git clone 的时候会建立一个远程分支 origin/main，它默认和 HEAD 分离，所以你后续的提交不会改变他。利用这个远程分支和远程仓库中的 main 进行同步

这个属性也可以自行指定`git checkout -b totallyNotMain o/main`，这样我们就可以推送 totallyNotMain 到远程分支的 main 上

第二种设置远程追踪分支的方法是`git branch -u`命令

举个例子`git branch -u origin/main foo`,这样 foo 就会跟踪 origin/main 了。如果当前就在 foo 分支上，这个命令可以省略 foo 变成`git branch -u origin/main `

## 10.特殊操作

### 01.彻底删除文件

将下面命令中的`PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA`替换成你要删除文件的路径，如果没有空格，不加单引号也可以

下面命令的功能是：

- 强制 Git 处理但不检出每个分支和标记的完整历史记录
- 删除指定的文件，以及因此生成的任何空提交
- **覆盖现有的标记**

```powershell
git filter-branch --force --index-filter  "git rm --cached --ignore-unmatch  'PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA'"  --prune-empty --tag-name-filter cat -- --all
```

### 02.覆盖 github 远程仓库

```shell
git push origin --force --all
```

### git blame

查看文件每一行的提交信息，提交人和提交时间等

### git reflog

显示所有操作记录，大部分记录能保留 3 个月。不可达的点默认只能保留 30 天。

下面是清理 git 仓库两步走，

`git reflog expire --expire-unreachable=now --all` 强制过期那些不可达的记录

`git gc --prnune=now -aggressive` 垃圾回收会清除过期的记录

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
