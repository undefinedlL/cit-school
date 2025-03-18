import { FC } from 'react'
import { Outlet } from 'react-router';
import Layout from './layout';
import Background from './utils/Background';

const App: FC = () => {

  return (
    <Layout>
      <Background />
      <Outlet />
    </Layout>
  )
}

export default App;