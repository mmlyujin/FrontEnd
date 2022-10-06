function Header() {
  return (
    <div
      style={{
        marginTop: "50px",
        borderRadius: "5px",
        border: "1px solid #ffc2c2",
        padding: "10px",
      }}
    >
      <h1>header</h1>
    </div>
  );
}

function Main() {
  return (
    <div style={{ backgroundColor: "#ffc2c2" }}>
      <p>hihihi</p>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <footer>foooooot</footer>
    </div>
  );
}

export { Header, Main, Footer };
