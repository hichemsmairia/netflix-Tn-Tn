import DP from "../assets/device-pile.png";
function Anywhere() {
  return (
    <section className="Devaice-Pile Section">
      <div className="Container">
        <div className="Grid">
          <div className="Section-Text">
            <h1> Regardez partout. </h1>

            <p>
              Diffusez des films et des émissions de télévision en illimité sur
              votre téléphone, tablette, ordinateur portable et téléviseur sans
              payer plus.
            </p>
          </div>

          <div className="Image-tv">
            <img src={DP} alt="TV" />

            <div className="Video-tv">
              <video autoplay playsinline muted loop>
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                  type="video/mp4"
                ></source>
              </video>
            </div>
          </div>
          <div>
            <p className="more_text">
              Il suffit de vous connecter au portail d'accueil sur votre TV avec
              les applications disponibles et de sélectionner Netflix. Une fois
              votre compte activé, vous aurez accès à tout le catalogue de films
              et séries. Bonus, si vous profitez de la Bbox 4K, vous aurez la
              possibilité de visionner les programmes en 4K
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Anywhere;
