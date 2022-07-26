import React from "react";
import {useLocation} from "react-router-dom"
import "./cp.css";
import ProfileCard from "../../Components/Profcard/profileCard";
import Modalcomp from "../../Components/Modal/modal";
import axios from "axios";
import { useState, useEffect } from "react";
const url = "https://api.github.com/users/atharvagadkari05/repos";
function CardsPage() {
  const [data, setdata] = useState([]);
  const location = useLocation();
  const {username}  = location.state

  console.log(username)

  useEffect(() => {
    axios.get(url).then((response) => {
      setdata(response.data);
    });


  }, []);

  return (
    <div className="Cardspage grid grid-cols-3">
      {data.map((e) => (
        <ProfileCard  key={e.id} data={e} />
      ))}

    {/* {modalopen&&<Modalcomp openmodal = {setmodalopen()} />} */}
     
     
    </div>
  );
}

export default CardsPage;
