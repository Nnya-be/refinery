import React from 'react'
import SectionHeadings from './SectionHeadings'
import SectionParagraphs from './SectionParagraphs'
import ProgressBar from './ProgressBar'

function OurSkill() {
  return (
    <div className='h-lvh p-8 text-4xl grid  items-center'>
        <div className='h-full grid grid-cols-2 gap-x-8 '>
            <div className='h-5/6 flex flex-col pt-28 justify-center items-start py-12'>
                <SectionHeadings></SectionHeadings>
                <SectionParagraphs></SectionParagraphs>
            </div>
            <div className='flex flex-col py-36 justify-between items-center'>
                <ProgressBar></ProgressBar>
                <ProgressBar></ProgressBar>
                <ProgressBar></ProgressBar>
                <ProgressBar></ProgressBar>
            </div>
        </div>
    </div>
  )
}

export default OurSkill
