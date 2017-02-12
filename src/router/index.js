import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Page1 from 'components/page1'
import Page2 from 'components/page2'
import Page3 from 'components/page3'

Vue.use(Router)

export default new Router({
  routes: [
    {
		path:'/page1',component:Page1
	},
	{
		path:'/page2',component:Page2
	},
	{
		path:'/page3',component:Page3
	},
	{
		path:'/',redirect:'/page1'
	},

  ]
})
