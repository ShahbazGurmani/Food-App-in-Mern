import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <>
        <div><Header/></div>
        <div className='text-light'>Home screen body</div>
        <div><Footer/></div>
    </>
  )
}
