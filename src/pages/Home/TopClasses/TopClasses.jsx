import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const TopClasses = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("../../../../classes.json")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
        console.log(data); // Move the console.log inside the then block
      });
  }, []);
  const displayClasses = classes.slice(0, 4);

  return (
    <div className="md:px-52 px-4 my-10">
      <h2 className="text-3xl text-center text-white font-semibold my-10 bg-gray-900 mx-56 p-3 rounded-lg glass">Top Classes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {displayClasses.map((classItem) => (
        <Cards key={classItem.id} singleClass={classItem} />
      ))}
      </div>
    </div>
  );
};

export default TopClasses;
