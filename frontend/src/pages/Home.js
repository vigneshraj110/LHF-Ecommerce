import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>

      <HorizontalCardProduct category={"bedsheets"} heading={"bedsheets (single, double, triple)"}/>
      <HorizontalCardProduct category={"bedspreads"} heading={"bedspreads (single, double, triple)"}/>

      <VerticalCardProduct category={"towels"} heading={"towels"}/>
      <VerticalCardProduct category={"mats"} heading={"mats"}/>
      <VerticalCardProduct category={"carpets"} heading={"carpets"}/>
      <VerticalCardProduct category={"pillows"} heading={"pillows"}/>
      <VerticalCardProduct category={"cushions"} heading={"cushions"}/>
      <VerticalCardProduct category={"quilts"} heading={"quilts (single, double, triple)"}/>
      <VerticalCardProduct category={"cottonHandbags"} heading={"cottonhandbags"}/>
      <VerticalCardProduct category={"pillowcases"} heading={"pillowcases"}/>
      <VerticalCardProduct category={"Bed"} heading={"bed (single, double)"}/>
      <VerticalCardProduct category={"rugs"} heading={"rugs"}/>
    </div>
  )
}

export default Home

