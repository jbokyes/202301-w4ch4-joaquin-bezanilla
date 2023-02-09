import { Info } from "./core/components/info/info";
import { Keyboard } from "./core/components/keyboard/keyboard";
import { Actions } from "./core/components/actions/actions";

function App() {
  return (
    <body>
      <div className="container">
        <main className="phone">
          <Info></Info>
          <Keyboard></Keyboard>
          <Actions></Actions>
        </main>
      </div>
    </body>
  );
}

export default App;
