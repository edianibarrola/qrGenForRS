import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const [urlText, setUrl] = useState("");
	const [qrText, setQrText] = useState("https://via.placeholder.com/150?Text=Loading");

	return (
		<div className="container">
			<input type="text" value={urlText} onChange={e => setUrl(e.target.value)} />
			<br />
			<button
				onClick={e => {
					setQrText(`https://api.qrserver.com/v1/create-qr-code/?data=${qrText}&amp;size=100x100urlText`);
				}}>
				create qr
			</button>
			<img src={qrText} alt="" style={{ height: "150px" }} />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
