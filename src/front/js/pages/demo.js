import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const [urlText, setUrl] = useState("");
	const [docName, setDocName] = useState("");

	return (
		<div className="container ">
			<div className="row ">
				<h1 className="text-center">realself QR maker</h1>
				<div className="col-12 d-flex justify-content-center mt-3">
					<input
						placeholder="Dr. Name"
						type="text"
						value={docName}
						onChange={e => setDocName(e.target.value)}
					/>
				</div>

				<div className="col-12 d-flex justify-content-center mt-3">
					<input
						placeholder="URL for QR code"
						type="text"
						value={urlText}
						onChange={e => setUrl(e.target.value)}
					/>
				</div>
			</div>
			<br />
			<div className="row">
				<div className="col-12 d-flex justify-content-center">
					<Link to="/test">
						<button
							className="btn btn-primary"
							onClick={e => {
								actions.setQrText(
									`https://api.qrserver.com/v1/create-qr-code/?data=${urlText}&amp;size=100x100urlText`
								);
								actions.setDrName(docName);
							}}>
							create qr
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
