import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <article>
      <section className="lorum">
        <h1>
          <span>Project</span>
          <br />
          Lorum
        </h1>
        <div className="btn">
          <img src="../../../public/Rectangle 6.png" alt="" />
          <Link to="/projects">
            View Projects{" "}
            <img src="../../../public/arrow-2-right-long.svg" alt="" />
          </Link>
        </div>
      </section>

      <section className="about">
        <div className="about-left">
          <img src="../../../public/Rectangle 8.png" alt="" />
          <img src="../../../public/Rectangle 10.png" alt="" />
        </div>

        <img className="mitte" src="../../../public/Rectangle 9.png" alt="" />

        <div className="about-right">
          <h3>About</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <Link to="/projects">
            Read more{" "}
            <img src="../../../public/arrow-2-right-long.svg" alt="" />
          </Link>
        </div>
      </section>
      <section className="focus">
        <h2>Main Focus/Mission Statement</h2>
        <div className="focus-cont">
          <div className="cont-left">
            <img src="../../../public/1.png" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              efficitur, lectus et facilisis placerat.
            </p>
          </div>
          <div className="cont-right">
            <img src="../../../public/2.png" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              efficitur, lectus et facilisis placerat, magna mauris porttitor
              tortor, a auctor est felis ut nisl.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Home;
