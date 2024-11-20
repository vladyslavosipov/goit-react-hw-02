import React from "react";
import s from "./Options.module.css";

function Options({ update, total }) {
  return (
    <div className={s.options}>
      <button className={s.button} onClick={() => update("good")}>
        Good
      </button>
      <button className={s.button} onClick={() => update("neutral")}>
        Neutral
      </button>
      <button className={s.button} onClick={() => update("bad")}>
        Bad
      </button>
      {total > 0 && (
        <button className={s.button} onClick={() => update("reset")}>
          Reset
        </button>
      )}
    </div>
  );
}

export default Options;