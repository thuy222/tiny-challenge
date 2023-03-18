import { CredentialResponse, GoogleLogin } from "@react-oauth/google";

const Login = () => {
  const loginSuccess = (props: CredentialResponse) => {
    alert("Login with Google Account Successfully");
    console.log(props.clientId);
  };
  const loginFailed = () => {
    alert("Login with Google Account Failed");
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h3>Login With GG Account</h3>
      <div style={{ width: "300px", alignItems: "center" }}>
        <GoogleLogin
          onSuccess={(credentialResponse) => loginSuccess(credentialResponse)}
          onError={loginFailed}
        />
      </div>
      ;
    </div>
  );
};

export default Login;
