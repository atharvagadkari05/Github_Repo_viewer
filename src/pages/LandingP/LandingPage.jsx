import React from "react";
import { Navigate,Link } from "react-router-dom";
import { useState } from "react";
import "./LandingPage.css";

function LandingPage() {
  const [username, setUsername] = useState("");
  const [gotoprof , setprof] = useState(false)

  async function submit() {
    console.log(username);
  }

  

  if(gotoprof){
    return <Navigate to="/profile"/>
  }
  
  return (
    <div className="Lpage_container">
      <p class="text-7xl dark:text-white font-bold dark:text-white">
        Organize Your Github Repostitories
      </p>

      <div className="button_container">
        <input
          type="email"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Github Username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <Link to={{
            pathname : "/profile/parameter-data" ,
            state : {data:username}
        }}></Link>

        <button
          typeof="submit"
          onClick={()=>setprof(true)}
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
