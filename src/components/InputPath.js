import { useState } from "react";
import styles from "./InputPath.module.scss";

function InputPath() {
  const [windowsPath, setWindowsPath] = useState("");
  const [linuxPath, setLinuxPath] = useState("");

  const convertButtonHandler = (event) => {
    event.preventDefault();
    console.log("Test");
  };

  return (
    <div className={styles.input}>
      <div>
        <label>Input Windows Path</label>
        <input type="text" placeholder="Windows path...." />
      </div>
      <div>
        <label>Input Linux Path</label>
        <input type="text" placeholder="Linux path...." />
      </div>
      <button onClick={convertButtonHandler} className={styles.btn}>
        Convert
      </button>
    </div>
  );
}

export default InputPath;
