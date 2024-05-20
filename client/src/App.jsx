import { BrowserRouter, Routes, Route } from "react-router-dom"
function app(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<h1>Home page</h1>} />
      <Route path='/login' element={<h1>login</h1>} />
      <Route path='/register' element={<h1>register</h1>} />
      <Route path='/tasks' element={<h1>tasks page</h1>} />
      <Route path='/add-task' element={<h1>new tasks</h1>} />
      <Route path='/tasks/:id' element={<h1>update task</h1>} />
      <Route path='/profile' element={<h1>page profile</h1>} />

    </Routes>
     </BrowserRouter>
  )
}

export default app