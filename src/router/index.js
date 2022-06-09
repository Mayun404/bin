import Vue from 'vue'
// import VueRouter from 'vue-router'
// import LoginVue from '../components/LoginVue.vue'
// import RegisterVue from '../components/RegisterVue.vue'
// import PocketBook from '../components/PocketBook.vue'
// import InfoVue from '../components/InfoVue.vue'
// import UpdateVue from '../components/UpdateVue.vue'
// import TestVue from '../components/TestVue.vue'
import HelloWorld from '../components/HelloWorld.vue'
import Index from '../components/index.vue'
// import TheAdd from '../components/TheAdd.vue'
import ElementUI from 'element-ui'

Vue.use(VueRouter);
Vue.use(ElementUI);

// 创建路由
export default new VueRouter({
	routes: [
		// {
		// 	path: '/',
		// 	redirect: '/hello'
		// },
		// {
		// 	path: '/index',
		// 	name: 'Index',
		// 	component: Index,
		// },
		// {
		// 	path: '/login',
		// 	name: 'LoginVue',
		// 	component: LoginVue
		// },
		// {
		// 	path: '/register',
		// 	name: 'RegisterVue',
		// 	component: RegisterVue
		// },
		// {
		// 	path: '/pocketbook',
		// 	name: 'PocketBook',
		// 	component: PocketBook
		// },
		// {
		// 	path: '/info',
		// 	name: 'InfoVue',
		// 	component: InfoVue
		// },
		// {
		// 	path: '/update',
		// 	name: 'UpdateVue',
		// 	component: UpdateVue
		// },
		// {
		// 	path: '/test',
		// 	name: 'TestVue',
		// 	component: TestVue
		// },
		// {
		// 	path: '/hello',
		// 	name: 'HelloWorld',
		// 	component: HelloWorld
		// }
		// {
		// 	path: '/add',
		// 	name: 'TheAdd',
		// 	component: TheAdd
		// }
	],
	mode: 'hash'
})
