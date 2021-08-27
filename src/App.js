import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainHeader from "./Component/main_header.component";
import MainContent from './Component/mian_content.component'
import Footer from "./Component/footer.component";
import CropRecommendation from "./Component/cropRecommendation.component";
import Profit from "./Component/profit.component";
import Information from "./Component/information.component";

function App() {
  return (
    <div>
      <Router>
      <Switch>
        <Route exact path="/">
        <div className="h-full">
          <MainHeader></MainHeader>
          <MainContent></MainContent>
          <Information></Information>
          <Footer></Footer>
        </div>
        </Route>
        <Route exact path="/recommendation">
            <CropRecommendation></CropRecommendation>
        </Route>
        <Route exact path="/profit">
            <Profit></Profit>
        </Route>
      </Switch>
      
    </Router>
    </div>
  );
}

export default App;
