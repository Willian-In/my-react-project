import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes,  Route } from 'react-router-dom'
import App from 'App'
// import Login from 'Login'
// import Register from 'Register'
// import List from 'pages/List'


// 组件懒加载
const router_arr = [
  {path: '/', component: App, children: [
    // 引入子页面
    {path: '/list', component: lazy(() => import("pages/List"))},
  ]},
  // 同级页面
  {path: '/login', component: lazy(() => import("Login"))},
  {path: '/register', component: lazy(() => import("Register"))}
]



// 配置项目路由
const BaseRouter = (): any => {
  return (
    <BrowserRouter>
    {/* 路由加载需要等待动画 */}
      <Suspense fallback={<div>loading....</div>}>
        <Routes>
          {
            router_arr.map((item, index) => {
              return (
                item.children ? // 有子路由
                <Route key={index} path={item.path} element={<item.component />}>
                  {
                    item.children.map((e, i) => <Route key={i} path={e.path} element={<e.component />}></Route>)
                  }
                </Route>
                :// 没有自由路
                <Route key={index} path={item.path} element={<item.component />}></Route>
              )
            })
          }
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default BaseRouter