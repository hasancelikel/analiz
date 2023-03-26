import React from 'react'
import { Link } from 'react-router-dom';


import './Home.css'
function HomepPage() {
  
  return (
    <div className='link-comp'> 
      <div className='link-box'>

      <button className='next-page'><Link className='link' to='/App'>Pirinç Analiz</Link></button>

      </div>
      <div className='link-box'>

      <button className='next-page'><Link className='link' to='/Alm'>Alüminyum Analiz</Link></button>    

      </div>
      <input type='text' style={{border:'1px solid black'}}/>
    
    </div>
  )
}

export default HomepPage