export const Friends: Friend[] = [
  {
    title: '愧怍',
    description: '道阻且长，行则将至',
    website: 'https://kuizuo.cn',
    avatar: 'https://kuizuo.cn/img/logo.png',
  },
  {
    title: '峰华前端工程师',
    description: '致力于帮助你以最直观、最快速的方式学会前端开发',
    website: 'https://zxuqian.cn',
    avatar: '/img/friend/zxuqian.png',
  }
]

export type Friend = {
  title: string
  description: string
  website: string
  avatar?: string
}
