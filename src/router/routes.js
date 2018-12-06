/* eslint-disable */
import user from '../view/user/user'
import NewCard from '../view/medical-card/new-card'
import main from '../components/Main'

let routes = [
  {
    path:"/user",
    name:"main",
    component:main,
    children:[
      {
        path: '/user-info',
        name: '用户信息',
        meta: {
          title: '用户信息'
        },
        component: user
      },
      {
        path:"/create-medical-card",
        name:"createCardOnline",
        meta:{
          title:"在线建卡"
        },
        component:NewCard
      }
      ]
  },

]

export default routes
