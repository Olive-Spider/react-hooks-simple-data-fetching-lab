// create your App component here
import React, {useState, useEffect} from "react";

function App() {
    const [randomDog, setRandomDog] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
          .then((response) => response.json())
          .then((data) => {
            setRandomDog(data.message);
            setIsLoaded(true);
          });
      }, []);

      if (!isLoaded) return <p>Loading...</p>;

      return <img src={randomDog} alt="A Random Dog" />
}

export default App;
