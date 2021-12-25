function Footer() {
  //eslint-disable-next-line

  return (
    <footer className="Footer">
      <form className="Form">
        <input
          type="text"
          name="InputText"
          id="input-text"
          placeholder="Email:"
        />

        <button> chercher </button>
      </form>

      <p>Copyright &copy; NETFLIX Tunisie. tous droits reservées</p>

      <p>
        &copy; credits:{" "}
       
        - Programmer
      </p>

      <p>merci pour votre visite</p>

     
    </footer>
  );
}

export default Footer;
