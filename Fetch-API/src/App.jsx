import { useEffect, useState } from "react";
import "./App.css";
import { getPosts, getRandomUser } from "./api";
import PostCard from "./components/PostCard";
import UserCard from "./components/UserCard";

function App() {
  const [data, setData] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getPosts().then((post) => setData(post));
  }, []);

  useEffect(() => {
    getRandomUser().then((user) => setUserData(user.results[0]));
  }, []);

  const refresh = () => {
    getRandomUser().then((user) => setUserData(user.results[0]));
  }

  return (
    <div>
      {userData && <UserCard data={userData} />}
      <button onClick={refresh}>Refresh Here</button>
      {data ? (
        data.map((e) => <PostCard title={e.title} body={e.body} />)
      ) : (
        <p>No Available Data</p>
      )}
    </div>
  );
}

export default App;
