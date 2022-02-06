const app = Vue.createApp({
	data() {
		return {
			initialResult: 0,
			savedNumber: 0,
			result: "",
		};
	},
	methods: {
		onClickAddFive: function () {
			let resPlusFive = this.initialResult + 5;
			this.initialResult = resPlusFive;
			this.savedNumber = resPlusFive;
			console.log(this.savedNumber);
			return this.savedNumber;
		},
		onClickAddOne: function () {
			let resPlusOne = this.initialResult + 1;
			this.initialResult = resPlusOne;
			this.savedNumber = resPlusOne;
			console.log(this.savedNumber);
			return this.savedNumber;
		},
	},
	computed: {
		showText: function () {
			if (this.savedNumber === 0) {
				return "Nothing changed";
			} else if (this.savedNumber < 37) {
				return "Not there yet!";
			} else if (this.savedNumber > 37) {
				return "Too much!";
			} else if (this.savedNumber === 37) {
				return 37;
			}
		},
	},
	watch: {
		showText() {
			const that = this;
			setTimeout(function () {
				that.savedNumber = 0;
			}, 5000);
		},
	},
});

app.mount("#assignment");
