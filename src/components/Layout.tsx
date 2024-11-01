import { Outlet } from 'react-router-dom'
import NavigationBar from './NavigationBar'

function Layout() {
  return (
    <div>
      <NavigationBar/>
      <Outlet/>
    </div>
  )
}

export default Layout