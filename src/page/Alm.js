import Drc from "/Users/hasancelikel/Desktop/analiz/src/component/drc.js";
import Logo from "/Users/hasancelikel/Desktop/analiz/src/component/logo.js";

import Mettest from "/Users/hasancelikel/Desktop/analiz/src/component/mettest.js";
import Mecanaliz from "/Users/hasancelikel/Desktop/analiz/src/component/CHEMICAL ANALISYS/mecanaliz.js"
import End from "/Users/hasancelikel/Desktop/analiz/src/component/CHEMICAL ANALISYS/end.js"
import AnalizAlm from "/Users/hasancelikel/Desktop/analiz/src/diffcomp/analizAlm.js";


import { useReactToPrint } from 'react-to-print';
import React, {useRef} from 'react'


function Alm() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
      content: () => componentRef.current,
      documentTitle: 'emp-data',
     /* onAfterPrint: ()=> alert('ÇETİNKAYA METAL'),*/
     
  
    })


  return (
    <>
    <div ref={componentRef} style={{width:'1005px',height:'1153px', margin:'100px 100px'}} className="App">
  
  

      <Logo />
      <Drc />
      <Mettest />
      <AnalizAlm />
      <Mecanaliz />
      <End />
      
    </div>

<button onClick={handlePrint}>YAZDIR</button>
    </>
  );
}

export default Alm;
