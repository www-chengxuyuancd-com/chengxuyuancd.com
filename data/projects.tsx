export const projects: Project[] = [
  {
    title: '程序员充电站',
    description: '🦖 基于 Docusaurus 静态网站生成器实现个人博客',
    preview: 'https://chengxuyuancd.oss-cn-beijing.aliyuncs.com/auto_images/static/img/project/blog.png',
    website: 'https://chengxuyuancd.com',
    source: 'https://github.com/www-chengxuyuancd-com/chengxuyuancd.com',
    tags: ['opensource', 'design', 'favorite'],
    type: 'web',
  },
  // cv
  {
    title: '鸟窝检测',
    description: '🌟 客户来自北京某大型电力公司，该公司为了避免鸟窝在电力设备上产生火灾等灾祸，通过计算机视觉算法检测树上的鸟窝，提醒工作人员去为鸟搬家',
    preview: 'https://chengxuyuancd.oss-cn-beijing.aliyuncs.com/auto_images/static/img/project/niaowo.png',
    website: '',
    source: 'https://github.com/www-chengxuyuancd-com/',
    tags: ['opensource', 'computer_vision', 'commerce'],
    type: 'cv',
  },
  {
    title: '碟阀角度检测',
    description: '🌟 客户来自某大型国企,客户希望对机器开关的程度在视觉层面多加一层监控，于是利用摄像头定时抓取图片，利用计算机视觉算法检测角度',
    preview: 'https://chengxuyuancd.oss-cn-beijing.aliyuncs.com/auto_images/static/img/project/diefa.jpg',
    website: '',
    source: 'https://github.com/www-chengxuyuancd-com/',
    tags: ['partially_opensource', 'computer_vision', 'commerce'],
    type: 'cv',
  },
  {
    title: '仪表盘指针识别',
    description: '🌟 客户来自某大型国企，期望通过计算机视觉算法定期检测仪表盘指针读数，为设备的监控加一层保险，经过站长的优化，算法准确度能达到误差控制在  0.1%读数',
    preview: 'https://chengxuyuancd.oss-cn-beijing.aliyuncs.com/auto_images/static/img/project/zhizhen-shibie.jpg',
    website: '',
    source: 'https://github.com/www-chengxuyuancd-com/',
    tags: ['partially_opensource', 'computer_vision', 'commerce'],
    type: 'cv',
  },
  {
    title: '批量手写特殊字符识别',
    description: '🌟 客户来自某大型国企，期望通过计算机视觉算法降低人力成本，通过拍照扫描的方式检测一页 300 多特殊字符的识别，经过站长不断优化，准确率达到 99.8%',
    preview: 'https://chengxuyuancd.oss-cn-beijing.aliyuncs.com/auto_images/static/img/project/hand-written-chars.jpg',
    website: '',
    source: 'https://github.com/www-chengxuyuancd-com/',
    tags: ['partially_opensource', 'computer_vision', 'commerce'],
    type: 'cv',
  },
  
  // pachong
  {
    title: '某分析软件',
    description: '🌟 在看球赛的时候希望通过爬虫实时抓取某国外网站比赛数据，以达到实时分析效果',
    preview: 'https://chengxuyuancd.oss-cn-beijing.aliyuncs.com/auto_images/static/img/project/caipiao.png',
    website: '',
    source: 'https://github.com/www-chengxuyuancd-com/',
    tags: ['partially_opensource', 'favorite'],
    type: 'spider',
  },
  {
    title: '邮件发送助手',
    description: '🌟 有时候经常会有活动需要给其他人发送邮件，希望开发一款自动化软件，可以自动发送邮件，并可以随时修改邮件模板以避免被检测为垃圾邮件，此软件因为是模拟人的发邮件速度进行发送，所以不会短时间大批量发送，因此不会造成邮件服务器的压力，更不会造成服务器的损失',
    preview: 'https://chengxuyuancd.oss-cn-beijing.aliyuncs.com/auto_images/static/img/project/email-sending.png',
    website: '',
    source: 'https://github.com/www-chengxuyuancd-com/',
    tags: ['opensource', 'favorite'],
    type: 'spider',
  },
  {
    title: '某科研网站',
    description: '🌟 站长一个朋友由于急用某科研数据撰写论文，于是委托站长进行网站数据下载，没有进行任何过量操作',
    preview: 'https://chengxuyuancd.oss-cn-beijing.aliyuncs.com/auto_images/static/img/project/keyan-1.png',
    website: '',
    source: 'https://github.com/www-chengxuyuancd-com/',
    tags: ['opensource', 'favorite'],
    type: 'spider',
  }
]

export type Tag = {
  label: string
  description: string
  color: string
}

export type TagType = 'favorite' | 'opensource' | 'product' | 'design' | 'large' | 'personal' | 'computer_vision' | 'commerce' | 'partially_opensource'

export type ProjectType = 'web' | 'app' | 'commerce' | 'personal' | 'toy' | 'other' | 'cv' | 'spider'

export const projectTypeMap = {
  web: '网站',
  app: '应用',
  commerce: '商业项目',
  personal: '个人',
  toy: '玩具',
  other: '其他',
  cv: '计算机视觉',
  spider: '爬虫/数据/自动化'
}

export type Project = {
  title: string
  description: string
  preview?: string
  website: string
  source?: string | null
  tags: TagType[]
  type: ProjectType
}

export const Tags: Record<TagType, Tag> = {
  favorite: {
    label: '喜爱',
    description: '我最喜欢的网站，一定要去看看!',
    color: '#e9669e',
  },
  opensource: {
    label: '开源',
    description: '开源项目可以提供灵感!',
    color: '#39ca30',
  },
  product: {
    label: '产品',
    description: '与产品相关的项目!',
    color: '#dfd545',
  },
  design: {
    label: '设计',
    description: '设计漂亮的网站!',
    color: '#a44fb7',
  },
  large: {
    label: '大型',
    description: '大型项目，原多于平均数的页面',
    color: '#8c2f00',
  },
  personal: {
    label: '个人',
    description: '个人项目',
    color: '#12affa',
  },
  computer_vision: {
    label: '计算机视觉',
    description: '利用计算机算法解决现实场景问题',
    color: '#240750',
  },
  commerce: {
    label: '商业项目',
    description: '外包接单商业项目',
    color: '#344C64',
  },
  partially_opensource: {
    label: '部分开源',
    description: '由于商业项目涉及到客户隐私，无法开源所有内容',
    color: '#577B8D',
  },
}

export const TagList = Object.keys(Tags) as TagType[]

export const groupByProjects = projects.reduce(
  (group, project) => {
    const { type } = project
    group[type] = group[type] ?? []
    group[type].push(project)
    return group
  },
  {} as Record<ProjectType, Project[]>,
)
