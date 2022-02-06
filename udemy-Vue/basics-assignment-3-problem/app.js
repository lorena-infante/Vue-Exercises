const app = Vue.createApp({
	data() {
		return {
			initialResult: 0,
			savedNumber: 0,
			result: '',
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
		
		counter(showText) {
			console.log('dsfdsfdf')
			const that = this;
			if (showText != "Nothing changed") {
				setTimeout(function () {
					showText = 0;
				}, 5000);
			}
		},
	},
});

app.mount("#assignment");
