import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HelloWorld = () => {
  const [helloWorld, setHelloWorld] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getHelloWorld = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        'http://localhost:3000/api/v1/hello-world',
        {
          conditions: {},
          orderBy: [],
        },
      );
      setHelloWorld(data);
      setError(null);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  useEffect(() => getHelloWorld(), []);

  return (
    <div>
      {error ? (
        <h1>Error</h1>
      ) : loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>{JSON.stringify(helloWorld)}</div>
      )}
    </div>
  );
};

export default HelloWorld;
