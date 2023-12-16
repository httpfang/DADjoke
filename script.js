// const btn = document.getElementById("btn");
// const jokeEle = document.getElementById("joke");
// const apikey = "ioZrwc4JAaHzPO9cRUCM6A==GXZDyv6HcQJH62Wp";
// const options = {
// 	method: "GET", // Capitalize "GET"
// 	headers: { // Change "header" to "headers"
// 		"X-Api-Key": apikey,
// 	},
// };

// const apiurl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

// async function getjoke() {
// 	try { // Add try-catch block to handle potential errors
// 		const response = await fetch(apiurl, options);
// 		const data = await response.json();
// 		jokeEle.innerHTML = data.jokes[0].joke; // Correct the data access
// 	} catch (error) {
// 		console.error("Error fetching joke:", error);
// 	}
// }

// btn.addEventListener("click", getjoke);





const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "ioZrwc4JAaHzPO9cRUCM6A==GXZDyv6HcQJH62Wp"
	const options = {
	method: "GET",
	headers: {
		"X-Api-Key": apiKey,
	},
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
	try {
		jokeEl.innerText = "Updating...";
		btnEl.disabled = true;
		btnEl.innerText = "Loading...";
		const response = await fetch(apiURL, options);
		const data = await response.json();

		btnEl.disabled = false;
		btnEl.innerText = "Tell me a joke";

		jokeEl.innerText = data[0].joke;
	} catch (error) {
		jokeEl.innerText = "An error happened, try again later";
		btnEl.disabled = false;
		btnEl.innerText = "Tell me a joke";
		console.log(error);
	}
}

btnEl.addEventListener("click", getJoke);
