import React from 'react'
import Api from '../components/jumbo/Api'
import Fraud from '../components/jumbo/Fraud'
import Payment from '../components/jumbo/Payment'


export default function Home() {
  return (
    <div>
   <Payment />
   <Api />
   <Fraud />
   </div>
  )
}
