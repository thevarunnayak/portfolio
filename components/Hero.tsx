import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { GridBackgroundDemo } from './ui/Background'
import { TextGenerateEffect } from './ui/TextGenerate'
import MagicButton from './MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { heroData } from '@/data'

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
        <GridBackgroundDemo />
        <div className='flex justify-center relative my-20 z-10'>
          <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
            <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
              {heroData.subtitle}
            </h2>
            <TextGenerateEffect className='text-center text-[40px] md:text-5xl lg:text-6xl' words={heroData.title} />
            <p className='text-center text-blue-100 md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>{heroData.description}</p>
                      <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
          </div>
        </div>
    </div>
  )
}

export default Hero
