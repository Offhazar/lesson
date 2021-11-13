import React, { useEffect, useState } from 'react';
import Card from './Card';
import './FetchGet.css';

function FetchGet(props) {
  const [cardEffect, setCardEffect] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
      .then((response) => response.json())
      .then((json) => setCardEffect(json));
  }, []);

  return (
    <div className="block">
      {cardEffect.map((item) => {
        return (
          <Card>
            <div>
              <div className="block2">
                <h1>{item.albumId}</h1>
                <p>{item.id}</p>
              </div>
              <span>{item.title}</span>
              <div className="block3">
                <h6>{item.url}</h6>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}

export default FetchGet;
