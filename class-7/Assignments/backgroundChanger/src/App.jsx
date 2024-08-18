import { useState } from "react";
import "./App.css";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("white");

  const colors = ["Yellow", "Black", "Purple", "Green", "Blue", "Default"];

  const handleColor = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div className="container"
      style={{
        backgroundColor: backgroundColor,
        height: "100vh",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
      }}
    >
      {colors.map((colour, index) => {
        return (
        <button 
        key={index} 
        onClick={() => { handleColor(colour === "Default" ? "White" : colour) }}
        style={{
          margin: "0 5px",
          padding: "10px 20px",
          borderRadius: "10px",
          backgroundColor: colour.toLowerCase(),
          color: "white",
          fontWeight: "bold",
          boxShadow: "2px 2px 10px rgba(0,0,0,0.3)",
          cursor: "pointer"
        }}> {colour}</button>
        )
      })}
    </div>
  );
}

export default App;
