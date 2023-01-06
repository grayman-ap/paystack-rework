import React from 'react'
import Api from '../components/jumbo/Api'
import Fraud from '../components/jumbo/Fraud'
import Payment from '../components/jumbo/Payment'
import Growth from '../components/trust/Growth'
import Trust from '../components/trust/Trust'


export default function Home() {
  return (
    <div>
   <Payment />
   <Api />
   <Fraud />
   <Trust />
   <Growth />
   </div>
  )
}
