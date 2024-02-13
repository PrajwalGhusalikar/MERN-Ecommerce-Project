import React from 'react'
import Carousel from '../../Components/HomeCarousel/Carousel'
import HomeSectionCarousel from '../../Components/HomeSectionCarousel/HomeSectionCarousel'


const HomePage = () => {
  return (
    <>
    <div>
      <Carousel/>
    </div>
     <div>
     <HomeSectionCarousel/>
     <HomeSectionCarousel/>
     <HomeSectionCarousel/>
     
   </div></>
  )
}

export default HomePage
