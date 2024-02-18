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
  return (
    <div className="accordion">
      TODO
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          num={index + 1}
          title={item.title}
          text={item.text}
        />
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((current) => !current);
  }

  return (
    <div className={`item  ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num}` : num}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}
