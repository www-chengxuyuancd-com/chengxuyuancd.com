import { translate } from '@docusaurus/Translate'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { groupByProjects, projectTypeMap, projects } from '@site/data/projects'
import { cn } from '@site/src/lib/utils'
import ShowcaseCard from './_components/ShowcaseCard'

import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment'

import { MagicContainer } from '@site/src/components/magicui/magic-card'
import MyLayout from '@site/src/theme/MyLayout'
import { upperFirst } from '@site/src/utils/jsUtils'
import styles from './styles.module.css'

const TITLE = translate({
  id: 'theme.project.title',
  message: '项目',
})
const DESCRIPTION = translate({
  id: 'theme.project.description',
  message: '学而不用，不如学而用之。这里是我在技术领域中努力实践和应用的最佳证明。',
})


type ProjectState = {
  scrollTopPosition: number
  focusedElementId: string | undefined
}

export function prepareUserState(): ProjectState | undefined {
  if (ExecutionEnvironment.canUseDOM) {
    return {
      scrollTopPosition: window.scrollY,
      focusedElementId: document.activeElement?.id,
    }
  }

  return undefined
}

function ShowcaseHeader() {
  return (
    <section className="text-center">
      <h2>{TITLE}</h2>
      <p>{DESCRIPTION}</p>
    </section>
  )
}

function ShowcaseCards() {
  const { i18n } = useDocusaurusContext()
  const lang = i18n.currentLocale

  if (projects.length === 0) {
    return (
      <section className="margin-top--lg margin-bottom--xl">
        <div className="padding-vert--md container text-center">
          <h2>No result</h2>
        </div>
      </section>
    )
  }

  return (
    <section className="margin-top--lg margin-bottom--xl">
      <>
        <div className="margin-top--lg container">
          <div className={cn('my-4', styles.showcaseFavoriteHeader)} />
          {Object.entries(groupByProjects).map(([key, value]) => {
            return (
              <div key={key}>
                <div className={cn('my-4', styles.showcaseFavoriteHeader)}>
                  <h3>{upperFirst(lang === 'en' ? key : projectTypeMap[key])}</h3>
                </div>
                <div className={cn('my-4', styles.showcaseFavoriteHeader)}>
                  <h6>{key == 'spider' ?'此类项目站长都严格控制了代码的访问速度，不会给对方服务器造成压力，仅仅是作为脚本语言辅助人进行工作，都是个人兴趣研发，如果对您网站造成了困扰，请联系站长进行下架，另外请学生不要用来商用盈利，并且用的时候一定注意访问速度，避免造成他人损失的同时给自己带来麻烦':''}</h6>
                </div>
                <MagicContainer className={styles.showcaseList}>
                  {value.map(project => (
                    <ShowcaseCard key={project.title} project={project} />
                  ))}
                </MagicContainer>
              </div>
            )
          })}
          <MagicContainer />
        </div>
      </>
    </section>
  )
}

function Showcase(): JSX.Element {
  return (
    <MyLayout title={TITLE} description={DESCRIPTION} maxWidth={1280}>
      <main className="margin-vert--lg">
        <ShowcaseHeader />
        <ShowcaseCards />
      </main>
    </MyLayout>
  )
}

export default Showcase
