import React, { useState } from "react";

export const ChatGptApp = () => {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    const value = e.target.innerText;
    if (value === "c") {
      setResult("");
    } else if (value === "=") {
      try {
        setResult(eval(result).toString());
      } catch (e) {
        setResult("error");
      }
    } else {
      setResult(result + value);
    }
  };

  return (
    <div className="container">
      <input type="text" id="result" value={result} />
      <br />
      <button onClick={handleClick}>1</button>
      <button onClick={handleClick}>2</button>
      <button onClick={handleClick}>3</button>
      <button onClick={handleClick}>+</button>
      <br />
      <button onClick={handleClick}>4</button>
      <button onClick={handleClick}>5</button>
      <button onClick={handleClick}>6</button>
      <button onClick={handleClick}>-</button>
      <br />
      <button onClick={handleClick}>7</button>
      <button onClick={handleClick}>8</button>
      <button onClick={handleClick}>9</button>
      <button onClick={handleClick}>*</button>
      <br />
      <button onClick={handleClick}>c</button>
      <button onClick={handleClick}>0</button>
      <button onClick={handleClick}>=</button>
      <button onClick={handleClick}>/</button>
    </div>
  );
};

export default ChatGptApp;
