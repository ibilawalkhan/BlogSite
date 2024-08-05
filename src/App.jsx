import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import authService from './appwrite/auth.js'
import { login, logout } from './store/authSlice.js'
import { Header, Footer } from './components/index.js'
import { Outlet } from "react-router-dom"

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then(userData => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          TODO:
          {/* <Outlet /> */}
        </main>
        <Footer />
      </div>
    </div>
  ) : null

  return (
    < div >
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div >
  )
}

export default App
