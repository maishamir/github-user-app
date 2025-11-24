import "./App.scss";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import UserCard from "./components/UserCard/UserCard";
import { useState, useEffect } from "react";
import axios from "axios";
import Toggle from "./components/Toggle/Toggle";

const BASE = "https://api.github.com";

function App() {
  const [user, setUser] = useState("maishamir");
  const [userData, setUserData] = useState(null);

  const [isDark, setIsDark] = useState(true);
  const [isErr, setIsErr] = useState(false)

  function handleSearch(userName) {
    setUser(userName);
  }

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await axios.get(`${BASE}/users/${user}`);
        setUserData(response.data);
        setIsErr(false)
      } catch (err) {
        console.error(err);
        setIsErr(true)
      }
    }
    fetchUser();
  }, [user]);

  return (
    <div className="appContainer" data-theme={isDark ? "dark" : "light"}>
      <main className="app">
        <div className="app__header-toggle">
          <Header />
          <Toggle handleChange={() => setIsDark(!isDark)} isChecked={isDark} />
        </div>
        <SearchBar onSearch={handleSearch} userNotFound={isErr} />

        <UserCard userInfo={userData} />
      </main>
    </div>
  );
}

export default App;
