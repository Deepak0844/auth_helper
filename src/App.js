import "./App.css";
import { PasswordVerify } from "./resetPassword";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Switch, Route } from "react-router-dom";
import { PasswordChangedMsg } from "./PasswordChangedMsg";
import { Activate } from "./accountActivation";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Switch>
        <Route exact path="/forgot-password/verify/:token" component={PasswordVerify} />
        <Route exact path="/password-changed-successfully" component={PasswordChangedMsg} />
        <Route exact path="/account-verification/:token" component={Activate} />
      </Switch>
    </div>
  );
}

export default App;
