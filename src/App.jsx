
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'
import JobDetails from './components/JobDetails'
import Companies from './components/admin/Companies'


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/Login",
    element: <Login />
  },
  {
    path: "/Signup",
    element: <Signup />
  },
  {
    path: "/Jobs",
    element: <Jobs />
  },
  {
    path:"/Browse",
    element:<Browse/>
  },
  {
    path:"/Profile",
    element:<Profile/>
  },
  {
    path:"/Jobs/Description/:id",
    element:<JobDetails/>
  },

  // for Recruiter
{
  path:"/Admin/Companies",
  element:<Companies/>
}

])
function App() {


  return (
    <>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </>
  )
}

export default App
