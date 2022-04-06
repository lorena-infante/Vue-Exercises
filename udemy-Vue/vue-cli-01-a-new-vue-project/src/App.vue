<template>
	<section>
		<header><h1>Holandas mai frens</h1></header>
		<ul>
			<friend-contact
			v-for = "friend in friends"
			:key = "friend.id"
			:name = "friend.name"
			:phone-number= "friend.phone"
			:email-address= "friend.email"
			:is-favorite="true"
			></friend-contact>
		</ul>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				friends: [
					{
						id: "manuel",
						name: "Manolo Lorenzo",
						phone: "1234567",
						email: "lorenzo@lorenzini.com",
					},
					{
						id: "jolines",
						name: "Jolines mi pata",
						phone: "98475368",
						email: "jolie@laspatas.com",
					},
				],
			};
		},
	};
</script>
