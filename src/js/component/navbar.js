import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

//////
import { DropdownButton, Dropdown } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<Link to="/">
				<img className="logo" src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo.png" />
			</Link>

			<DropdownButton id="dropdown-item-button" title={" Favorite " + store.favorite.length}>
				{store.favorite.length > 0 ? (
					store.favorite.map((favorite, index) => {
						return (
							<Dropdown.Item key={index} className="  ">
								<p>{favorite}</p>

								<i
									id="delete"
									className="far fa-trash-alt pointer"
									onClick={() => {
										actions.delteFavorite({ index });
									}}
								/>
							</Dropdown.Item>
						);
					})
				) : (
					<Dropdown.Item>
						<p>Emty</p>
					</Dropdown.Item>
				)}
			</DropdownButton>
		</nav>
	);
};
