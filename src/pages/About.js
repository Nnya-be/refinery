import React from 'react'
import PageHero from '../components/PageHero'
import BenefitsSection from '../components/BenefitsSection'
import WhoSection from '../components/WhoSection'
import OurSkill from '../components/OurSkill'

function About() {
  return (
    <div className='text-white '>
      <PageHero heading='About Us'></PageHero>
      <BenefitsSection></BenefitsSection>
      <WhoSection></WhoSection>
      <OurSkill></OurSkill>
    </div>
  )
}

export default About