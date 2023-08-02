import './App.css';

const Businesses = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddingtom Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {BusinessList()}
      </header>
    </div>
  );
}

function BusinessList() {
  return (
    <div>
      {Business()}
      {Business()}
    </div>
  )
}

function Business() {
  return (
    <div className="Business">
      <img
        className="image"
        src={Businesses.imageSrc}
        alt="business"
      />
      <h3 className="name">{Businesses.name}</h3>
      <div className="business-data">
        <p className="address">{Businesses.address}</p>
        <p className="city">{Businesses.city}</p>
        <p className="state">{Businesses.state}</p>
        <p className="zipcode">{Businesses.zipCode}</p>
        <p className="category">{Businesses.category}</p>
        <p className="rating">{Businesses.rating}</p>
        <p className="review-count">{Businesses.reviewCount}</p>
      </div>
    </div>
  )
}

export default App;