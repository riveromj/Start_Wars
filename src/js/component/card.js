import React, { useState, useEffect, useContext } from "react";
import "../../styles/cards.scss";

//para usar flux
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes, { any, object, string } from "prop-types";

function Card(props) {
	const { store, actions } = useContext(Context);
	//console.log(props, "ESTOY EN CARD");
	return (
		<div>
			<div className="card">
				<img src="https://dummyimage.com/400x200/000/fff" className="card-img-top" alt="img" />
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text">
						{" "}
						{props.title1}
						{props.item1}
					</p>
					<p className="card-text">
						{props.title2} {props.item2}
					</p>
					<p className="card-text">
						{props.title3} {props.item3}{" "}
					</p>
					<div className="bottom-buttons">
						<Link
							to={{
								pathname: "/single",
								state: {
									url: props.url
								}
							}}>
							<button type="button" className="btn btn-outline-primary">
								Learn more!
							</button>
						</Link>

						<button
							type="button"
							className="btn btn-outline-info"
							id="heart"
							onClick={() => {
								actions.addFavorite(props.name);
							}}>
							{store.favorite.includes(props.name) ? (
								<i className="fas fa-heart" />
							) : (
								<i className="far fa-heart" />
							)}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Card;
Card.propTypes = {
	name: string,
	item1: string,
	item2: string,
	item3: string,
	title1: string,
	title2: string,
	title3: string,
	url: string
};
