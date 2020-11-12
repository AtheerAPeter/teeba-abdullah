import Card from "../components/card";
import { useEffect, useState } from "react";
const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://makeup-api.herokuapp.com/api/v1/products.json")
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  return (
    <main>
      <div className="container">
        {data.map((e) => {
          console.log(e);
          return (
            <Card
              image={e.image_link}
              title={e.name}
              description={e.description}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Home;
