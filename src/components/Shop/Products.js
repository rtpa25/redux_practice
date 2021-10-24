import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  { id: "p1", price: 6, title: "Book1", description: "best book1" },
  { id: "p2", price: 10, title: "Book2", description: "best book2" },
  { id: "p3", price: 4, title: "Book3", description: "best book3" },
  { id: "p4", price: 20, title: "Book4", description: "best book4" },
];

const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
