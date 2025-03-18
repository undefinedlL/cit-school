import { FC } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

const Layout: FC<{ children: React.ReactNode }> = ({children}) => {
  return <> 
    <Header />
        <main className='main'>
            {children}
        </main>
    <Footer />
  </>
}

export default Layout
