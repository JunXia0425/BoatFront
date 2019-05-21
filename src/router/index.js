import Vue from 'vue'
import Router from 'vue-router'
import show from '@/pages/show'
import Article from '@/pages/Article'
import ArticleList from '@/components/ArticleList'
import index from '@/pages/index'
import YachtInfo from '../pages/YachtInfo'
import YachtAdvance from '../pages/YachtAdvance'
import Form from '@/components/Form'
import About from '@/components/About'
import leasingshow from '../pages/leasingshow'
import Main from '../pages/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/yachtshow'
    },
    {
      path: '/yachtshow',
      name: 'index',
      component: index,
      children: [
        {
          path: '',
          name: 'show',
          component: show
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
      component: About
    }

  ]
})
