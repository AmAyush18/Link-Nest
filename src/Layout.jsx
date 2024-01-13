import { Toaster } from 'react-hot-toast';
import { Header, Footer } from './components';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
        <Header/>
        <Outlet />
        <Toaster position='top-center' reverseOrder={false} />
        <Footer />
    </>
  )
}

export default Layout;