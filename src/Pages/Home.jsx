import React from "react";
import "../CSS/Home.css"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="banner">
        <div className="app-text">
          <h1>Welcome to Zootopia!</h1>
          <p>We have some animal trading cards for you!!!!!</p>
          <p>Hope you will enjoy and get some learnings from the cards!!!</p>
          <p>
            You will find some of the cards below and by clicking on the Trading
            Cards option in Menu!!!
          </p>
        </div>
        <div className="app-picture">
            <img src="Images/trading.jpg" alt="animal card" />
        </div>
      </div>
      <div className="section2">
        <h1>Trading Cards</h1>
        <div className="row">
            <div className="column">
                <Link to = "/rabbit">
                    <img src="/Images/animals/1.jpg" alt="" />
                </Link>
            </div>
            <div className="column">
                <Link to="/tiger">
                    <img src="/Images/animals/2.jpg" alt="" />
                </Link>
            </div>
            <div className="column">
                <Link to="/zebra">
                    <img src="/Images/animals/3.jpg" alt="" />
                </Link>
            </div>
            <div className="column">
                <Link to="/lion">
                    <img src="/Images/animals/4.jpg" alt="" />
                </Link>
            </div>

        </div>
        <div className="row">
            <div className="column">
                <Link to="/cat">
                    <img src="/Images/animals/5.jpg" alt="" />
                </Link>
            </div>
            <div className="column">
                <Link to="/platypus">
                    <img src="/Images/animals/6.jpg" alt="" />
                </Link>
            </div>
            <div className="column">
                <Link to="/elephant">
                    <img src="/Images/animals/7.jpg" alt="" />
                </Link>
            </div>
            <div className="column">
                <Link to="/leapord">
                    <img src="/Images/animals/8.jpg" alt="" />
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
