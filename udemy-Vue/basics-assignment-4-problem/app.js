const app = Vue.createApp({
	data() {
		return {
			userInput: "",
            toggle: false,
            bgColor:""
		};
	},
	computed: {
		showHideClass() {
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
		},
	},
});

app.mount("#assignment");
