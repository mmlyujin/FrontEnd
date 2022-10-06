function Company(props) {
  return (
    <div>
      <h1>welcome {props.title}</h1>
      <p>{props.contents}</p>
    </div>
  );
}

export default Company;
