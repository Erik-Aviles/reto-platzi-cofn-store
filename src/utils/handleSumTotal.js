import { useContext } from 'react';
import AddContext from '../context/AppContext';

export default function handleSumTotal() {
  const {
    state: { cart },
  } = useContext(AddContext);

  const reducer = (accumulator, currentValue) =>
    accumulator + currentValue.price;
  const sum = cart.reduce(reducer, 0);

  return sum;
}
