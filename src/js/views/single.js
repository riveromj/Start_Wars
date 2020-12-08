import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
//import "../../styles/people.css";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const str = props.location.state.url;
	const url = str.replace("http", "https");

	//people
	const gender = store.detail.gender;
	const birthYear = store.detail.birth_year;
	const height = store.detail.height;
	const skin_color = store.detail.skin_color;
	const hair_color = store.detail.hair_color;

	//plantet
	const climate = store.detail.climate;
	const population = store.detail.population;
	const terrain = store.detail.terrain;
	const orbital_period = store.detail.orbital_period;
	const rotation_period = store.detail.rotation_period;
	const diameter = store.detail.diameter;

	//console.log(url, "ESTOY SINGLE");
	useEffect(() => {
		actions.loadData(url);
	}, []);
	//const people = props.location.state.people;

	return (
		<div className="cointainer-fluid">
			<div className="row" id="description">
				<div className="col-6 character">
					<img src="https://dummyimage.com/800x600/000/fff" className="card-img-top" alt="..." />
				</div>
				<div className="col-6 ">
					<h1 className="title">{store.detail.name}</h1>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
						the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of
						type and scrambled it to make a type specimen book. It has survived not only five centuries, but
						also the leap into electronic typesetting, remaining essentially unchanged. It was popularised
						in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
						recently with desktop publishing software like Aldus PageMaker including versions of Lorem
						Ipsum.
					</p>
				</div>
			</div>
			<hr className="line" />
			<div className="row" id="features">
				<div className="col">
					<h3>Name</h3>
					<p>{store.detail.name}</p>
				</div>

				<div className="col">
					<h3>{url.includes("people") ? "Birth Year" : "Climate"}</h3>
					<p>{url.includes("people") ? birthYear : climate}</p>
				</div>
				<div className="col">
					<h3>{url.includes("people") ? "Gender" : "Population"}</h3>
					<p>{url.includes("people") ? gender : population}</p>
				</div>
				<div className="col">
					<h3>{url.includes("people") ? "Height" : "Orbital Period"}</h3>
					<p>{url.includes("people") ? height : orbital_period}</p>
				</div>
				<div className="col">
					<h3>{url.includes("people") ? "Skin Color" : "Rotation Period"}</h3>
					<p>{url.includes("people") ? skin_color : rotation_period}</p>
				</div>
				<div className="col">
					<h3>{url.includes("people") ? "Hair Color" : "Diameter"}</h3>
					<p>{url.includes("people") ? hair_color : diameter}</p>
				</div>
			</div>
		</div>
	);
};
Single.propTypes = {
	location: PropTypes.any
};
