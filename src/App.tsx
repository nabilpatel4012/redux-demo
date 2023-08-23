
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import { Provider } from 'react-redux'
import store from './store/store'
import Login from './pages/Login'
import MainLayout from './layout/MainLayout'
import PrivateRoutes from './routes/PrivateRoutes'
function App() {
 

  return (
    <>
    <Provider store={store}>
    <Routes>
    <Route path='/' element={<PrivateRoutes />}/>
      <Route path='/*' element={<Login />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/main' element={<MainLayout />} >
        <Route index path='home' element={<Home />} />
        <Route path='cart' element={<Cart />} />
      </Route>
      
    </Routes>
    </Provider>
    </>
  )
}

export default App
