import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from './pages/Navigation/Navigation';
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      	<Router>
        	<Routes>
				<Route path = "/" element = {(
					<>
					<Navigation></Navigation>
					<Home></Home>
					</>
				)}>
				</Route>
				<Route exact path = "/home" element = {(
					<>
					<Home></Home>
					</>
				)}></Route>
    		</Routes>
      	</Router>
    </div>
  );
}

export default App;
