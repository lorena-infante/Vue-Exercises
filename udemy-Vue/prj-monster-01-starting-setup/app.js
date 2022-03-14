//If you DO NOT need access to Vue controlled data properties, if you're NOT calling the function from the inside HTML template, and you only USE IT FROM JS code, we can create just a JS normal function

function getRandomValue(min, max) {
	//calcultes random value of damage between a min and max value
	return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
	data() {
		return {
			playerHealth: 100,
			monsterHealth: 100,
		};
	},
	methods: {
		//reduces monster's health
		attackMonster() {
			//Math.floor(Math.random()* (max-min))+ min;
			const attackValue = getRandomValue(5, 12);
			//reduces monster's health this.monsterHealth = this.monsterHealth - attackValue;
			this.monsterHealth -= attackValue;

			//we can access methods through "this"
			this.attackPlayer();
		},
		attackPlayer() {
			const attackValue = getRandomValue(8, 15);
			this.playerHealth -= attackValue;
		},
	},
	computed: {
		monsterBarStyles() {
			return { width: this.monsterHealth + "%" };
		},
		playerBarStyles() {
			return {
				width: this.playerHealth + "%",
			};
		},
	},
});
app.mount("#game");
