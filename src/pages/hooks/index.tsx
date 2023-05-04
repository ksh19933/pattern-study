import React, { useState, useEffect } from "react";

// Hooks가 추가되기 전에 React에서 상태와 생명 주기 함수를 사용하려면 클래스 컴포넌트를 사용해야 했다.
// class MyComponent extends React.Component {
//     /* Adding state and binding custom methods */
//     constructor() {
//         super()
//         this.state = { ... }
//         this.customMethodOne = this.customMethodOne.bind(this)
//         this.customMethodTwo = this.customMethodTwo.bind(this)
//     }
//
//     /* Lifecycle Methods */
//     componentDidMount() { ...}
//     componentWillUnmount() { ... }
//
//     /* Custom methods */
//     customMethodOne() { ... }
//     customMethodTwo() { ... }
//
//     render() { return { ... }}
// }
// class pattern
// export default class Hooks extends React.Component<any, any> {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//       width: 0,
//     };
//   }
//
//   componentDidMount() {
//     this.handleResize();
//     window.addEventListener("resize", this.handleResize);
//   }
//
//   componentWillUnmount() {
//     window.removeEventListener("resize", this.handleResize);
//   }
//
//   increment = () => {
//     this.setState(({ count }) => ({ count: count + 1 }));
//   };
//
//   decrement = () => {
//     this.setState(({ count }) => ({ count: count - 1 }));
//   };
//
//   handleResize = () => {
//     this.setState({ width: window.innerWidth });
//   };
//
//   render() {
//     return (
//       <div className="App">
//         <Count
//           count={this.state.count}
//           increment={this.increment}
//           decrement={this.decrement}
//         />
//         <div id="divider" />
//         <Width width={this.state.width} />
//       </div>
//     );
//   }
// }

function Count({ count, increment, decrement }) {
  return (
    <div className="counter">
      <div className="btns">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <p>Current count: {count}</p>
    </div>
  );
}

export function Width({ width }) {
  return <p>Current width: {width}</p>;
}

function useCounter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return { count, increment, decrement };
}

function useWindowWidth() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.addEventListener("resize", handleResize);
  });

  return width;
}

export default function Hooks() {
  const counter = useCounter();
  const width = useWindowWidth();

  return (
    <div>
      <Count
        count={counter.count}
        increment={counter.increment}
        decrement={counter.decrement}
      />
      <div />
      <Width width={width} />
    </div>
  );
}
