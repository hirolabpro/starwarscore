import React, { useContext } from "react";
import { Container, Media, Row, Col, Button, Table } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterView = () => {
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
				{store.characters.map((each, index) => {
					if (id == index) {
						return (
							<div key={index}>
								<Row classNameclass="row justify-content-md-center">
									<Col>
										<h1 className="text-light"> StarWars Character</h1>;
										<img
											width={400}
											height={300}
											className="align-self-center mr-3"
											src="https://i.ytimg.com/vi/T9-SJ6ikuj0/maxresdefault.jpg"
										/>
									</Col>
								</Row>
								<Table responsive="sm" className="table table-dark">
									<thead>
										<tr>
											<th>Name</th>
											<th>Birth Year</th>
											<th>Gender</th>
											<th>Heigth</th>
											<th>Skin Color</th>
											<th>Eye Color</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>{each.name}</td>
											<td>{each.birth_year}</td>
											<td>{each.gender}</td>
											<td>{each.height}</td>
											<td>{each.skin_color}</td>
											<td>{each.eye_color}</td>
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
