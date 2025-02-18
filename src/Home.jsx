import { useEffect, useState } from "react";
import "./Home.css";
import Header from "./Header";

const Home = () => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://railway.bulletinboard.techtrain.dev/threads",
          { method: "GET" },
        );
        const data = await res.json();
        setThreads(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (threads.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Header />
      <h2>スレッド一覧</h2>
      {console.log(threads)}
      {threads.map((thread) => {
        return (
          <div key={thread.id} className="thread">
            <h3>{thread.title}</h3>
          </div>
        );
      })}
    </>
  );
};

export default Home;
