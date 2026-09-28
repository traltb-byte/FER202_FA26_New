import ProductInfo from './ProductInfo'
import './App.css'

function App() {
 

  return (
    <>
      <ProductInfo name="Product A" price={100} tags={['tag1', 'tag2']} avatar="images/1.jpg" />
      <ProductInfo name="Product B" price={200} tags={['tag2', 'tag4']} avatar="images/2.jpg" />
    </>
  )
}

export default App
