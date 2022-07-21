import React from "react";
import Modal from "react-modal";
import { useState } from "react";

function Modalcomp(props) {
  

  
    return (
    <Modal isOpen={true} onRequestClose={true} >
      <button onClick={() => props.closemodal(false)}>X</button>
      <h2>Project Name : {props.data.name}</h2>
      <h3>Owner Name : {props.data.owner}</h3>
      <h4>
      {props.data.description
            ? props.data.description
            : "Description not Available"}
      </h4>
      <h5>Starred</h5>

      <p>JavaScrpit Java Git CSS HTML DockerFile</p>

      <button>Github</button>
    </Modal>
  );
}

export default Modalcomp;
