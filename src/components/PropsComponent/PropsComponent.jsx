export default function PropsComponent(props) {
  return (
    <div>
      <h3>Title:{props.title}</h3>
      <h3>Price:{props.price}</h3>
    </div>
  );
}
