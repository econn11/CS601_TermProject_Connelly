import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export default function Photography() {
  const location = useLocation();

  useEffect(() => {
    const section = location.state?.section;
    if (section) {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.state]);

  return (
    <div className="photo-container">
      <section id="projects" className="images">
        <h2>Photography Projects</h2>
        <p>
          As I continue to grow my skills in web design, I've chosen to highlight
          another creative passion of mine, which is photography. My work spans a diverse
          range of experiences, from capturing the fast-paced energy of sports and
          the immediacy of news, to the detail-oriented world of retail and
          hospitality, and the timeless storytelling of weddings. Each project
          reflects my ability to adapt to different environments while maintaining
          a consistent focus on composition, emotion, and visual impact.
        </p>
      </section>

      {/* <section id ="quote-banner">
        <div class = "quote">
          <p>"Photography captures moments; web development shapes experiences"</p>
        </div>
      </section> */}

      <section id="weddings" className="images">
        <h3>Wedding Photography</h3>
        <p>
          I photograph weddings with a blend of candid storytelling and refined portraiture, ensuring every moment feels genuine. My editing style is timeless and true-to-life, creating images that look beautiful today and for decades to come. Featured photos are from the Ciborowski wedding in June of 2025 at the Joy Nest in Newburyport, MA.
        </p>
        <div className="grid">
          {[
            "speech.jpg",
            "wedding.jpg",
            "baby.jpg",
            "card.jpg",
            "makeup.jpg",
            "caketest.jpg",
            "groom.jpg",
            "family.jpg",
            "dance.jpg",
            "ring.jpg",
            "grandma.jpg",
            "friends.jpg",
            "justmarried.jpg",
            "bride.jpg",
            "gettingready.jpg",
            "baby2.jpg",
            "cake.jpg",
            "sisters.jpg",
          ].map((file, index) => (
            <div className="image" key={index}>
              <img src={`/Images/${file}`} alt={file} />
            </div>
          ))}
        </div>
      </section>

      <section id="sports" className="images">
        <h3>Sports Photography</h3>
        <p>
          I capture the intensity and emotion of athletic performance, from fast-paced action to the quiet focus before the play. My editing brings out crisp detail and bold color, preserving the energy and atmosphere of every moment. The featured photos are from my time with the Chatham Angler's baseball team as the team photographer back in 2023. 
        </p>
        <div className="grid">
          {[
            "catcher.jpg",
            "celebration.jpg",
            "hats.jpg",
            "parade.jpg",
            "pitcher.jpg",
            "sportsmile.jpg",
            "batter (1).jpg",
            "resting.jpg",
            "players.jpg",
            "popcorn.jpg",
            "fans.jpg",
            "fog.jpg",
            "interview.jpg",
            "paint.jpg",
            "mound.jpg",
            "runner.jpg",
            "peacesign.jpg",
            "praying.jpg",
          ].map((file, index) => (
            <div className="image" key={index}>
              <img src={`/Images/${file}`} alt={file} />
            </div>
          ))}
        </div>
      </section>

      <section id="jewelry" className="images">
        <h3>Jewelry Photography</h3>
        <p>
          I photograph jewelry with a focus on clarity, detail, and refined lighting, ensuring every piece looks as stunning on screen as it does in person. My editing brings out true color, texture, and craftsmanship. Photos below were for a brand redesign project for Alexandria Jewelry in 2024. This included website redesign, product photography and editing, and social media branding.
        </p>
        <div className="grid">
          {[
            "bracelet.jpg",
            "bracelet2.jpg",
            "bracelet3.jpg",
            "bracelet4.jpg",
            "bracelet5.jpg",
            "necklace4.jpg",
            "necklace2.jpg",
            "necklace3.jpg",
            "necklace6.jpg",
            "earring.jpg",
            "earring2.jpg",
            "earring3.jpg",
          ].map((file, index) => (
            <div className="image" key={index}>
              <img src={`/Images/${file}`} alt={file} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
