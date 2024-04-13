import { useState } from "react";
import { useEffect } from "react";
import axiosInstance from "./Helper/axiosInstance";
import sohilo from "./sohilo";
import { useNavigate,Link } from "react-router-dom";

function App() {
  // const url = "http://localhost:2010";
  const navigate=useNavigate();
  const [data, setdata] = useState(-1);
  const [fetchres, setfetchres] = useState(false);
  const [printoption,setprintoption]=useState(false);


  const [price, setprice] = useState(0);
  

  async function datas() {
    
    let res = await axiosInstance.get("/");
    let data2 = await parseInt(res.data);
     await setdata(data2);
    console.log( "server",data);
    console.log("app", price)
    // setfetchres(true)

    if (data == parseInt(price)){
      setfetchres(true)
      console.log("hiii");
     setprintoption(true)
    }
  }

  const [destination, setdestination] = useState("");

  
  let currentDate = new Date();
let year = currentDate.getFullYear();
let month = currentDate.getMonth() +1; // Note: Months are zero-indexed
let day = currentDate.getDate();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();
 
  let time = hours + ":" + minutes + ":" + seconds;
  let fulldate = day + "/" + month + "/" + year;
  function sohil1(t) {
   
    const printContents = document.querySelector("#sohil").innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();
    // document.body.innerHTML=originalContents;
    // setdata(0);
    setdestination("");
    navigate("/");
    window.location.reload(false);
  }
 
  function sohil(e) {
    setdestination(e.target.value);
    let p = Number.parseInt(e.target.id);
    setprice(p);

   
  }

  

  return (
    <div className="flex  flex-row">
      <div className="drawer-open">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {}
          {/* <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label> */}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {
              <h2 className="text-center font-bold text-xl">
                Choose Destination
              </h2>
            }
            {/* <li ><a className="text-white font-bold text-lg bg-slate-500 mt-3">Sidebar Item 1</a></li>
      <li ><a className="text-white font-bold text-lg bg-slate-500 mt-3">Sidebar Item 1</a></li>
      <li ><a className="text-white font-bold text-lg bg-slate-500 mt-3">Sidebar Item 1</a></li>
      <li ><a className="text-white font-bold text-lg bg-slate-500 mt-3">Sidebar Item 1</a></li>
       <input type="button" value="Lonavala"onClick={(e)=>sohil(e)} /> */}

            <input
              type="button"
              value="Pune"
              id="5"
              className="input input-bordered input-info w-full max-w-xs mt-4"
              onClick={(e) => sohil(e)}
            />
            <input
              type="button"
              value="Shivaji Nagar"
              id="5"
              className="input input-bordered input-info w-full max-w-xs  mt-4"
              onClick={(e) => sohil(e)}
            />
            <input
              type="button"
              value="Khadki"
              id="5"
              className="input input-bordered input-info w-full max-w-xs  mt-4"
              onClick={(e) => sohil(e)}
            />
            <input
              type="button"
              value="Pimpri"
              id="5"
              className="input input-bordered input-info w-full max-w-xs  mt-4"
              onClick={(e) => sohil(e)}
            />
            <input
              type="button"
              value="Chinchwad"
              id="5"
              className="input input-bordered input-info w-full max-w-xs  mt-4"
              onClick={(e) => sohil(e)}
            />

            <input
              type="button"
              value="Dehu Road"
              id="10"
              className="input input-bordered input-info w-full max-w-xs mt-4"
              onClick={(e) => sohil(e)}
            />
            <input
              type="button"
              value="Begdewadi"
              id="10"
              className="input input-bordered input-info w-full max-w-xs  mt-4"
              onClick={(e) => sohil(e)}
            />
            <input
              type="button"
              value="Talegoan"
              id="10"
              className="input input-bordered input-info w-full max-w-xs  mt-4"
              onClick={(e) => sohil(e)}
            />
            <input
              type="button"
              value="Vadgoan"
              id="10"
              className="input input-bordered input-info w-full max-w-xs  mt-4"
              onClick={(e) => sohil(e)}
            />
            <input
              type="button"
              value="Kanhe"
              id="10"
              className="input input-bordered input-info w-full max-w-xs  mt-4"
              onClick={(e) => sohil(e)}
            />
            <input
              type="button"
              value="Lonavla"
              id="10"
              className="input input-bordered input-info w-full max-w-xs  mt-4"
              onClick={(e) => sohil(e)}
            />
          </ul>
        </div>
      </div>
      <div className="bg-gray-600 w-[500px] h-80 m-auto  flex flex-col rounded-xl px-4">
        <div className="flex mt-4  ">
          <div className="">
            <img
              className="w-16 h-16  rounded-lg"
              src="data:image/png;base64,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"
            />
          </div>
          <div className="flex justify-center items-center w-full border">
            <h1 className="text-3xl font-semibold text-white text-center ">
              Indian Railway
            </h1>
          </div>
        </div>
        <div className="mt-5  ">
          <div className="flex flex-row justify-between ">
            <h1 className="text-xl font-semibold text-white">Start : Akurdi</h1>

            <h1 className="text-xl font-semibold text-white">
              Destination : {destination ? destination : "Select Dest"}{" "}
            </h1>
          </div>
        </div>
        <div className="mt-5">
          <div className="flex flex-row justify-between">
            <h1 className="text-xl font-semibold text-white">
              Date: {fulldate}
            </h1>
            <h1 className="text-xl font-semibold text-white">Time: {time}</h1>
          </div>
        </div>
        <div className="mt-5">
          <div className="flex flex-row justify-between">
            <h1 className="text-xl font-semibold text-white">Passenger: 1</h1>
            {!fetchres && (
              <button
                className="btn-primary px-2 py-1 rounded-lg"
                onClick={() => datas()}
              >
                Fetch
              </button>
            )}
          </div>
        </div>
        <div className="mt-5">
          <div className="flex flex-row justify-between">
            <h1 className="text-xl font-semibold text-white">
              Ticket Fare :Rs {price}{" "}
            </h1>
           

            { fetchres? (
              <button
                className="btn-primary px-2 py-1 rounded-lg"
                onClick={() => sohil1(price)}
              >
                Print
              </button>
            ) : (
              <p className="font-semibold">
                Insert coin below <br></br> then press fetch
              </p>
            )}
          </div>
        </div>
        <p className="text-center">
          Thank you for using atvm for ticket booking!!!{" "}
        </p>
        <Link to="/">
        <button  className="btn-secondary mt-5 px-2 py-1 rounded-lg w-24 justify-center items-center " >Back</button>
        </Link>
      </div>

      <div
        className=" hidden w-[200px] h-[300px] bg-slate-300 border  border-red-300"
        id="sohil"
      >
        <h1>start : Akurdi</h1>
        <h1>Destination : {destination}</h1>
        <h1>Fare : {price} RS</h1>
        <h1>Adult : 1</h1>
        <h1>Date : {fulldate}</h1>
        <h1>Time : {time}</h1>
        <p>Thank you !!!</p>
      </div>
    </div>
  );
}

export default App;
