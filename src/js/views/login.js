import React, { useContext, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Button } from "react-bootstrap";

export const Login = () => {
	const { store } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleClick = () => {
		const opts = {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				email: email,
				password: password
			})
		};
		fetch("https://app-starwarscr.herokuapp.com/token", opts)
			.then(resp => {
				if (resp.status === 200) return resp.json();
				else alert("There has been some error");
			})
			.then()
			.catch(error => {
				console.error("There was an error!!!", error);
			});
	};

	return (
		<div className="text-center mt-5">
			<h1 className="display-5 text-center mt-5 text-warning">Login</h1>
			<div>
				<input type="text" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
				<input
					type="password"
					placeholder="password"
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				<Button onClick={handleClick} variant="warning">
					Login
				</Button>
			</div>
		</div>
	);
};
