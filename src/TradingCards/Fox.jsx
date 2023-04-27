import React from "react";
import "../CSS/Card.css"
const Rabbit = () => {
  return (
    <div>
      <div className="card-container">
        <h3>Rabbit</h3>
        {/* your favorite animal's image goes here */}
        <img src="Images/animals/1.jpg" alt="Rabbit" width="300px" />
        <div className="self">
          {/* your favorite animal's interesting fact goes here */}
          <p className="info">
            <em>
              Rabbits are small mammals with fluffy, short tails, whiskers and
              distinctive long ears. There are more than 30 species around the
              world, and while they live in many different environments, they
              have many things in common.{" "}
            </em>
          </p>
          <ul>
            {/* your favorite animal's list items go here */}
            <li className="life">
              <span className="span">Scientfic name:</span>Oryctolagus cuniculus
            </li>
            <li>
              <span className="span">Average length:</span>1.2 m
            </li>
            <li>
              <span className="span">Average life:</span>1 – 2 years
            </li>
            <li>
              <span className="span">Habitats:</span>Wild rabbits can be found
              in woods, forests, meadows, grasslands, deserts, tundra and
              wetlands.
            </li>
          </ul>
          {/* your favorite animal's description goes here */}
          <p>
            Rabbits are small mammals in the family Leporidae of the order
            Lagomorpha. Oryctolagus cuniculus includes the European rabbit
            species and its descendants, the world's 305 breeds of domestic
            rabbit.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rabbit;
