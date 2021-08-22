import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainHeader from "./Component/main_header.component";
import MainContent from './Component/mian_content.component'
import Footer from "./Component/footer.component";
import CropRecommendation from "./Component/cropRecommendation.component";
import Profit from "./Component/profit.component";
import Card from "./Component/cropCard.component";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="h-full">
            <MainHeader></MainHeader>
            <MainContent></MainContent>
            <Footer></Footer>
          </div>
        </Route>
        <Route exact path="/recommendation">
          <CropRecommendation></CropRecommendation>
        </Route>
        <Route exact path="/profit">
          <Profit></Profit>
        </Route>
        <Route exact path="/card">
          <Card></Card>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
