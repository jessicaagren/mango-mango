import "./App.scss";
import FormList from "./components/FormList/FormList";
import List from "./components/List/List";
import { NewListContextProvider } from "./contexts/NewListContext";

function App() {
	return (
		<NewListContextProvider>
			<h1>🥭 mango-mango 🥭</h1>
			<p>a demo for students</p>
			<FormList />
			<List />
		</NewListContextProvider>
	);
}

export default App;

/*

App = visar allt
FormList = lägger till en sträng till listan med strängar
List = visar en lista med strängar (redigera, ta bort)

men om vi har fler komponenter? fler funktioner? större träd...
MetaData = 	en komponent som visar antal strängar, 
			antal strängar som börjar på en viss bokstav

vi behöver state! vi behöver veta

	- en lista med strängar

App
	List
	FormList

App
	FormList
		List

App
	List
		FormList
*/
