import { Route,Routes } from 'react-router-dom'
import './globals.css'
import SiginForm from './_auth/Forms/SiginForm'
import { Home } from './_root/pages'
import SignupForm from './_auth/Forms/SignupForm'
import AuthLayout from './_auth/AuthLayout'
import RootLayout from './_root/RootLayout'
const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/* {pulic} */}
        <Route element={<AuthLayout/>}>
          <Route path='/sign-in' element={<SiginForm/>}/>
          <Route path='/sign-up' element={<SignupForm/>}/>
        </Route>
        {/* {private} */}
        <Route element={<RootLayout/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </main>
  )
}

export default App