module.exports = {
  // 页面title
  title: 'IOT 知识库',
  // 发布pages的仓库名（博客部署文件存放的仓库名）
  pagesRepo: 'blog',
  // 网站配置信息
  siteOptions: {
    title: 'IOT 知识库',
    subtitle: '免费 知识库',
    author: 'Liulei',
    description: '前端全栈开发者',
    github: 'https://github.com/doublepoint/blog',
    navMenu: {
      'http://www.qszone.com': '首页', //外链
      '/article': '文章',
      'https://coolshell.cn': '友情链接',
      // '/works': '作品',
      '/article/关于本站': '关于本站'
    },
    skills: ['Vue', 'React', 'JavaScript', 'Css', 'Java', 'C#', 'MySql', 'Sql Server', 'MongoDB'],
  },
  // 评论配置信息
  commentOptions: {
    owner: 'zclzone',
    repo: 'blog',
    clientId: '13f12c4d3203ceee7d22',
    clientSecret: '4de1abe7fa4d21bc1c76b6e03a86f0cc2d4afc83'
  },
  // gitee oauth
  giteeOauthOptions: {
    baseOauthUrl: 'https://gitee.com/oauth',
    clientId: '22303a9819abc40353e7f2c4593242a1e808468b56aede305e8ef4df1ce4ecf5',
    clientSecret: '53ba5df09b256b5197beb4b3bcfab4924e14a217eaabcab1f8aa94b172beb70f',
    redirectUri: 'https://doublepoint.gitee.io/gitee-blog'
  },
  // gitee api
  giteeApiOptions: {
    baseApiURL: 'https://gitee.com/api/v5',
    owner: 'DoublePoint',
    repo: 'gitee-db'
  }
}