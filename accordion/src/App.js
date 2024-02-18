import { useState } from "react";

let arrayOfObjects = [
  {
    title: "Object 1",
    text: "This is the text for Object 1.",
  },
  {
    title: "Object 2",
    text: "This is the text for Object 2.",
  },
  {
    title: "Object 3",
    text: "This is the text for Object 3.",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={arrayOfObjects} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      TODO
      {data.map((item, index) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          key={index}
          num={index + 1}
          title={item.title}
        >
          {item.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={`item  ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num}` : num}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
