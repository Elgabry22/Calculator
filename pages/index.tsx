import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { use, useRef, useState } from 'react'
import { type } from 'os'
import Calcolator from '@/Components/Calcolator'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {

 

  return (
      <div className='mainpage'>
    
        <Calcolator  />

        </div>
  )
}
