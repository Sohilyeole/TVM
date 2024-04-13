import { useState } from "react";
import axios from "axios";

function Eticket(){


    const [number,setnumber]=useState();
    
    function handleUserInput(e) {
        const {  value } = e.target;
          setnumber(value);
      }
    const header={
        headers:{
        Authorization:`Bearer EAAGV5VdJCIgBOZCfTeZCfNrOxN2BV19s8c7JqDjidfpJJTlc7QbropXtByJlbSWt6qM1ZCLWzcwgxh8sYu7r6DaZCFxg50if9HFvViCGu13nvqNyAMCmC7qiPd88edVH7fF61Y667ZBsRtJIs107ZCfywZCRWcGL1ag44ojnZC0ggP1Eug7GqSXXGKn4uVhEbeEBZAwNqbvjLMPzrPLoKJ98ZD`,
        Accept:"application/json"
        }
    }
  
    const body={
        "messaging_product": "whatsapp",
         "to": "917666908014", 
         "type": "template",
          "template": 
          { 
            // "name": "hello_world", 
          "name": "atvm", 
          "language": { "code": "en" },
          "components": [
            {
                "type": "body",
                "parameters": [
                     {
                          "type": "text",
                          "text": "akurdi"
                      },
                      {
                          "type": "text",
                          "text": "destina"
                      }
                ]
            }
        ]
         }
    }
    const  sendmessage=()=>{
        console.log(number);
        axios.post("https://graph.facebook.com/v18.0/292427737277033/messages",body,header)
        .then((res)=>{
            console.log("msg sent suceesfully")
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    return (
        <>
        {/* <input type="text" className="p-2 m-2" onChange={handleUserInput} value={number}/> */}
        <button className="p-5 border-red-400 " onClick={()=>sendmessage()}>send ticket</button>
        </>
    )

}
export default Eticket;