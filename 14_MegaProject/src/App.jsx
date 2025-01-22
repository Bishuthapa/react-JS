import './App.css'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth';
import { login,logout } from './Store/authSlice';
import { Header,Footer } from './Components';

function App() {
  const [loding, setLoding] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData)
      {
        dispatch(login({userData}))
      }

      else{
        dispatch(logout())
      }
    })
    .finally(() =>{
      setLoding(false)
    } )
  }, [])



  return !loding ? (
  <div className='min-h-screen flex-wrap content-between bg-slate-600'>
    <div className='w-full block'>
      <Header />
      <h1>Test</h1>
      <main>
        {/*<Outlet /> */}
      </main>
      <Footer/>
    </div>
  </div>
): null;
}

export default App
