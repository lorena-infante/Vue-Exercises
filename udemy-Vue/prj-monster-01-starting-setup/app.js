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
			currentRound: 0,
		};
	},
	methods: {
		//reduces monster's health
		attackMonster() {
			this.currentRound++;
			//Math.floor(Math.random()* (max-min))+ min;
			const attackValue = getRandomValue(5, 12);

			if (this.monsterHealth <= 0) {
				this.monsterHealth = 0;
			} else {
				//reduces monster's health this.monsterHealth = this.monsterHealth - attackValue;
				this.monsterHealth -= attackValue;
			}

			//we can access methods through "this"
			this.attackPlayer();
		},
		attackPlayer() {
			const attackValue = getRandomValue(8, 15);
			if (this.playerHealth <= 0) {
				this.playerHealth = 0;
			} else if (this.playerHealth - attackValue < 0) {
				this.playerHealth = 0;
			} else {
				this.playerHealth -= attackValue;
			}
		},

		specialAttackMonster() {
			this.currentRound++;
			const attackValue = getRandomValue(10, 25);
			if (this.monsterHealth <= 0) {
				this.monsterHealth = 0;
			} else if (this.monsterHealth - attackValue < 0) {
				this.monsterHealth = 0;
			} else {
				this.monsterHealth -= attackValue;
			}

			this.attackPlayer();
		},
		healPlayer() {
			this.currentRound++;
			const healthValue = getRandomValue(8, 20);
			if (this.playerHealth + healthValue > 100) {
				this.playerHealth = 100;
			} else {
				this.playerHealth += healthValue;
			}
			this.attackPlayer();
		},
		getMatchResults() {
			if (this.playerHealth === 0) {
				alert("You've Lost!");
			} else if (this.monsterHealth === 0) {
				alert("Monster's Lost!");
			} else if (this.monsterHealth === 0 && this.playerHealth === 0) {
				alert("This is a Draw");
			}
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
		shouldUseSpecialAttack() {
			/*It should be executed only passed 3 rounds*/
			return this.currentRound % 3 !== 0;
		},
		getResults() {
			return this.playerHealth === 0 || this.monsterHealth === 0;
		},
	},
});
app.mount("#game");
