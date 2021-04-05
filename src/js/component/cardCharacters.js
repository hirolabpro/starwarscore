import React, { useState, useContext } from "react";
import { Card, Container, CardDeck, Col, ButtonToolbar, Button } from "react-bootstrap";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Character = () => {
	const { store, actions } = useContext(Context);

	return (
		<Container>
			<h1 className="display-5 text-center mt-5 text-warning">Characters</h1>
			<CardDeck>
				{store.characters.map((item, index) => {
					return (
						<Col className="mt-5" md={4} key={index}>
							<Card style={{ width: "18rem" }}>
								<Card.Img
									variant="top"
									src="https://media1.popsugar-assets.com/files/thumbor/W1lPno_cqnB6yCXCfwgQ1muvt8U/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2015/05/11/825/n/1922398/d5db8e92_shutterstock_239338216.jpg"
								/>
								<Card.Body className="display-5 text-center">
									<Card.Title>{item.name}</Card.Title>
									<Card.Text>
										<p>
											<strong>Gender: </strong>
											<span>{item.gender}</span>
										</p>
										<p>
											<strong>Hair color: </strong>
											<span>{item.hair_color}</span>
										</p>
										<p>
											<strong>Eye color: </strong>
											<span>{item.eye_color}</span>
										</p>
									</Card.Text>
									<ButtonToolbar
										className="justify-content-between"
										aria-label="Toolbar with Button groups">
										<Link to={`/people/${index}`}>
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
