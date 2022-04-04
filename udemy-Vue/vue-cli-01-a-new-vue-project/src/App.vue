<template>
	<section>
		<header><h1>Holandas mai frens</h1></header>
		<ul>
			<friend-contact
			name="Manolo Lorenzo"
			phone-number="1234567"
			email-address="lorenzo@lorenzini.com"
			></friend-contact>
			<friend-contact
			name="Jolines mi pata"
			phone-number="98475368"
			email-address="jolie@laspatas.com"> </friend-contact>
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
