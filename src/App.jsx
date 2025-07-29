import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/student/Home'
import CourseList from './pages/student/CourseList'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course-list' element={<CourseList/>}/>
        </Routes>
    </div>
  )
}

export default App
