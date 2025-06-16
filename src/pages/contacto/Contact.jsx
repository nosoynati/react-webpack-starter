import './Contact.scss';

const mandar = (e) => {
  e.preventDefault()
  console.log("super!");
};

function Contact() {
  return (
    <div className="main--inner">
      <div className="form--wrapper">
        <p className="title">Escribime</p>
        <p></p>
        <p>...O no, es un mundo libre</p>

        <form onSubmit={mandar} className="form">
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
