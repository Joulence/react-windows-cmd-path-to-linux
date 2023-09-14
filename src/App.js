import styles from "./App.module.scss";
import InputPath from "./components/InputPath";

function App() {
  return (
    <div className={styles.container}>
      <section>
        <h2>Windows to Linux Path Converter</h2>
        <InputPath />
      </section>
    </div>
  );
}

export default App;
