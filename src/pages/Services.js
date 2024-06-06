import React from 'react'
import PageHero from '../components/PageHero'
import ServiceDisplay from '../components/ServiceDisplay'
import ServiceInfo from '../components/ServiceInfo'
import ServiceContact from '../components/ServiceContact'

function Services() {
  return (
    <div>
        <PageHero heading='Our Services'></PageHero>
        <ServiceDisplay></ServiceDisplay>
        <ServiceInfo></ServiceInfo>
        <ServiceContact></ServiceContact>
    </div>
  )
}

export default Services