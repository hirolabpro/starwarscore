const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],

			characters: [],

			planets: [],

			starships: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			apiCharacters: async () => {
				const url = "https://3000-tomato-aphid-s0ef8lj4.ws-us03.gitpod.io/people/";
				const response = await fetch(url);
				const data = await response.json();
				setStore({ characters: data }); // data.results if you are using the swapi API
			},
			apiPlanets: async () => {
				const url = "https://3000-tomato-aphid-s0ef8lj4.ws-us03.gitpod.io/planets/";
				const response = await fetch(url);
				const data = await response.json();
				setStore({ planets: data });
			},

			apiStarShips: async () => {
				const url = "https://3000-tomato-aphid-s0ef8lj4.ws-us03.gitpod.io/starships/";
				const response = await fetch(url);
				const data = await response.json();
				setStore({ starships: data });
			},

			setFavorites: name => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, name] });
			},

			deleteFavorite: id => {
				const store = getStore();

				const newFavorites = store.favorites.filter((item, i) => i !== id);
				setStore({ favorites: newFavorites });
			}
		}
	};
};

export default getState;
