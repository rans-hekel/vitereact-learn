// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Home from './pages/index'
import {GlobalContext} from './context/index'
import { RouterProvider } from 'react-router-dom'
import { router } from './routers'

function App() {
  const user = {
    username: "Rangga"
  }

  // const [count, setCount] = useState(0)
  return (
    <>
    {/* <Article name="rangga" todos={["makan", "ngoding", "tidur"]} />
    <br />
    <Article name="rangga now" todos={["main", "kerja", "bangun","belajar"]} /> */}
    <GlobalContext.Provider value={user}>
    {/* <Home /> */}
    <RouterProvider router={router}/>
    </GlobalContext.Provider>
    </>
  )
}

export default App
