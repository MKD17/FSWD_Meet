import React, { useState } from "react";
const StdDisp = () => {
  const list = [
    {
      name: "PQR",
      marks: 85,
    },
    {
      name: "Ayush Naik",
      marks: 98,
    },
    {
      name: "XYZ",
      marks: 30,
    },
  ];

  const [llist, setlist] = useState(list);
  return (
    <>
      <h1>Student whoes marks are above 35:-</h1>
      {llist.map((list) => {
        if (list.marks > 35) return <div>{list.name}</div>;
      })}
    </>
  );
};

export default StdDisp;
