//Khai báo component ProductInfo chứa thông tin sản phẩm: name, price, tags
function ProductInfo({ name, price, tags, avatar }) {
  return (
    <div>
        <h2>{name}</h2>
        <p>Price: {price}</p>
        <p>Tags: {tags.join(', ')}</p>
        <img src={avatar} alt={name} width={150} />
    </div>
  );
}   
export default ProductInfo;