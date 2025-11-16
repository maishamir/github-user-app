import "./App.scss";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import UserCard from "./components/UserCard/UserCard";

function App() {
  return (
    <main className="app">
      <Header />
      <SearchBar />
      <UserCard />
    </main>
  );
}

export default App;
