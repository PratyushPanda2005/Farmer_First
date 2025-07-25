import Header from './Home/components/Header'
import Footer from './Home/components/Footer'
import { Outlet } from 'react-router-dom'


const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout
