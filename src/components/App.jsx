import React, { useState, useRef, useEffect } from "react";
import Card from "./Card";
import axios from "axios";

function createCard(contact) {
  return <Card key={contact.id} info={contact} />;
}

function App() {
  const [employee, setEmployee] = useState([]);
  var [counter, setCounter] = useState(1);
  var [num, setNum] = useState(1);

  const prevButton = useRef();
  const nextButton = useRef();

  useEffect(() => {
    fetchEmployee();
  }, [counter]);

  useEffect(() => {
    if (prevButton.current && nextButton.current) {
      prevButton.current.addEventListener("click", () => {
        setCounter((prevCounter) => {
          if (prevCounter <= 1) return 1;
          return prevCounter - 10;
        });

        setNum((prevNum) => {
          if (prevNum <= 1) return 1;
          return prevNum - 1;
        });
      });

      nextButton.current.addEventListener("click", () => {
        setCounter((prevCounter) => {
          return prevCounter + 10;
        });
        setNum((prevNum) => {
          if (prevNum < 1) return 1;
          return prevNum + 1;
        });
      });
    }
  }, []);

  const fetchEmployee = async () => {
    console.log("start = " + counter);
    let link = "https://api.github.com/users?since=" + counter + "&per_page=10";
    let res = await axios.get(link);
    let data = res.data;
    console.log(data);
    setEmployee(data);
  };

  return (
    <div style={{ height: "100vh", position: "fixed" }}>
      <div style={{ margin: "50px 5px" }}>
        <button
          className="btn"
          id="1"
          ref={prevButton}
          style={{ float: "left" }}
        >
          {"< "}Previous
        </button>
        <span
          style={{ color: "#2C3639", fontSize: "25px", fontWeight: "lighter" }}
        >
          {num}
        </span>
        <button
          className="btn"
          ref={nextButton}
          id="2"
          style={{ float: "right" }}
        >
          Next{" >"}
        </button>
      </div>

      <h1 className="heading">Employee Management Details</h1>
      <div
        style={{
          maxHeight: "35rem",
          overflowY: "auto",
          marginBottom: "10px",
        }}
      >
        {employee.map(createCard)}
      </div>
    </div>
  );
}

export default App;

/*.catch()

await axios.get(url);

async and await in javascript programming

try {
	await axios.get(url);
} catch (e) {
	
}

useState();

useRef();

useEffect();

useEffect(() => {}, []);*/

/* const elementRef1 = useRef();
  const elementRef2 = useRef();*/
/*Learn componentDidMount -> useEffect
    Learn componentDidUpdate -> useEffect*/
