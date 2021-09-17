const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			qrCode: null,
			qrText: "https://via.placeholder.com/150?Text=Loading",
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getQr: () => {
				var requestOptions = {
					method: "GET",
					redirect: "follow"
				};

				fetch("https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld!&size=100x100", requestOptions)
					.then(response => response.text())
					.then(result => setStore({ qrCode: result }))
					.catch(error => console.log("error", error));
			},
			setQrText: val => {
				const store = getStore();
				setStore({ qrText: val });
			}
		}
	};
};

export default getState;
