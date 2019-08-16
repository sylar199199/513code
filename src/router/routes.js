import VHome from '@/components/home/v-home'
import Course from '@/components/course/v-course'
import News from '@/components/news/v-news'

const routes = [

            {
                path: '/',
                name: 'v-home',
                component: VHome,
                meta: { breadText: '首页' },
            },
            {
                path: '/course',
                name: 'course',
                component: Course,
                meta: { breadText: '课程' },
            },
            {
                path: '/news',
                name: 'news',
                component: News,
                meta: { breadText: '新闻' },
            },
]

export default routes