import React, {useState,useEffect} from "react";
import axios from 'axios'

export default function Modal(props) {

  const [lang,setlang] = useState([]);


  useEffect(()=>{
    axios.get(`https://api.github.com/repos/atharvagadkari05/${props.data.name}/languages`).then((res)=>{
      setlang(Object.keys(res.data));
    })
    // console.log(lang);
  },[`https://api.github.com/repos/atharvagadkari05/${props.data.name}/languages`])
  
  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    {/* <!--
      Background backdrop, show/hide based on modal state.
  
      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    --> */}
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
  
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
        {/* <!--
          Modal panel, show/hide based on modal state.
  
          Entering: "ease-out duration-300"
            From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            To: "opacity-100 translate-y-0 sm:scale-100"
          Leaving: "ease-in duration-200"
            From: "opacity-100 translate-y-0 sm:scale-100"
            To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        --> */}
        <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
           
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-bold text-gray-900" id="modal-title">{props.data.name} by <a target="blank "href={props.data.owner.html_url}>{props.data.owner.login}</a></h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">{props.data.description
           ? props.data.description
             : "Description not Available"}</p>

             <p>No of stars : {props.data.stargazers_count}</p>

             <div className="sm:flex mt-1">
             {lang.map(item=>
        <p key="{item}">{item}</p>
      )}
             </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button  type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">GitHub</button>
            <button onClick={props.closeModal} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Close</button>
          </div>
        </div>

      
      </div>
    </div>
  </div>
  );
}



// import React from "react";
// import Modal from "react-modal";
// import { useState } from "react";

// function Modalcomp(props) {
  

  
//     return (
//     <Modal isOpen={true} onRequestClose={true} >
//       <button onClick={() => props.closemodal(false)}>X</button>
//       <h2>Project Name : {props.data.name}</h2>
//       {/* <h3>Owner Name : {props.data.owner}</h3> */}
//       <h4>
//       {props.data.description
//             ? props.data.description
//             : "Description not Available"}
//       </h4>
//       <h5>Starred</h5>

//       <p>JavaScrpit Java Git CSS HTML DockerFile</p>


//       <button>Github</button>
//     </Modal>
//   );
// }
