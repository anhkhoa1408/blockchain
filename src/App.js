import './App.css';
import SubmitBook from '../src/components/SubmitBook'
import BookInfo from '../src/components/BookInfo'
import MarketPlace from '../src/components/MarketPlace'
import Header from '../src/components/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Router>
            <Header />
            <Switch>
                <Route path="/PublishBook">
                    <SubmitBook />
                </Route>

                <Route path="/AboutUs">
                    <BookInfo />
                </Route>

                <Route path="/NFTBookLibrary">
                    <MarketPlace />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
