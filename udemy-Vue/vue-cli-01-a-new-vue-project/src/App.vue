<template>
	<section>
		<h2>Holandas mai frens</h2>
		<ul>
			<friend-contact> </friend-contact>
			<friend-contact> </friend-contact>
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
