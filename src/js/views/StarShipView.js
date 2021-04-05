import React, { useContext } from "react";
import { Container, Media, Row, Col, Button, Table } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const StarShipView = () => {
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
				{store.starships.map((each, index) => {
					if (id == index) {
						return (
							<div key={index}>
								<Row classNameclass="row justify-content-md-center">
									<Col>
										<h1 className="text-light"> StarWars Ships</h1>;
										<img
											width={400}
											height={300}
											className="align-self-center mr-3"
											src="https://www.denofgeek.com/wp-content/uploads/2019/12/x-wing.jpg?w=1024"
										/>
									</Col>
								</Row>
								<Table responsive="sm" className="table table-dark">
									<thead>
										<tr>
											<th>Name</th>
											<th>Model</th>
											<th>Star Ship Class</th>
											<th>Manufacturer</th>
											<th>Cost in credits</th>
											<th>Length</th>
											<th>Crew</th>
											<th>Passengers</th>
											<th>Max Atmosphering Speed</th>
											<th>Hyperdrive Rating</th>
											<th>MGLT</th>
											<th>Cargo Capacity</th>
											<th>Consumables</th>
											<th>Pilots</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>{each.name}</td>
											<td>{each.model}</td>
											<td>{each.starship_class}</td>
											<td>{each.manufacturer}</td>
											<td>{each.cost_in_credits}</td>
											<td>{each.length}</td>
											<td>{each.crew}</td>
											<td>{each.passengers}</td>
											<td>{each.max_atmosphering_speed}</td>
											<td>{each.hyperdrive_rating}</td>
											<td>{each.MGLT}</td>
											<td>{each.cargo_capacity}</td>
											<td>{each.consumables}</td>
											<td>{each.pilots}</td>
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
