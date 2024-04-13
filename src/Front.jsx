import { ELE0_TOUCH_THRESHOLD } from "johnny-five/lib/definitions/mpr121";
import App from "./App";
import { Link } from "react-router-dom";
import Eticket from "./Eticket.";

function Front(){

    return(
        <div className="min-h-screen" >

        <h1 className="text-7xl pt-5 text-center bg-black font-medium "> Ticket Vending Machine</h1>
        <p className="text-2xl pt-5 text-center bg-black">Please select your desired payment gateway</p>
       <div className="flex justify-center items-center w-[100%] h-screen gap-10 bg-black ">
        <Link to="/cash">
        <div className="w-[200px] h-[200px] bg-gray-300 flex justify-center items-center rounded-xl"onClick={<App/>} > 
        <h1 className="text-6xl text-black">Cash</h1>
         </div>
         </Link>
         <Link to="/online">
        <div className="w-[200px] h-[200px] bg-red-600 flex justify-center items-center rounded-xl" >
        <h1 className="text-6xl text-black">Online</h1>
        
        </div>
        </Link>

     
       </div>
       </div>
    )
}
export default Front;