import React,{useState} from 'react'
// import QrReader from 'react-qr-scanner'
import QrReader from 'react-qr-scanner'
function Scan() {

    // const delay = 500;


    const previewStyle = {
        height: 240,
        width: 320,
      }

    const [result, setResult] = useState( {
        delay: 100,
        result: null,
      });

    const handleScan = (data) => {
      let ticket = JSON.parse(result)
      let scannerobj ={
        ticket:ticket,
        uid:"",
        curr_areaid:""
      }

        
      if (data) {
        setResult({
            result: data.text,
            
          });
         
      }
    };
    

    const handleError = (error) => {
      console.log('in error',error);
    };
    
    
    
    // const resshow = ()=>{
    //   console.log(result.result);
    // }


  return (
    <>
            <QrReader
        delay={result.delay}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
        
      />
      <p>{result.result}</p>

    </>
  )
}

export default Scan
