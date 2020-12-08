import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";

//para usar flux
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Card from "../component/card.js";

export const Home = () => {
	const { store, actions } = useContext(Context);
	//console.log(store, "home");
	return (
		<div className="content">
			<h1>Characters</h1>
			<div className="row">
				{store.people.map((character, index) => {
					return (
						<div key={index} className="characters">
							<Card
								name={character.name}
								item1={character.gender}
								item2={character.hair_color}
								item3={character.eye_color}
								title1="Gender: "
								title2="Hair Color: "
								title3="Eye Color: "
								url={character.url}
							/>
						</div>
					);
				})}
			</div>
			<h1>Planets</h1>
			<div className="row">
				{store.planets.map((planet, index) => {
					return (
						<div key={index} className="planets">
							<Card
								name={planet.name}
								item1={planet.population}
								item2={planet.terrain}
								item3=""
								title1="Population: "
								title2="Terrain: "
								title3=""
								url={planet.url}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};
