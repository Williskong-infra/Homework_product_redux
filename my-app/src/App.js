import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import Product from './components/Product';
import {createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';



function App() {

  const route = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route index element={<Dashboard />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
    </Route>

  ))

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
