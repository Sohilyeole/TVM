

import { SerialPort } from "serialport";
import { ReadlineParser } from "serialport";

 export let ardinodata=[];
    const port = new SerialPort({
        path:"COM3",
        baudRate: 9600
    })
    const parser = port.pipe(new ReadlineParser({ delimiter: '\n' }));
    port.on("open", () => {
        console.log('serial port open');
      });
      
     parser.on('data', data =>{
        console.log('got word from arduino:', data);
        
       ardinodata.push(data)
      });
    

//       function ardino(){
//        return ardinodata;
//       }
// export default ardino;


  