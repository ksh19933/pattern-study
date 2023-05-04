// import React from "react";
//
// export function DogImages({ dogs }) {
//   return dogs.map((dog, i) => <img src={dog} key={i} alt="Dog" />);
// }
// export default class DogImagesContainer extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       dogs: [],
//     };
//   }
//
//   componentDidMount() {
//     fetch("https://dog.ceo/api/breed/labrador/images/random/6")
//       .then((res) => res.json())
//       .then(({ message }) => this.setState({ dogs: message }));
//   }
//
//   render() {
//     return <DogImages dogs={this.state.dogs} />;
//   }
// }
import { useEffect, useState } from "react";

function useDogImages() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breed/labrador/images/random/6")
      .then((res) => res.json())
      .then(({ message }) => setDogs(message));
  }, []);

  return dogs;
}

export default function DogImages() {
  const dogs = useDogImages();

  return dogs.map((dog, i) => <img src={dog} key={i} alt="Dog" />);
}
