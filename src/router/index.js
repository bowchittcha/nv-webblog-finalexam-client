import Vue from 'vue'
import Router from 'vue-router'
import UserIndex from '@/components/Speakers/Index'
import UserEdit from '@/components/Speakers/EditUser'
import UserShow from '@/components/Speakers/ShowUser'
import UserCreate from '@/components/Speakers/CreateUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/speaker/create',
      name: 'speaker-create',
      component: UserCreate
    },
    {
      path: '/speaker/edit/:speakerId',
      name: 'speaker-edit',
      component: UserEdit
    },
    {
      path: '/speaker/:speakerId',
      name: 'speaker',
      component: UserShow
    },
    {
      path: '/speakers',
      name: 'speakers',
      component: UserIndex
    },

    

  ]
})
