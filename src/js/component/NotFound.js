import React from "react";
import { Carousel, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NotFound = () => {
	return (
		<Container>
			<img
				className="d-block w-100"
				src="https://learn.getgrav.org/user/pages/11.troubleshooting/01.page-not-found/error-404.png"
				alt="NotFound"
			/>
			<Link to="/">
				<button className="btn btn-warning">
					<i>
						<strong>Click here to return to Home</strong>
					</i>
				</button>
			</Link>
		</Container>
	);
};
