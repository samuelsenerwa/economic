import React from 'react'
import {FeatureContainer, FeatureButton} from './FeatureElements';
const Feature = () => {
  return (
   <FeatureContainer>
    <h1>Pizza Of The Day</h1>
    <p>Truffle Alfredo sauce topped with 24 carat gold dust.</p>
    <FeatureButton>Order Now</FeatureButton>
   </FeatureContainer>
  )
}

export default Feature;