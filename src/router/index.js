import Vue from 'vue'
import Router from 'vue-router'
import topics from '../pages/topics/topics.vue'
import article from '../pages/topics/children/article/article.vue'
import user from '../pages/user/user.vue'
/* -- */ import usertopics from '../pages/user/children/usertopics/usertopics.vue'
import message from '../pages/message/message.vue'
import test from '../pages/test/test.vue'

Vue.use(Router)

const routes = [
  {
    name: 'topics',
    path: '/topics',
    component: topics
  },
  {
    name:'article',
    path:'/topics/article/:id',
    component:article
  },
  {
    name: 'user',
    path: '/user/:title',
    component: user,
    children: [
      {
        name: 'usertopics',
        path: 'usertopics/:title/:type',
        component: usertopics
      }
    ]
  },
  {
    name: 'message',
    path: '/message/:title',
    component: message
  },
  {
    name:'test',
    path:'/test/:title',
    component:test
  }
]

const router = new Router({
  routes
})

router.push({name: 'topics', params: {title: '话题'}})

export default router
