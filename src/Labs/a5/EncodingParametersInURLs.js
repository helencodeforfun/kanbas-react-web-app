import React, { useState, useEffect } from "react";
import axios from "axios";

function EncodingParametersInURLs() {
  const [a, setA] = useState(34);
  const [b, setB] = useState(23);
  const [welcome, setWelcome] = useState("");
  const [result, setResult] = useState(0);

  const fetchSum = async (a, b) => {
    try {
      const response = await axios.get(
        `https://kanbas-node-server-app-zi6l.onrender.com/a5/add/${a}/${b}`
      );
      setResult(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchSubtraction = async (a, b) => {
    try {
      const response = await axios.get(
        `https://kanbas-node-server-app-zi6l.onrender.com/a5/subtract/${a}/${b}`
      );
      setResult(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchWelcome = async () => {
    try {
      const response = await axios.get(
        "https://kanbas-node-server-app-zi6l.onrender.com/a5/welcome"
      );
      setWelcome(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchWelcome();
  }, []);

  return (
    <div>
      <h3>Encoding Parameters in URLs</h3>
      <h1>Integrating React with APIs</h1>
      <h5>Fetching Welcome</h5>
      <h6>{welcome}</h6>

      <h4>Calculator</h4>
      <input
        onChange={(e) => setA(e.target.value)}
        className="form-control"
        type="number"
        value={a}
      />
      <input
        onChange={(e) => setB(e.target.value)}
        className="form-control"
        type="number"
        value={b}
      />
      <input
        value={result}
        className="form-control mb-2"
        type="number"
        readOnly
      />
      <h3>Fetch Result</h3>
      <button
        onClick={() => fetchSum(a, b)}
        className="btn btn-primary mb-2 w-100"
      >
        Fetch Sum of {a} + {b}
      </button>
      <button
        onClick={() => fetchSubtraction(a, b)}
        className="btn btn-danger mb-2 w-100"
      >
        Fetch Subtraction of {a} - {b}
      </button>
      <h3>Path Parameters</h3>
      <a
        href={`https://kanbas-node-server-app-zi6l.onrender.com/a5/add/${a}/${b}`}
        className="btn btn-primary"
      >
        Add ${a} + ${b}
      </a>
      <a
        href={`https://kanbas-node-server-app-zi6l.onrender.com/a5/subtract/${a}/${b}`}
        className="btn btn-danger"
      >
        Subtract ${a} - ${b}
      </a>
      <a
        href={`https://kanbas-node-server-app-zi6l.onrender.com/a5/calculator?operation=add&a=${a}&b=${b}`}
        className="btn btn-primary"
      >
        Add ${a} - ${b}
      </a>
      <a
        href={`https://kanbas-node-server-app-zi6l.onrender.com/a5/calculator?operation=subtract&a=${a}&b=${b}`}
        className="btn btn-danger"
      >
        Subtract ${a} - ${b}
      </a>
    </div>
  );
}

export default EncodingParametersInURLs;