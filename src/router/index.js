import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/views/index'
import Login from '@/views/login'
import LoginName from '@/components/login/loginName'
import LoginTel from '@/components/login/loginTel'
import Register from '@/views/register'
import OldChangeNew from '@/views/oldChangeNew'
import Recommended from '@/views/recommended'
import Reswitch1 from '@/components/recommended/reswitch1'
import Reswitch2 from '@/components/recommended/reswitch2'
import Reswitch3 from '@/components/recommended/reswitch3'
import Reswitch4 from '@/components/recommended/reswitch4'
import Detail from '@/views/detail'
import Accessories from '@/views/accessories'
import ShopCar from '@/views/shopCar'
Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        showHeader: true,
        showBanner: true,
        showHeadernav: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        showHeader: false,
        showBanner: false,
        showHeadernav: false
      },
      children: [
        {
          path: '',
          component: LoginName,
          meta: {
            showHeader: false,
            showBanner: false,
            showHeadernav: false
          },
        },
        {
          path: 'tel',
          component: LoginTel,
          meta: {
            showHeader: false,
            showBanner: false,
            showHeadernav: false
          },
        },
      ]
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        showHeader: false,
        showBanner: false,
        showHeadernav: false
      }
    },

    {
      path: '/oldChangeNew',
      name: 'OldChangeNew',
      component: OldChangeNew,
      meta: {
        showHeader: true,
        showBanner: false,
        showHeadernav: false
      }
    },
    {
      path: '/recommended',
      name: 'recommended',
      component: Recommended,
      meta: {
        showHeader: true,
        showBanner: false,
        showHeadernav: false
      },
      children: [
        {
          path: '',
          component: Reswitch1,
          meta: {
            showHeader: true,
            showBanner: false,
            showHeadernav: false
          },
        },
        {
          path: 'two',
          component: Reswitch2,
          meta: {
            showHeader: true,
            showBanner: false,
            showHeadernav: false
          },
        },
        {
          path: 'three',
          component: Reswitch3,
          meta: {
            showHeader: true,
            showBanner: false,
            showHeadernav: false
          },
        },
        {
          path: 'four',
          component: Reswitch4,
          meta: {
            showHeader: true,
            showBanner: false,
            showHeadernav: false
          },
        }
      ]
    },
    {
      path: '/detail/:gid',
      name: 'Detail',
      component: Detail,
      meta: {
        showHeader: true,
        showBanner: false,
        showHeadernav: false
      },
      children: [
        {
          path: '',
          component: Reswitch1,
          meta: {
            showHeader: true,
            showBanner: false,
            showHeadernav: false
          },
        },
        {
          path: 'two',
          component: Reswitch2,
          meta: {
            showHeader: true,
            showBanner: false,
            showHeadernav: false
          },
        },
        {
          path: 'three',
          component: Reswitch3,
          meta: {
            showHeader: true,
            showBanner: false,
            showHeadernav: false
          },
        },
        {
          path: 'four',
          component: Reswitch4,
          meta: {
            showHeader: true,
            showBanner: false,
            showHeadernav: false
          },
        }
      ]
    },
    {
      path: '/accessories',
      name: 'Accessories',
      component: Accessories,
      meta: {
        showHeader: true,
        showBanner: false,
        showHeadernav: false
      },
    },
    {
      path: '/shopCar',
      name: 'ShopCar',
      component: ShopCar,
      meta: {
        showHeader: true,
        showBanner: false,
        showHeadernav: false,
        login: true
      }
    },
    // {
    //   path: '*',
    //   redirect: { path: "/" }
    // }
  ]
})
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
router.beforeEach((to, from, next) => {
  if (to.meta.login) {
    let info = router.app.$local.fetch("user").userName;
    if (info) {
      next();
    } else {
      alert("请先登录！");
      router.push("/login")
    }
  } else {
    next();
  }
})

export default router