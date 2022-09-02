import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import RegisterPage from "./views/RegisterPage";
import LoginPage from "./views/LoginPage";
import UserSession from "./context/UserSession";
import {useState} from "react";
import PirateCrew from "./views/PirateCrew";
import CreatePirate from "./views/CreatePirate";
import ShowPirate from "./views/ShowPirate";

function App() {
  const [user,setUser] = useState(null);
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* Context to keep track the user session */}
          <UserSession.Provider value={{user,setUser}}>
            <Route exact path={"/login"}>
              <LoginPage />
            </Route>
            <Route exact path={"/register"}>
              <RegisterPage />
            </Route>
            <Route exact path={"/pirates"}>
              <PirateCrew />
            </Route>
            <Route exact path={"/pirate/new"}>
              <CreatePirate />
            </Route>
            <Route exact path={"/pirate/show/:_id"}>
              <ShowPirate />
            </Route>
            <Route exact path={"/"}>
              <Redirect to={"/pirates"}/>
            </Route>
          </UserSession.Provider>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
