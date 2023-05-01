import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer'; 
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "Cocoa Covered Almonds Unsalted",
    },
    {
      id: 2,
      checked: false,
      item: "Wagyu Beef",
    },
    {
      id: 3,
      checked: false,
      item: "Kosher Salt",
    },
    {
      id: 4,
      checked: false,
      item: "Chocolate Bread"
    },
    {
      id: 5,
      checked: false,
      item: "Sardines"
    }
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? {
      ...item, checked: !item.checked
    }: item);
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }

  const handleDelete = (id) => {
     const listItems = items.filter((item) => item.id !== id);
     setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }
  return (
    <div className="App">
      <Header  title='Groceries'/>
      <Content 
        items = {items}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
      />
      <Footer 
        length= {items.length}
      />
    </div>
  );
}

export default App;