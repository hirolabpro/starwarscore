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
				const url = "https://swapi.dev/api/people/";
				const response = await fetch(url);
				const data = await response.json();
				setStore({ characters: data.results });
			},
			apiPlanets: async () => {
				const url = "https://swapi.dev/api/planets/";
				const response = await fetch(url);
				const data = await response.json();
				setStore({ planets: data.results });
			},

			apiStarShips: async () => {
				const url = "https://swapi.dev/api/starships/";
				const response = await fetch(url);
				const data = await response.json();
				setStore({ starships: data.results });
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
