import './App.css';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import Navbar from './containers/NavBar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ContactContainer from './containers/ContactContainer/ContactContainer';

function App() {
	return (
		<>
		<Router>
			<Navbar/>		
			<Switch>
                <Route exact path="/">
                    <ItemListContainer message="Las mejores computadoras portátiles de Argentina!"/>
                </Route>
				<Route path="/category/:cateId"> 
					<ItemListContainer message="Las mejores computadoras portátiles de Argentina!"/>
				</Route>
                <Route exact path="/detail/:prodId" component={ItemDetailContainer} />
				<Route path="/contact" component={ContactContainer}/>
            </Switch>
		</Router> 
		</>
	);
}

export default App;
