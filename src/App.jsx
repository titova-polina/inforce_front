import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProductList } from "./components/productList";
import { GlobalStyle } from "./styledApp";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ProductList />
      <GlobalStyle />
    </>
  );
}

export default App;
