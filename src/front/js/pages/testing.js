import React, { useRef, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
// https://res.cloudinary.com/petrep/image/upload/v1631910403/realselfBG_fccsia.png
const Canvas = props => {
	const { store, actions } = useContext(Context);
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext("2d");
		//Our first draw
		context.fillStyle = "#000000";
		context.fillRect(0, 0, context.canvas.width, context.canvas.height);
		var img1 = new Image();
		img1.onload = function() {
			context.drawImage(img1, 0, 0); // Or at whatever offset you like
		};
		img1.src = "https://res.cloudinary.com/petrep/image/upload/v1631910403/realselfBG_fccsia.png";
		var img2 = new Image();
		img2.onload = function() {
			context.drawImage(img2, 0, 0); // Or at whatever offset you like
		};
		img2.src = store.qrText;
	}, []);

	return (
		<div
		// style={{
		// 	backgroundImage: `url("https://res.cloudinary.com/petrep/image/upload/v1631910403/realselfBG_fccsia.png")`
		// }}
		>
			<canvas ref={canvasRef} {...props} />;
		</div>
	);
};

export default Canvas;
