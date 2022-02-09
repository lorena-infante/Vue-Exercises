const app = Vue.createApp({
	data() {
		return {
			userInput: "",
			toggle: false,
		};
	},
	computed: {
		showHide() {
			if (this.toggle === true) {
				return { visible: this.toggle };
			} else {
				return { hidden: this.toggle };
			}
		},
	},
	methods: {
		onClickToggle() {
			this.toggle = !this.toggle;
			console.log(this.toggle);
		},
	},
});

app.mount("#assignment");
