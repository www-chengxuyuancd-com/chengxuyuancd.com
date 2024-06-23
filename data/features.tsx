import Translate, { translate } from '@docusaurus/Translate'
import { Icon } from '@iconify/react/dist/iconify.js'
import OpenSourceSvg from '@site/static/svg/undraw_open_source.svg'
import SpiderSvg from '@site/static/svg/undraw_spider.svg'
import WebDeveloperSvg from '@site/static/svg/undraw_web_developer.svg'

export type FeatureItem = {
  title: string | React.ReactNode
  description: string | React.ReactNode
  header: React.ReactNode
  icon?: React.ReactNode
}

const FEATURES: FeatureItem[] = [
  {
    title: translate({
      id: 'homepage.feature.developer',
      message: '教程以及文章偏实战',
    }),
    description: (
      <Translate>
        作为一个过来人，我太知道及时反馈对于学习和成长的用处了，而实战就是最快速的反馈，小站中，有大量真实0-1的案例供大家学习。
      </Translate>
    ),
    header: <WebDeveloperSvg className={'h-auto md:h-[150px] w-full'} height={150} role="img" />,
    icon: <Icon icon="logos:typescript-icon" className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: translate({
      id: 'homepage.feature.spider',
      message: '分享搞💰途径',
    }),
    description: (
      <Translate>
        作为一名从大一开始就通过各种途径挣钱的人来说，我有太多的经历以及经验想要和你分享，而开始理解社会，理解生意的逻辑的年纪越早越好，希望你能在这里有所收获！
      </Translate>
    ),
    header: <SpiderSvg className={'h-auto md:h-[150px] w-full'} height={150} role="img" />,
  },
  {
    title: translate({
      id: 'homepage.feature.enthusiast',
      message: '生活&健康',
    }),
    description: (
      <Translate>
        作为一名养生人士，我有很多肺腑之言想要和你吐露，希望你能早日开启养生之路以及如何开启。
      </Translate>
    ),
    header: <OpenSourceSvg className={'h-auto md:h-[150px] w-full'} height={150} role="img" />,
  },
]

export default FEATURES
