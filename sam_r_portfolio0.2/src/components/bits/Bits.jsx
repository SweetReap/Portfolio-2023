export default function Heading(props) {
  const charArr = [...props.str];
  return (
    <div className="name">
      {charArr.map((char, index) => (
        <span key={index}>{char}</span>
      ))}
    </div>
  );
}
