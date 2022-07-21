import React from "react";
import './cp.css'
import ProfileCard from "../../Components/Profcard/profileCard";
import axios from "axios";
import { useState, useEffect } from "react";
const url = "https://api.github.com/users/atharvagadkari05/repos";
function CardsPage() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setdata(response.data);
    });
  }, []);

  return (
    <div className="Cardspage">
      {data.map((e) => (
        <ProfileCard key={e.id} data={e} />
      ))}

     
    </div>
  );
}

export default CardsPage;
