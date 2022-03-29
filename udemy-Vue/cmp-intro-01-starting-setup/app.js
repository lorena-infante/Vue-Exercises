const app = Vue.createApp({
	data() {
		return {
			friends: [
				{
					id: "manuel",
					name: "Manuel Lorenz",
					phone: "123456789",
					email: "manuel@example.com",
				},
				{
					id: "Julie",
					name: "Julie de Vogue",
					phone: "01234587555",
					email: "julie@example.com",
				},
			],
		};
	},
});
/*el component es el que crea la tag html custom. Un component es una mini-app dentro de la app. Se llama con un template*/
app.component("friend-contact", {
	template: `
				<li>
          <h2>{{friend.name}}</h2>
          <button @click ="toggleDetails()">
					{{detailsAreVisible ? 'Hide' : 'Show'}} Details
					</button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
          </ul>
        </li>
	`,
	data() {
		return {
			detailsAreVisible: false,
			friend: {
				id: "manuel",
				name: "Manuel Lorenzo",
				phone: "01234 5678 991",
				email: "manuel@localhost.com",
			},
		};
	},
	methods: {
		toggleDetails() {
			this.detailsAreVisible = !this.detailsAreVisible;
		},
	},
});
app.mount("#app");
