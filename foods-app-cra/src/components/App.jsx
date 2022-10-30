import { useRef, useState } from 'react';
import { Button, CardDeck, Container } from 'react-bootstrap';

import data from '../models/foods';
import Food from './Food';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [foods, setFoods] = useState(data);
  const buttonAdd = useRef(null);

  const handleClick = () => {
    const food = {
      id: 3,
      name: "Batata",
      image: "imgs/batatafrita.jpg",

    } 
    setFoods([...foods, food]);

    buttonAdd.current.disabled = true;
  };
  return (
    <Container>
      <h1 className="mt-5 text-center">Menu</h1>
      <div className="text-right">
        <Button
          variant="secondary"
          className="rounded-circle mr-4 font-weight-bold"
          onClick={handleClick}
          ref={buttonAdd}
        >
          +
        </Button>
      </div>
      <CardDeck className="my-3">
        {foods.map((food) => (
          <Food food={food} key={food.id} />
        ))}
      </CardDeck>
    </Container>
  );
}

export default App;
