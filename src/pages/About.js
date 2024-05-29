import React from 'react'
import PageHero from '../components/PageHero'
import BenefitsSection from '../components/BenefitsSection'
import WhoSection from '../components/WhoSection'

function About() {
  return (
    <div className='text-white '>
      <PageHero></PageHero>
      <BenefitsSection></BenefitsSection>
      <WhoSection></WhoSection>
    </div>
  )
}

export default About