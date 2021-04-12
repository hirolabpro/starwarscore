import React, { useState, useContext } from "react";
import { Card, Container, CardDeck, Col, ButtonToolbar, Button } from "react-bootstrap";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Planets = () => {
	const { store, actions } = useContext(Context);

	return (
		<Container>
			<h1 className="display-5 text-center mt-5 text-warning">Planets</h1>
			<CardDeck>
				{store.planets.map((item, index) => {
					return (
						<Col className="mt-5" md={4} key={index}>
							<Card style={{ width: "18rem" }}>
								<Card.Img
									variant="top"
									src="https://starwarsblog.starwars.com/wp-content/uploads/2018/10/mustafar-tall.jpg"
								/>
								<Card.Body className="display-5 text-center">
									<Card.Title>{item.name}</Card.Title>
									<ButtonToolbar
										className="justify-content-between"
										aria-label="Toolbar with Button groups">
										<Link to={`/planets/${index}`}>
											<Button variant="warning">Learn more....</Button>
										</Link>
										<Link>
											{store.favorites.includes(item.name) ? null : (
												<Button
													onClick={() => actions.setFavorites(item.name)}
													variant="warning">
													<i className="far fa-heart" />
												</Button>
											)}
										</Link>
									</ButtonToolbar>
								</Card.Body>
							</Card>
						</Col>
					);
				})}
			</CardDeck>
		</Container>
	);
};
