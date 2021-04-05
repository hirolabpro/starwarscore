import React, { useContext } from "react";
import { Dropdown, Container, DropdownButton, Navbar } from "react-bootstrap";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const StarWarsBar = () => {
	const { store, actions } = useContext(Context);
	return (
		<Container>
			<Navbar bg="light" expand="lg">
				<Link to="/">
					<Navbar.Brand href="#">
						<img
							src="https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo_logotype.png"
							width="70"
							height="45"
							className="d-inline-block align-top"
							alt="React Bootstrap logo"
						/>
					</Navbar.Brand>
				</Link>
				<Navbar.Collapse className="justify-content-end">
					<DropdownButton
						id="dropdown-basic-button"
						variant="dark"
						title={"Favorites " + store.favorites.length}>
						{store.favorites.length == 0 ? (
							<Dropdown.Item>Empty</Dropdown.Item>
						) : (
							store.favorites.map((favorite, i) => {
								return (
									<Dropdown.Item eventKey={i} key={i} onClick={() => actions.deleteFavorite(i)}>
										{favorite.type == "people" ? (
											<div>
												<i className="fas fa-id-card">
													&nbsp;
													{favorite.name}
												</i>
												&nbsp;&nbsp;&nbsp;
												<i className="far fa-trash-alt" />
											</div>
										) : (
											<div>
												<i className="far fa-trash-alt" />
											</div>
										)}
									</Dropdown.Item>
								);
							})
						)}
					</DropdownButton>
				</Navbar.Collapse>
			</Navbar>
		</Container>
	);
};
