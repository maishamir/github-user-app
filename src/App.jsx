import "./App.scss";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import UserCard from "./components/UserCard/UserCard";
import { useState, useEffect } from "react";
import axios from "axios";

const BASE = "https://api.github.com";

function App() {
  const [user, setUser] = useState("maishamir");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await axios.get(`${BASE}/users/${user}`);
        setUserData(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchUser();
  }, [user]);

  // console.log(userData.login)

  return (
    <main className="app">
      <Header />
      <SearchBar />
      <UserCard userInfo={userData} />
    </main>
  );
}

export default App;
