import { React, useState, useEffect } from "react";
import "./tindercards.css";
import TinderCard from "react-tinder-card";
import axios from "./axios";
import database from "./firebase";
function Tindercards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const unsubscribe = database
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );
    return () => {
      //this is cleanup...
      unsubscribe();
    };
  }, []); // will run once when the component loads and never again
  console.log(people);
  const swiped = (direction, name) => {
    console.log("You just swiped " + direction + name);
  };
  const outOfFrame = (name) => {
    console.log(name + " just left the screen");
  };
  return (
    <div className="tindercards__main">
      <div className="tindercards__container">
        {people.map((x) => (
          <TinderCard
            className="swipe"
            key={x.name}
            preventSwipe={["up", "down"]}
            onSwipe={(s) => swiped(s, x.name)}
            onCardLeftScreen={() => outOfFrame(x.name)}
          >
            <div style={{ backgroundImage: `url(${x.url})` }} className="card">
              <h3>{x.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default Tindercards;
