import { useState } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });

  function getNewMeme() {
    setMeme({
      topText: "",
      bottomText: "",
      randomImage:
        "https://images.theconversation.com/files/38926/original/5cwx89t4-1389586191.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
    });
  }

  return (
    <main>
      <div className="form">
        <input type="text" className="form--input" placeholder="Top text" />
        <input type="text" className="form--input" placeholder="Bottom text" />
        <button className="form--button" onClick={getNewMeme}>
          Get a new meme image 🖼️
        </button>
      </div>
      <img src={meme.randomImage} className="meme--image" />
    </main>
  );
}
