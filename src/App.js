import React from "react";
// import Admin from "./pages/Admin";
// import SignIn from "./pages/Admin/SignIn";
// import Home from "./pages/Home";
// import Contact from "./pages/Contact";
import {
  Switch,
  Route,
  // Link,
  // BrowserRouter as Router
  HashRouter as Router
} from "react-router-dom";
import routes from "./config/routes";
// import AdminHome from "./pages/Admin";
import AuthProvider from "./providers/AuthProvider";

import "./App.scss";

function App() {
  return (
    // <div className="app">
      <AuthProvider>
        <Router>
            {/* <Route path="/admin" exact={true} component={AdminHome} /> */}
          <Switch>
            {routes.map((route, index) => (
            <RouteWithSubRoutes key={index} {...route} />
            ))}
          </Switch>
        </Router>
      </AuthProvider>
    //   {/* <h1> Web Personal - Client <span>Diego</span></h1>
    //   <h2>Proyecto</h2>
    //   <h2>Estamos en App.js</h2>
    //   <Admin />
    //   <SignIn />
    //   <Home />
    //   <Contact />
    // </div> */}
  )
}

function RouteWithSubRoutes(route) {
  console.log(route)
  return (
    <Route 
      path={route.path}
      exact={route.exact}
      render={props => <route.component routes={route.routes} {...props}/>}
    />
  )
}

export default App;
