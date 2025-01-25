
import Data from '@/components/Data/Data'
import Mission from '@/components/Mission/Mission'
import Servicehero from '@/components/Servicehero/Servicehero'
import Servicesfeatures from '@/components/Servicesfeatures/Servicesfeatures'
import Solutions from '@/components/Solutions/Solutions'
import React from 'react'

const page = () => {
  return (
    <div>
      <Servicehero/>
      <Data/>
      <Servicesfeatures/>
      <Mission/>
    
        <Solutions/>
    </div>
  )
}

export default page
