const app = Vue.createApp({
	data() {
		return {
			userInput: "",
			inputs: [],
			toggle: true,
		};
	},
	methods: {
		addInput() {
			this.inputs.push(this.userInput);
		},
		onClickToggle() {
			this.toggle = !this.toggle;
		},
	},
	computed: {
		onToggle() {
			return this.toggle;
		},
	},
});

app.mount("#assignment");
