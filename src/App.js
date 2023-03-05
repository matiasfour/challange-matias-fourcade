import { useEffect, useState } from 'react';
import './styles/app.css';
import Products from './components/Products';
import SideBar from './components/SideBar';
import { SECRET_KEY, URL } from './constants';

function App() {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filterTypes, setFilterTypes] = useState({});
  const [priceRange, setPriceRange] = useState(500);
  const [sortResults, setSortResults] = useState("A-Z");


  const getData = async () => {
      const response = await fetch(URL, {headers: {secretKey: SECRET_KEY}});
      const data = await response.json();

      const noDuplicates = Object.values(data.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
      }, {}));

      const productTypesValues = {};
      
      const productsWithVariants = noDuplicates.flatMap(product => {

        if (!productTypesValues.hasOwnProperty(product.product_type)) {
          productTypesValues[product.product_type] = true;
        }  

        return product.variants.map(variant => ({
          title: product.title,
          product_type: product.product_type,
          image: product.image,
          quantitySold: product.quantitySold,
          variantTitle: variant.title,
          price: variant.price
        }));
      });


      setFilterTypes({...productTypesValues});
      setProducts(productsWithVariants);
      setFilteredProducts(productsWithVariants);
  };
  
  const filterData = () => {
    if(filterTypes.length !== 0) {
      const filtered = products.filter((prod) => filterTypes[prod.product_type] === true && prod.price <= priceRange );
      setFilteredProducts(filtered);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    filterData();
  }, [filterTypes, priceRange]);


  return (
    <div className="App">
      <div className='header'>
          <h1>Welcome to the Mum's deal page</h1>
      </div>
      <div className='main-container'>
        <SideBar filterTypes={filterTypes} setFilterTypes={setFilterTypes} priceRange={priceRange} setPriceRange={setPriceRange} />
        <Products products={filteredProducts} setSortResults={setSortResults} sortResults={sortResults}/>
      </div>
    </div>
  );
}

export default App;
