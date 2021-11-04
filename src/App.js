import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Shop from './components/pages/shop/Shop';
import NotFound from './components/NotFound';
import SingleProduct from './components/single-product/SingleProduct';
import './App.scss';

function App() {
  // do 25 AddProduct
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shop} />
        <Route path='/product/:id' component={SingleProduct} />
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
