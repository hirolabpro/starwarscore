import React from "react";
import { Carousel, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const StartHome = () => {
	return (
		<Container>
			<Carousel>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://cdn.mos.cms.futurecdn.net/DEpYy8jSdvD9dkvVDSPNoD.jpg"
						alt="Characters"
					/>
					<Carousel.Caption>
						<h3>Characters</h3>
						<Link to="/people">
							<button className="btn btn-warning">
								<i>
									<strong>Click Here to know more about your favorites characters</strong>
								</i>
							</button>
						</Link>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src="https://wallpaperaccess.com/full/1801919.jpg" alt="Planets" />

					<Carousel.Caption>
						<h3>Planets</h3>
						<Link to="/planets">
							<button className="btn btn-warning">
								<i>
									<strong>Click here to know more about the fantastic planets</strong>
								</i>
							</button>
						</Link>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://cdn.motor1.com/images/mgl/xWZQ6/s1/porsche-star-wars-tri-wing-s-91x-pegasus-starfighter.jpg"
						alt="StarShips"
					/>
					<Carousel.Caption>
						<h3>StarShips</h3>
						<Link to="/starships">
							<button className="btn btn-warning">
								<i>
									<strong>Click Here to know more about StarShips</strong>
								</i>
							</button>
						</Link>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</Container>
	);
};
