// 회사이름을 메인에 표시하는 컴포넌트
import Company from "./components/Company";
import Copyright from "./components/Footer";

function App() {
  return (
    <main>
      {/* props :데이터 전달 -> 받는 쪽에서는 매개변수로 props 또는 {변수명} */}
      <Company title={"NodeJS"} contents={"ServerSide/FrontEnd"} />
      <Copyright company={"Seoul it academy"}></Copyright>
    </main>
  );
}

export default App;
