export default {

  loginUser(state, payload) {
    state.isLoggedIn = payload.userIsLoggedIn;
    console.log(`state.isLoggedIn: ${payload.userIsLoggedIn}`);
  },
  logoutUser(state, payload) {
    state.isLoggedIn = payload.userIsLoggedIn;
    console.log(`state.isLoggedIn: ${payload.userIsLoggedIn}`);

  }
}