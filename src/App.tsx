import { Keyboard } from "./core/components/keyboard/keyboard";
import { Actions } from "./core/components/actions/actions";

function App() {
  return (
    <div className="container">
      {/* <Info></Info> */}
      <main className="phone">
        <Keyboard></Keyboard>
        <Actions></Actions>
      </main>
    </div>
  );
}

export default App;
