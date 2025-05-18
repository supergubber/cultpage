import React from 'react'
import Header from '../components/common/Header'
import SectionOne from '../components/homepage/SectionOne'
import SectionTwo from '../components/homepage/SectionTwo'
import SectionThree from '../components/homepage/SectionThree'
import SectionFour from '../components/homepage/SectionFour'
import SectionFive from '../components/homepage/SectionFive'
import Sectionsix from '../components/homepage/Sectionsix'
import SectionSeven from '../components/homepage/SectionSeven'
import SectionEight from '../components/homepage/SectionEight'
import SectionNine from '../components/homepage/SectionNine'
import SectionTen from '../components/homepage/SectionTen'
import Footer from '../components/common/Footer'
import TermAndCondition from '../components/common/TermAndCondition'

const Homepage = () => {
  return (
    <div className='max-w-screen min-h-screen bg-[#fffaf0] flex flex-col overflow-x-hidden flex-wrap'>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Sectionsix />
      <SectionSeven />
      <SectionEight />
      <SectionNine />
      <SectionTen />
      <Footer />
      <TermAndCondition />
    </div>
  )
}

export default Homepage
