function Buttons() {
  let str = "Busan it";
  function press() {
    //매개변수 X
    alert("클릭 되었습니다.");
  }

  function clicked(str) {
    //매개변수 O
    alert(str);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <button className="btn01" onClick={press}>
        click :D
      </button>
      <p></p>
      <button className="btn01" onClick={() => clicked(str)}>
        click :D :0
      </button>
    </div>
  );
}

export default Buttons;
