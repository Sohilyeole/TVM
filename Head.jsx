import { SerialPort } from "serialport";
import { ReadlineParser } from "serialport";
function Head(){
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
        
       ardinodata=data;
      });
    return(<>
        <h1>data:1</h1>
        </>)
}
export default Head;