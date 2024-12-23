import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import QuickSteps from './QuickSteps'
import LatestJob from './LatestJob'
import Footer from './Footer'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const Home = () => {
const {user} = useSelector (store => store.auth)
const navigate = useNavigate()
useEffect(()=>{
if(user?.role=== 'recruiter'){
  navigate("/Admin/Companies")
}

})
  
  return (
    <div className='h-screen overflow-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-200'>
      <Navbar />
      <HeroSection />
      <CategoryCarousel />
      <QuickSteps />
      <LatestJob/>
      <Footer/>
    </div>
  )
}

export default Home