import React, { useState } from 'react';
import AddItem from './components/AddItem';
import ItemList from './components/ItemList';
import Welcome from './components/Welcome';
import Counter from './components/Counter';
import Button from './components/Button';
import NameList from './components/NameList';
import FetchDataComponent from './components/FetchDataComponent';
import ProfileCard from './components/ProfileCard/ProfileCard';
import ProductCard from './components/ProductCard/ProductCard';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const [count, setCount] = useState(2);

  function decrementCount() {
    setCount(count - 1);
  }
  
  function incrementCount() {
    setCount(count + 1);
  }
  return (
    <div>
      {/* <h1>My Crud App</h1>
      <AddItem addItem={addItem} />
      <ItemList items={items} deleteItem={deleteItem} /> */}
      {/* <Welcome name="Paul"/>
      <Counter />
      <Button />
      <NameList />
      <FetchDataComponent /> */}
      <h1>My Team</h1>
      <ProfileCard 
        name="Paul Sales"
        age={22}
        location="Pangasinan"
        bio="Backend developer trying to do some frontend"
      />
      <h1>Our Product</h1>
      <ProductCard
        name="iPhone 17"
        description="Newest iPhone"
        price={9999}
      />
    </div>
  )
}

export default App;
