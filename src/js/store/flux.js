const getState = ({ getStore, getActions, setStore }) => {
	const base_url = "https://3000-f7ce1416-051d-4076-a83d-d6bfcec27bdb.ws-us02.gitpod.io";
	return {
		store: {
			user: {
				loggedIn: false,
				username: "",
				token: null,
				info: null
			},
			register: {
				full_name: "",
				email: "",
				address: "",
				city: "",
				state: "",
				zip: "",
				username: "",
				password: ""
			},
			puzzleFetch: [],
			shipping: [
				{
					arrivalDate: "",
					trackingID: "",
					status: ""
				}
			]
		},
		swapPuzzle: [{}],
		swapCart: [],
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
                    fetch().then().then(data => setStore({ "foo": data.bar }))
                */
			},
			login: (username, password) => {
				return fetch(base_url + "/login", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						username: username,
						password: password
					})
				})
					.then(resp => {
						if (!resp.ok) {
							throw new Error(resp.statusText);
						}
						return resp.json();
					})
					.then(data => {
						let store = getStore();
						store.user = {
							loggedIn: true,
							username: username,
							token: data.jwt,
							info: data.user
						};
						setStore(store);
						sessionStorage.setItem("currentUser", JSON.stringify(data));
						sessionStorage.setItem("loggedIn", true);
						return true;
					})
					.catch(err => {
						console.error(err);
						return false;
					});
			},
			isLoggedIn: () => {
				const store = getStore();
				if (sessionStorage.getItem("currentUser")) {
					store.user = {
						loggedIn: sessionStorage.getItem("loggedIn")
					};
					setStore(store);
				}
			},
			logout: () => {
				setStore({
					user: {
						loggedIn: false,
						username: "",
						token: null,
						info: null
					}
				});
			},
			registerPage: (full_name, email, address, city, state, zip, username, password) => {
				return fetch(base_url + "/register", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						full_name: full_name,
						email: email,
						address: address,
						city: city,
						state: state,
						zip: zip,
						username: username,
						password: password
					})
				})
					.then(resp => {
						if (!resp.ok) {
							throw new Error(resp.statusText);
						}
						return resp.json();
					})
					.then(data => {
						let store = getStore();
						store.user = {
							token: data.jwt,
							info: data.user
						};
						setStore(store);
						return true;
					})
					.catch(err => {
						console.error(err);
						return false;
					});
			},
			getAddress: () => {
				return fetch(base_url + "/user/" + store.user.info)
					.then(res => res.json())
					.then(data => setStore({ user: data }));
			},
			addtoCart: puzzle => {
				const store = getStore();
				setStore({ swapCart: [puzzle] });
			},
			getUser: () => {
				const store = getStore();
				return fetch(base_url + "/user/" + store.user.info.id)
					.then(res => res.json())
					.then(data => setStore({ user: { ...store.user, info: data } }));
			},
			getPuzzles: () => {
				return fetch(base_url + "/puzzle")
					.then(res => res.json())
					.then(data => setStore({ puzzleFetch: data }))
					.then(res => console.log(getStore()));
			},
			getPuzzle: (data, id) => {
				fetch(base_url + `/puzzle/${id}`)
					.then(res => res.json())
					.then(data => setStore({ puzzleFetch: data }));
			},
			track: trackingId => {
				return (
					fetch(
						`https://secure.shippingapis.com/ShippingAPI.dll?API=TrackV2&XML=<TrackRequest USERID="6084GEEK5289"><TrackID ID="${trackingId}"></TrackID></TrackRequest>`
					)
						//where do I need to import user and tracking ID to make this work
						//where does the "basename" of my usps name go???
						// now I think I can call on actions.track in track.js...
						.then(res => res.text())
						.then(res => res)
						.catch(err => err)
				);
			},
			swapPuzzle: async (puzzleName, puzzlePicture, boxPicture, number, ageRange, category, owner_id) => {
				let data = {
					name_of_puzzle: puzzleName,
					picture_of_puzzle: puzzlePicture,
					picture_of_box: boxPicture,
					number_of_pieces: number,
					age_range: ageRange,
					category: category,
					is_available: true,
					owner_id: owner_id
				};
				let formData = new FormData();
				for (var key in data) {
					formData.append(key, data[key]);
				}
				let response = await fetch(base_url + "/puzzle", {
					method: "POST",
					body: formData
				});
				if (response.ok) {
					getActions().getUser();
					getActions().getPuzzles();
					return true;
				} else {
					return false;
				}
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
			}
		}
	};
};
export default getState;
