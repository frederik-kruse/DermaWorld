import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import forside from "./pages/Frontpage/Frontpage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">

        {/* Header of all sides */}
        <Header />

        {/*Switch to change what side you are on */}
        <Switch>
          <Route path="/" exact component={forside} /> {/*FrontPage of the website */}
          <Route path="/404" component={PageNotFound} />
          <Redirect to="/404" />
        </Switch>

        {/* Footer for all sides */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
