import React from "react";

const mandar = (e) => {
  e.preventDefault()
  console.log("super!");
};

function Contact() {
  return (
    <div className="main--inner">
      <div className="form--wrapper">
        <h2>Escribime, o no</h2>
        <form onSubmit={mandar}>
          <label htmlFor="nombre">
            <input type="text" id="nombre" placeholder="nombre"></input>
          </label>
          <label htmlFor="email">
            <input type="email" id="email" placeholder="juancarlos@email.com"></input>
          </label>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
