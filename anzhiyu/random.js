var posts=["2024/07/28/Note/C语言基础语法/","2024/09/08/Note/Sanger 双脱氧链终止法/","2024/10/01/Note/分子进化的主要研究内容/","2024/08/12/Note/WSL学习笔记/","2024/07/09/Note/危害人类的重大传染病——白喉/","2024/07/14/Note/咖啡为什么能够提神/","2024/10/03/旅行日记/Day0 内蒙古之旅——出发！/","2024/10/03/旅行日记/Day1 内蒙古之旅——呼伦贝尔大草原特辑/","2024/08/17/旅行日记/游记——贵州铜仁一日游/","2024/10/04/旅行日记/Day2 内蒙古之旅——海拉尔国家森林公园/","2024/07/24/Tech/CC爬虫攻击测试与防护/","2024/07/20/Tech/Discourse技术细节/","2024/07/29/Tech/Adguard-Home使用体验/","2024/08/10/Tech/Docker Compose部署随机图API/","2024/08/11/Tech/Docker拉取镜像时的疑惑——Layer/","2024/08/13/Tech/Windows下搭建求生之路2专用原版和插件服务器/","2024/07/31/Tech/Smart-Adguard/","2024/08/15/Tech/在博客中添加Live图/","2024/09/29/Note/进化生物学/","2024/09/20/Tech/基于Golang和Docker图像无损压缩方案/","2024/07/11/Tech/基于Resend的发信服务/","2024/08/09/Tech/基于腾讯云EdgeOne的自适应webp转换/","2024/09/28/Tech/fofa的使用与防护/","2024/07/09/Tech/如何为你的Ubuntu添加虚拟内存/","2024/07/12/Tech/如何使用脚本来挂学习通？/","2024/07/29/Tech/文件的读取与使用/","2024/07/23/Tech/为自己的WordPress添加Cloudflare验证码/","2024/07/23/Tech/如何将文件夹内的图片文件批量转换为PDF文件/","2024/08/16/Tech/如何自建PT刷流盒子/","2024/10/08/Tech/服务器备份方案/","2024/08/08/Tech/自建图床的一点心得/","2024/07/08/Tech/评论分词/","2024/09/26/深入思考/我们是何时失去探知欲的/","2024/07/12/日常/F1-2使用体验/","2024/10/21/深入思考/冥冥之中注定的失败/","2024/08/09/日常/一些思考/","2024/08/01/日常/八月初/","2024/10/13/日常/再失眠/","2024/11/02/日常/八月末—梦/","2024/08/08/日常/夏天夏天/","2024/07/14/日常/听说你也喜欢“小狗”——北京线条小狗快闪店/","2024/10/17/日常/梦境是现实的延伸/","2024/09/05/日常/开学——新生/","2024/10/01/日常/碎碎念/","2024/10/17/日常/家人平安便是我最大的愿望/","2024/09/22/日常/感觉日子过得越来越无趣/","2024/07/11/日常/神奇的超级战士——单克隆抗体（单抗）/","2024/08/14/日常/随想——晚风/","2024/07/09/Tech/反向代理的一些思考/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };