import React, { Component } from 'react'
import './mecanaliz.css'

export default class Mecanaliz extends Component {
  render() {
    return (
      <div>

        <table className='analizhead'><h2><b>MECHANICAL PROPERTIES</b></h2>
        </table>
        <table className='mecbas'>
          <td className='analiz-mec'><b></b></td>
          <td className='analiz-mec'><b>TENSILE STRENGTH</b> <br />N/mm2(mPa)</td>
          <td className='analiz-mec'><b>YIELD STRENGTH</b> <br />N/mm2(mPa)</td>
          <td className='analiz-mec'><b>ELONGATION</b> <br />%</td>
          <td className='analiz-mec'><b>HARDNESS</b> <br />HB 10</td>

        </table>
        <table>
          <tr>
            <td className='mec-analiz'> <input className='mec-input-1' type='{text}'></input></td>
            <td className='mec-analiz'> <input className='mec-input' type='{text}'></input></td>
            <td className='mec-analiz'> <input className='mec-input' type='{text}'></input></td>
            <td className='mec-analiz'> <input className='mec-input' type='{text}'></input></td>
            <td className='mec-analiz'> <input className='mec-input' type='{text}'></input></td>
          </tr>
        </table>
        <table>
          <tr>
            <td className='mec-analiz'> <input className='mec-input-1' type='{text}'></input></td>
            <td className='mec-analiz'> <input className='mec-input' type='{text}'></input></td>
            <td className='mec-analiz'> <input className='mec-input' type='{text}'></input></td>
            <td className='mec-analiz'> <input className='mec-input' type='{text}'></input></td>
            <td className='mec-analiz'> <input className='mec-input' type='{text}'></input></td>
          </tr>
        </table>
        <table>
          <tr>
            <td className='mec-analiz'> <input className='mec-input-1' type='{text}'></input></td>
            <td className='mec-analiz'> <input className='mec-input' type='{text}'></input></td>
            <td className='mec-analiz'> <input className='mec-input' type='{text}'></input></td>
            <td className='mec-analiz'> <input className='mec-input' type='{text}'></input></td>
            <td className='mec-analiz'> <input className='mec-input' type='{text}'></input></td>
          </tr>
        </table>
        <table>
          <tr>
            <td className='mec-analiz'> <input className='mec-input-1' type='{text}'></input></td>
            <td className='mec-analiz'> <input className='mec-input' type='{text}'></input></td>
            <td className='mec-analiz'> <input className='mec-input' type='{text}'></input></td>
            <td className='mec-analiz'> <input className='mec-input' type='{text}'></input></td>
            <td className='mec-analiz'> <input className='mec-input' type='{text}'></input></td>
          </tr>
        </table>
        <table className='analizhead'>
        </table>

      </div>
    )
  }
}
