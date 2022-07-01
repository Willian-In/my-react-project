import { BrowserRouter, Routes,  Route } from 'react-router-dom'
import App from 'App'
import Login from 'Login'
import Register from 'Register'
import List from 'pages/List'

// 配置项目路由
const BaseRouter = (): any => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path='/list' element={<List />}></Route>
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  )
  
}

export default BaseRouter