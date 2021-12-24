import EL from "../assets/el.jpg";
import ST from "../assets/stranger-things.jpg";

function Download() {
  return (
    <section className="Download Section">
      <div className="Container">
        <div className="Grid">
          <div className="Section-Text">
            <h1> Téléchargez vos émissions pour les regarder hors ligne. </h1>

            <p>
              Enregistrez facilement vos favoris et ayez toujours quelque chose
              à regarder.
            </p>
          </div>

          <div className="Image-tv">
            <img src={EL} alt="Phone" />

            <div className="Download-Field">
              <div className="grid">
               

                <div className="Download-Text">
                  <p>Stranger Things</p>

                
                </div>

                <div className="Download-Animation">
                  <img
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="more_text">
              S’abonner à Netflix : un jeu d’enfant... Netflix joue la carte de
              la flexibité aussi bien sur le choix des formules (trois forfaits
              sont proposés de 7,99€ à 13,99€) que sur le nombre d'écrans sur
              lesquels on peut avoir accès au service. Autre argument de taille,
              vous êtes libre de résilier à tout moment et vous bénéficiez de 30
              jours d’essai !
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Download;
