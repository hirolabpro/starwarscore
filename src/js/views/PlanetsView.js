import React, { useContext } from "react";
import { Container, Media, Row, Col, Button, Table } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetsView = () => {
	const { id } = useParams();
	const intId = parseInt(id);
	const history = useHistory();
	const { store, actions } = useContext(Context);

	const goBack = () => {
		history.goBack();
	};

	return (
		<Container>
			<Media>
				{store.planets.map((each, index) => {
					if (id == index) {
						return (
							<div key={index}>
								<Row classNameclass="row justify-content-md-center">
									<Col>
										<h1 className="text-light"> StarWars Planets</h1>;
										<img
											width={400}
											height={300}
											className="align-self-center mr-3"
											src="https://starwarsblog.starwars.com/wp-content/uploads/2020/08/mustafar-bio-1.jpg"
										/>
									</Col>
								</Row>
								<Table responsive="sm" className="table table-dark">
									<thead>
										<tr>
											<th>Name</th>
											<th>Diameter</th>
											<th>Orbital Period</th>
											<th>Gravity</th>
											<th>Population</th>
											<th>Climate</th>
											<th>Terrain</th>
											<th>Surface Water</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>{each.name}</td>
											<td>{each.diameter}</td>
											<td>{each.rotation_period}</td>
											<td>{each.orbital_period}</td>
											<td>{each.gravity}</td>
											<td>{each.population}</td>
											<td>{each.climate}</td>
											<td>{each.terrain}</td>
											<td>{each.surface_water}</td>
										</tr>
									</tbody>
								</Table>
								<Button variant="warning" onClick={() => goBack()}>
									<strong>Go Back</strong>
								</Button>
							</div>
						);
					}
				})}
			</Media>
		</Container>
	);
};
