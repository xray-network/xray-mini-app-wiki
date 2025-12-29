import style from "./style.module.css";

const Test = () => {
  return (
    <div>
      <div className="btn">1</div>
      <div className={style.button}>2</div>
    </div>
  );
};

export default Test;
