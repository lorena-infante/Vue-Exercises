/*Named export {}
Default export: only the name of the variable */
import { createApp } from "vue";

/* when the import is default here, the name of the variable isn't embraced by curly braces. Instead it is called by its name.
In App.vue it must be declared as an "export default" variable. */
import App from "./App.vue";
import FriendContact from "./components/FriendContact.vue";

const app = createApp(App);
app.component("friend-contact", FriendContact);
app.mount("#app");
