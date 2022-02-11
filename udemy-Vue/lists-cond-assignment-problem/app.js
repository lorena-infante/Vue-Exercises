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
			const that = this;
			if (this.toggle === true) {
				return that.toggle;
			} else {
				return that.toggle;
			}
		},
	},
});

app.mount("#assignment");
