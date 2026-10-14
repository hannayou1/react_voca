import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome';
import styles from "./component/App.module.css"
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Empty from './component/Empty';


function App() {
  return (
	<BrowserRouter>
		<div className="App">
			<Header/>
			<Switch>
				<Route exact path='/'>
					<DayList/>
				</Route>
				
				<Route path='/day/:day'>
					<Day/>
				</Route>

				<Route>
					<Empty/>
				</Route>
			</Switch>

		</div>
	</BrowserRouter>
  
  );
}

export default App;
