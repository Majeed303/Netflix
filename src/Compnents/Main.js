import React from 'react'
import Banner from "./Banner/Banner";
import Navbar from "./Navbar/Navbar";
import Rowpost from "./Rowpost/Rowpost";
import { Actions, Comedy, documation, Horror, orginals, Romance } from "./url"

function Main() {
  return (
    <div>
     <Navbar/>
      <Banner/>
      <Rowpost url={orginals} title="Netflix Orginals"/>
      <Rowpost url={Actions}  title="Actions" isSmall />
      <Rowpost url={Comedy}  title="Comdey" isSmall />
      <Rowpost url={Horror}  title="Horror" isSmall />
      <Rowpost url={Romance}  title="Romance" isSmall />
      <Rowpost url={documation}  title="Documentaries" isSmall />
      
    </div>
  )
}

export default Main
