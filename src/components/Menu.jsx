import Pizza from "./Pizza";

export default function Menu({ items = [], ...args }) {
  console.log(items);
  return (
    <ul>
      {items &&
        items.map(({ title, desc, img }) => {
          return (
            <li>
              <Pizza title={title} desc={desc} img={img} />
            </li>
          );
        })}
    </ul>
  );
}
