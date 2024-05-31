import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"

import  LoginPage from './pages/LoginPage' 
import RegisterPage from "./pages/registerPage"
function App(){
  return(
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>Home page</h1>} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage/>} />
          <Route path='/tasks' element={<h1>tasks page</h1>} />
          <Route path='/add-task' element={<h1>new tasks</h1>} />
          <Route path='/tasks/:id' element={<h1>update task</h1>} />
          <Route path='/profile' element={<h1>page profile</h1>} />
        </Routes>
     </BrowserRouter>
    </AuthProvider> 
  );
}

export default App;