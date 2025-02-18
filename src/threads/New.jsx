import { Link } from "react-router";
import { useState } from "react";
import "./New.css";
import Header from "../Header";

const New = () => {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };

  const handleSubmit = async () => {
    console.log(title);

    const response = await fetch(
      "https://railway.bulletinboard.techtrain.dev/threads",
      {
        method: "POST",
        body: JSON.stringify({ title: title }),
      },
    );

    if (response.ok) {
      console.log("success");
      return response.json();
    } else if (response.status === 400) {
      console.log("400");
      console.log(response);
      return response.json();
    }
  };
  return (
    <>
      <Header />
      <h2>スレッド新規作成</h2>

      <form onSubmit={() => handleSubmit()}>
        <input
          type="text"
          id="title"
          name="title"
          size="25"
          placeholder="スレッドタイトル"
          required
          onChange={(e) => handleChange(e)}
        />
        <div className="form-navigation">
          <Link to="/">
            <p className="go-top">Topに戻る</p>
          </Link>
          <button type="submit" className="submit">
            作成
          </button>
        </div>
      </form>
    </>
  );
};

export default New;
