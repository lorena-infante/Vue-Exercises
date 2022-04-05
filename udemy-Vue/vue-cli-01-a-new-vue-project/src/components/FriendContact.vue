<template>
  <li>
    <h2>{{ name }} {{ friendIsFavorite === '1' ? '(Favorite)' : '' }}</h2>
    <button @click="toggleFavorite">Toggle Favorite </button> 
    <br>
    <br>
    <button @click="toggleDetails">{{detailsAreVisible ? 'Hide': 'Show'}} Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone: </strong> {{ phoneNumber }} </li>
      <li><strong>Email: </strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default{
	props:[
			'name',
			'phoneNumber',
			'emailAddress',
      'isFavorite'
	],
  data(){
    return{
      detailsAreVisible: false,
      friend: {
						id: "manuel",
						name: "Manolo Lorenzo",
						phone: "1234567",
						email: "lorenzo@lorenzini.com",
					},
          //Aquí se recibe como valor inicial el que se tenga asignado dentro del app.vue para esta prop
      friendIsFavorite: this.isFavorite,
    };
  },
  methods: {
    toggleDetails(){
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    //Las props NO se pueden cambiar a través de métodos. Violan el principio de "unidirectional data flow". para eso se debe crear otro elemento en la data y con esa data sí hacer el cambio en el método. PERO solo sí es necesario.
    
    /* toggleFavorite(){
      if(this.isFavorite === '1'){
        this.isFavorite = '0';
      }else {
        this.isFavorite = '1';
      }
    }, */
    //usándolo como data, sí se puede utilizar y cambiar el valor.
    toggleFavorite(){
      if(this.friendIsFavorite === '1'){
        this.friendIsFavorite = '0';
      }else {
        this.friendIsFavorite = '1';
      }
    },
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}


</style>