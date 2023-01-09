import "./Array.css";
const arrayOfData = ["First Name", "Second Name", "Email", "ID"];
export default function ComponentArray() {
  return (
    <div className="array">
      {arrayOfData.map((element, index) => {
        <li key={index}>{element}</li>;
      })}
    </div>
  );
}
