import React, { Component } from 'react'
import './mettest.css'



      
   

export default class Mettest extends Component {

  

   
  render() {
    return (
      <div >
        <table className='mettes'><h1>MATERIAL TEST CERTIFICATE</h1></table>
        <br/>



        <table className='customer'>
       <tr>
        <th className='cus1'>CUSTOMERS:</th>
        <td className='cus2'><input className='cusinput' type='text'></input></td>
       </tr>
       <tr>
        <th className='cus1'>ADDRESS:</th>
        <td className='cus2'><input className='cusinput' type='text'></input></td>
       </tr>
        </table>



        <table className='info'>
        <tr>
        <th className='info1'>TEL NO:</th>
        <td className='info2'><input className='infoinput' type='text'></input></td>
       </tr>
       <tr>
        <th className='info1'>MAIL:</th>
        <td className='info2'><input className='infoinput' type='mail'></input></td>
       </tr>
       <tr>
        <th className='info1'>VKN:</th>
        <td className='info2'><input className='infoinput' type='text'></input></td>
       </tr>
       <tr>
        <th className='info1'>V.D.:</th>
        <td className='info2'><input className='infoinput' type='text'></input></td>
       </tr>


        </table>

      </div>
     
    )
  }
}
