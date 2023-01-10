import React from "react";

const Accordion = ({ items }) => {
  const renderedItem = items.map((item) => {
    return (
      <div className="" key={item.id}>
        <div>{item.label}</div>
        <div>{item.content}</div>
      </div>
    );
  });
  return <div>{renderedItem}</div>;
};

export default Accordion;
