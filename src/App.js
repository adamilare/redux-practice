import { useEffect } from 'react';
import CartContainer from './components/CartContainer';
import NavBar from './components/NavBar';
import { calculateTotals, getCartItems } from './features/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './components/Modal';

function App() {
  const dispatch = useDispatch();
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);

  useEffect(() => {
    dispatch(calculateTotals()); // eslint-disable-next-line
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems()); // eslint-disable-next-line
  }, []);

  if (isLoading)
    return (
      <div className="loading">
        <h1>loading ...</h1>
      </div>
    );

  return (
    <main>
      {isOpen && <Modal />}
      <NavBar />
      <CartContainer />
    </main>
  );
}

export default App;
