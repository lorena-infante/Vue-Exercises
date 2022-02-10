const app = Vue.createApp({
	data() {
		return {
			inputGoal: "",
			goals: [],
		};
	},
	methods: {
		addGoal() {
			this.goals.push(this.inputGoal);
		},
	},
});

app.mount("#user-goals");
