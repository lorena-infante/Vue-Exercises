const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: "",
			confirmedName: "",
			lastName: "",
			//fullname: "",
		};
	},
	watch: {
		//watchers are created to change a value that is registered on the data properties, but their main reason to exist is to register if something (like a counter) has changed, For example, to reach a condition. This shouldn't be confused with computed properties
		//watchers work like this: watch:{name(newValue, oldValue){...}}

		//this is a good example of using watchers
		counter(value) {
			const that = this;
			if (value > 50) {
				setTimeout(function () {
					that.counter = 0;
				}, 2000);
			}
		},

		//This is not an excellent example to make watchers shine
		/*name(value) {
			// we don't return anything, because this will executed as the name changes
			if (value === "") {
				this.fullname = "";
			} else {
				this.fullname = value + " " + this.lastName;
			}
		},

		lastName(value) {
			if (value === "") {
				this.fullname = "";
			} else {
				this.fullname = this.name + " " + value;
			}
		}*/
	},
	computed: {
		//the computed properties are methods that don't need to be called with () inside html. This function works as a function but is rendered as an object of data() and it's executed the times that the variable used is modified. Do not affect the whole app.
		fullname() {
			console.log("It is running again");
			if (this.name === "" || this.lastName === "") {
				return "";
			}
			return this.name + " " + this.lastName;
		},
	},
	methods: {
		//methods are still called inside our v-on, v.click, etc
		submitForm() {
			alert("Request sent!");
		},
		add(num) {
			this.counter = this.counter + num;
		},

		reduce(num) {
			this.counter = this.counter - num;
		},

		setName(e) {
			this.name = e.target.value;
		},
		confirmInput() {
			this.confirmedName = this.name;
		},
		resetInput() {
			this.name = "";
			this.lastName = "";
		},
		/*If outputFullName is called as a method inside html it will affect the performance.
     Se recarga TODA la página*/
		outputFullName() {
			console.log("Running Again");
			if (this.name === "") {
				return (this.name = "");
			}
			return this.name + " " + "Infante";
		},
	},
});

app.mount('#events');
