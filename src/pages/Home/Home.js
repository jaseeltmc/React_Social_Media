
import React from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'
import Leftbar from '../../components/Leftbar/Leftbar'
import Feed from '../../components/Feed/Feed'
import Rightbar from '../../components/Rightbar/Rightbar'

function home() {
  return (

    <>
     <Header/>
    <div className="homeContainer">
    <Leftbar/>
    <Feed/>
    <Rightbar/>
    </div>
    </>
    
   
    
   
  )
}

export default home
