import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const [urlText, setUrl] = useState("");
	const [docName, setDocName] = useState("");

	return (
		<div className="container">
			<label htmlFor="">Dr Name: </label>
			<input type="text" value={docName} onChange={e => setDocName(e.target.value)} />
			<label htmlFor="URL: ">URL for QR code</label>
			<input type="text" value={urlText} onChange={e => setUrl(e.target.value)} />
			<br />
			<Link to="/test">
				<button
					onClick={e => {
						actions.setQrText(
							`https://api.qrserver.com/v1/create-qr-code/?data=${urlText}&amp;size=100x100urlText`
						);
						actions.setDrName(docName);
					}}>
					create qr
				</button>
			</Link>
			<img src={store.qrText} alt="" style={{ height: "150px" }} />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
