import React, { useState } from "react";
import "./card.css";
import Modalcomp from "../../Components/Modal/modal";

function ProfileCard(props) {
  const [modalisOpen, setModal] = useState(false);

  return (
    <div className="ProfCard">
      <div class="m-4 w-max  p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.data.name}
          </h5>
        </a>
        <p class="mb-3 max-w-xl font-normal text-gray-700 dark:text-gray-400">
          
        </p>
        <button
          href="#git"
          onClick={() => {
            setModal(true);
          }}
          class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          View
        </button>
      </div>

      {modalisOpen && <Modalcomp data ={props.data} closemodal={setModal} />}
    </div>
  );
}

export default ProfileCard;
