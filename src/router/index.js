import Vue from 'vue'
import Router from 'vue-router'
import show from '@/pages/show'
import Article from '@/pages/Article'
import ArticleList from '@/components/ArticleList'
import index from '@/pages/index'
import YachtInfo from '../pages/YachtInfo'
import YachtAdvance from '../pages/YachtAdvance'
import Form from '@/components/Form'
import leasingshow from '../pages/LeasingShow'
import Main from '../pages/Main'
import ProductFilter from '../components/ProductFilter'
import ProductShow from '../pages/ProductShow'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/yachtshow'
    },
    {
      path: '/yachtshow',
      component: index,
      children: [
        {
          path: '',
          name: 'show',
          component: show
        },
        {
          path: '/qrent',
          redirect: '/articlelist/a982bb1a483e3108822ab5c26d65e8d5',
          meta: ['求租']
        },
        {
          path: '/yacht-entering',
          redirect: '/articlelist/eb664d934b770bfbf94e6ffea52522e4',
          meta: ['游艇入驻']
        },
        {
          path: '/yacht-service',
          redirect: '/articlelist/56ba82cd011e2a2a856578a8ef6c5292',
          meta: ['游艇服务']
        },
        {
          path: '/regulations',
          redirect: '/articlelist/519b2238cd8fe16490546c330d4ed6d7',
          meta: ['政策法规']
        },
        {
          path: '/yacht-knowlege',
          redirect: '/articlelist/89e70edc7ec16c3fc35b2197f665ade9',
          meta: ['游艇知识']
        },
        {
          path: '/license',
          redirect: '/articlelist/b868bd55922f236443cf4f54d845dad6',
          meta: ['驾照培训']
        },
        {
          path: '/nautical-knowlege',
          redirect: '/articlelist/df121075d5b7c055c61666a2721f12bb',
          meta: ['航海知识']
        },
        {
          path: '/newtech',
          redirect: '/articlelist/510be10ee91daa4d549336c64e9de25b',
          meta: ['新技术']
        },
        {
          path: '/news',
          redirect: '/articlelist/54e014ff3fb1e1e1bcb38c9c009f1cba',
          meta: ['新闻资讯']
        },
        {
          path: '/suporting',
          component: ProductShow,
          meta: ['配套']
        },
        {
          path: '/articlelist/:menuid',
          name: 'ArticleList',
          component: ArticleList
        },
        {
          path: '/article/:articleid',
          component: Article
        },
        {
          path: '/yachtinfo/:id',
          component: YachtInfo
        },
        {
          path: '/rent',
          component: leasingshow
        },
        {
          path: '/main/:id',
          component: Main
        },
        {
          path: '/advance/:id',
          component: YachtAdvance
        }
      ]
    },
    {
      path: '/form',
      component: Form
    }, {
      path: '/about',
      component: ProductFilter
    }

  ]
})
