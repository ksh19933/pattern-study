import singletonCounter from "../../../pattern/singleton/counter";
import SuperCounter from "../../../pattern/singleton/superCounter";

const counter = new SuperCounter();

counter.increment();
counter.increment();
counter.increment();

console.log("Counter in counter.js: ", singletonCounter.getCounter());

const Singleton = () => {
  const onClickHandler = (color: string) => {
    singletonCounter.increment();
    console.log(`${color} button clicked: ${singletonCounter.getCounter()}`);
  };
  return (
    <div className="flex gap-[20px]">
      <button className={"bg-red-500"} onClick={() => onClickHandler("red")}>
        Red button
      </button>
      <button className={"bg-blue-500"} onClick={() => onClickHandler("blue")}>
        Blue button
      </button>
    </div>
  );
};

export default Singleton;
