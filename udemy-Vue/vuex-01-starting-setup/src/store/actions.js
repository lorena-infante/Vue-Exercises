export default {
  loginUser(context) {
    context.commit('loginUser', { userIsLoggedIn: true });
  },
  logoutUser(context) {
    context.commit('logoutUser', { userIsLoggedIn: false });
  }
}