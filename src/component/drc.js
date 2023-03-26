import React, { Component } from 'react'

import './drc.css'


export default class Drc extends Component {

  render() {
   const today = new Date();
   const date = today.getDate() +'/'+
                (today.getMonth()+1) +'/'+
                today.getFullYear();
   
   
    return (
      <div className='date'>
     
        <table>
          <tr>
            <td><b>DATE:</b></td>
            <td> <input type='{text}'defaultValue={date} /></td>
          </tr>
          <tr>
            <td>PRODUCT NORM:</td>
            <td><input type='{text}'></input></td>
          </tr>
          <tr>
            <td>CERTIFICATE NO:</td>
            <td><input type='{text}'></input></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
        </table>

      </div>
    )
  }
}
