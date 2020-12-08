const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			favorite: [],
			detail: {}
		},
		actions: {
			loadSomeData: url => {
				fetch("https://swapi.dev/api/" + url + "/")
					.then(res => res.json())
					.then(data => {
						setStore({ [url]: data.results });
					})
					.catch(err => console.log("ERR", err));
			},
			loadData: url => {
				fetch(`${url}`)
					.then(res => res.json())
					.then(data => {
						setStore({ detail: data });
					})
					.catch(err => console.log("ERR", err));
			},
			addFavorite: item => {
				const store = getStore();
				const validate = store.favorite.includes(item);
				console.log(validate);
				if (store.favorite == [] || !validate) {
					setStore({ favorite: [...store.favorite, item] });
					console.log(store.favorite, "ENFAVORITO FLUX");
				}
			},
			delteFavorite: id => {
				const store = getStore();
				const copyFavorite = [...store.favorite];
				copyFavorite.splice(id, 1);
				setStore({ favorite: [...copyFavorite] });
			}
		}
	};
};

export default getState;
