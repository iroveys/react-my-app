import "./productList.css";
const products = [
  { id: 1, title: "emad1" },
  { id: 2, title: "emad222" },
  { id: 3, title: "emad3333" },
];

const ProductList = () => {
  return (
    <div>
      {products.map((item) => {
        return <p>{item.title}</p>;
      })}
    </div>
  );
};

export default ProductList;
