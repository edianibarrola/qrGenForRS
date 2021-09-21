import React, { useRef, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.scss";
// https://res.cloudinary.com/petrep/image/upload/v1631910403/realselfBG_fccsia.png
const Canvas = props => {
	const { store, actions } = useContext(Context);
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext("2d");
		context.canvas.width = "1000";
		context.canvas.height = "710";
		//Our first draw

		var img1 = new Image();
		img1.onload = function() {
			context.drawImage(img1, 0, 0); // Or at whatever offset you like
			context.font = "50px Mulish";
			context.fillStyle = "black";
			context.textAlign = "center";
			context.fillText(store.drName, context.canvas.width / 2, 200);
		};
		img1.src = "https://res.cloudinary.com/petrep/image/upload/v1631910403/realselfBG_fccsia.png";
		var img2 = new Image();
		img2.onload = function() {
			context.drawImage(img2, 380, 220); // Or at whatever offset you like
		};
		img2.src = store.qrText;
	}, []);

	return (
		<div className="container">
			<div className="d-flex justify-content-center align-content-center" style={{ background: "black" }}>
				<canvas width={"1000px"} height={"710px"} ref={canvasRef} {...props} />;
			</div>
		</div>
	);
};

export default Canvas;
