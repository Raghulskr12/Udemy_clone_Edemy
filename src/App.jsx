import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/student/Home'
import CourseList from './pages/student/CourseList'
import CourseDetails from './pages/student/CourseDetails'
import MyEnrollments from './pages/student/MyEnrollments'
import Player from './pages/student/Player'
import Loading from './components/student/Loading'
import Educator from './pages/educator/Educator'
import Addcourse from './pages/educator/AddCourse'
import Studentsenrolled from './pages/educator/StudentsEnrolled'
import MyCourses from './pages/educator/MyCourses'
import Navbar from './components/student/Navbar'
const App = () => {
  return (
    <div className='text-default min-h-screen bg-white'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course-list' element={<CourseList/>}/>
        <Route path='/course-list/:input' element={<CourseList/>}/>
        <Route path='/course/:id' element={<CourseDetails/>}/>
        <Route path='/my-enrollments' element={<MyEnrollments/>}/>
        <Route path='/player/:courseId' element={<Player/>}/>
        <Route path='/loading/:path' element={<Loading/>}/>
        <Route path='/educator' element={<Educator/>}>
         <Route path='educator' element={<Educator/>}/>
         <Route path='add-course' element={<Addcourse/>}/>
         <Route path='my-courses' element={<MyCourses/>}/>
         <Route path='students-enrolled' element={<Studentsenrolled/>}/>
      </Route>



        </Routes>
    </div>
  )
}

export default App
