import JtockAuth from "j-tockauth";

const auth = new JtockAuth({
  host: "http://localhost:3000",
  prefixUrl: "/api"
});

const onLogin = async (event, dispatch) => {
  event.preventDefault();
  let message;

  try {
    let resp = await auth.signIn(
      event.target.elements.email.value,
      event.target.elements.password.value
    );
    message = `Wassup ${resp.data.email}`;
    dispatch({
      type: "AUTHENTICATE",
      payload: { authenticate: true, userEmail: resp.data.email }
    });
  } catch (error) {
    message = error.response.data.errors[0];
  }
};

export { auth, onLogin };
