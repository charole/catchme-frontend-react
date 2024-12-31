import { TestComponent } from "./components/test-component";
import { TestComponent2 } from "./components/test-component2";

function App() {
  console.log("app이 재호출되었습니다.");
  return (
    <div className="App">
      <TestComponent />
      <TestComponent2 />
    </div>
  );
}

export default App;
