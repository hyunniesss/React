import Button from "./Button";
import styles from "./App.module.css";
import UseEffect from "./UseEffect";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome back!!!</h1>
      <Button text={"Continue"} />
      <UseEffect />
    </div>
  );
}

export default App;
