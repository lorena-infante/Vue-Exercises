<template>
	<section>
		<header><h1>Holandas mai frens</h1></header>
		<ul>
			<new-friend @add-friend="addFriend">
			</new-friend>
			<friend-contact
			v-for = "friend in friends"
			:key = "friend.id"
			:id = "friend.id"
			:name = "friend.name"
			:phone-number= "friend.phone"
			:email-address= "friend.email"
			:is-favorite= "friend.isFavorite"
			@toggle-favorite = "toggleFavoriteStatus"
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
						isFavorite: true,
					},
					{
						id: "jolines",
						name: "Jolines mi pata",
						phone: "98475368",
						email: "jolie@laspatas.com",
						isFavorite: false,
					},
				],
			};
		},
		methods:{
			toggleFavoriteStatus(friendId){
				const identifiedFriend = this.friends.find(friend => friend.id === friendId);
				identifiedFriend.isFavorite =! identifiedFriend.isFavorite;
			},
			addContact(name,phone,email){
				const newFriendContact = {
					id: new Date().toISOString() ,
					name: name,
					phone: phone,
					email: email,
					isFavorite: false,
				}
				this.friends.push(newFriendContact);
			}
		}

	};
</script>
