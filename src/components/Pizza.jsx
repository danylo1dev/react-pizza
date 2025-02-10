export default function Pizza({ title, desc, img }) {
  return (
    <div className="pizza-cart">
      <img className="pizza-cart-img " src={img} alt="" />
      <div>
        <h2 className="pizza-cart-title ">{title}</h2>
        <p className="pizza-cart-desc">{desc}</p>
      </div>
    </div>
  );
}
