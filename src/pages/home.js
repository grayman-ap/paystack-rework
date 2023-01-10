import React from 'react'
import Navbar from '../components/header/Header'
import Hero from '../components/hero/Hero'
import Api from '../components/jumbo/Api'
import Fraud from '../components/jumbo/Fraud'
import Payment from '../components/jumbo/Payment'
import Growth from '../components/trust/Growth'
import Partner from '../components/trust/Partner'
import Trust from '../components/trust/Trust'
import Try from '../components/trust/Try'
export default function Home() {
  return (
    <div>
    <Navbar />
    <Hero />
   <Payment />
   <Api />
   <Fraud />
   <Trust />
   <Growth />
   <Partner />
   <Try />
   </div>
  )
}
