import { useState } from "react";
import styles from "./InputPath.module.scss";

function InputPath() {
  const [windowsPath, setWindowsPath] = useState("");
  const [linuxPath, setLinuxPath] = useState("");

  const convertButtonHandler = (event) => {
    event.preventDefault();

    if (linuxPath === "") {
      setLinuxPath(windowsPath.replace(/\//g, "\\"));
    }
    if (windowsPath === "") {
      setWindowsPath(linuxPath.replace(/\\/g, "/"));
    }
  };

  return (
    <div className={styles.input}>
      <div>
        <label>Input Windows Path</label>
        <input
          type="text"
          placeholder="Windows path...."
          onChange={(element) => setWindowsPath(element.target.value)}
          value={windowsPath}
        />
      </div>
      <div>
        <label>Input Linux Path</label>
        <input
          type="text"
          placeholder="Linux path...."
          onChange={(element) => setLinuxPath(element.target.value)}
          value={linuxPath}
        />
      </div>
      <button onClick={convertButtonHandler} className={styles.btn}>
        Convert
      </button>
    </div>
  );
}

export default InputPath;
