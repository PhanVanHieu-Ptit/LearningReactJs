import { useState } from "react";

const reactQuestions = [
  {
    id: 1,
    question: "What is ReactJS?",
    answer:
      "ReactJS is a JavaScript library for building user interfaces, developed and maintained by Facebook. It is used for creating interactive and dynamic user interfaces for web applications.",
  },
  {
    id: 2,
    question: "What is JSX in React?",
    answer:
      "JSX (JavaScript XML) is a syntax extension for JavaScript recommended by React. It allows you to write HTML elements and components in a syntax that looks similar to XML or HTML. JSX makes it easier to write and visualize the UI components in your React applications.",
  },
  {
    id: 3,
    question: "What is a component in React?",
    answer:
      "In React, a component is a reusable and independent piece of code that encapsulates a part of the user interface. Components can be either functional or class-based, and they are the building blocks of a React application.",
  },
  {
    id: 4,
    question: "What is the virtual DOM in React?",
    answer:
      "The virtual DOM (Document Object Model) is a concept in React that represents a lightweight copy of the actual DOM. React uses the virtual DOM to optimize the rendering process by updating only the parts of the actual DOM that have changed, rather than re-rendering the entire DOM.",
  },
  {
    id: 5,
    question: "Explain state in React.",
    answer:
      "State in React is a data structure that allows components to keep track of their own data. It is mutable and can be updated by using the `setState` method. State changes trigger re-rendering of the component, allowing the UI to reflect the updated data.",
  },
  {
    id: 6,
    question: "What is props in React?",
    answer:
      "Props (short for properties) are a mechanism in React for passing data from a parent component to its child components. Props are read-only and cannot be modified by the child components. They provide a way to make components more dynamic and customizable.",
  },
  {
    id: 7,
    question: "What is the purpose of useEffect in React?",
    answer:
      "The `useEffect` hook in React is used for handling side effects in functional components. It allows you to perform actions after the component has rendered, such as data fetching, subscriptions, or manually changing the DOM. It replaces lifecycle methods in class components.",
  },
  {
    id: 8,
    question: "What are React hooks?",
    answer:
      "React hooks are functions that enable functional components to have state and lifecycle features. The most commonly used hooks are `useState` for managing state and `useEffect` for handling side effects. Hooks were introduced in React 16.8 to provide a more concise way to write components with state and side effects.",
  },
  {
    id: 9,
    question: "What is Redux in React?",
    answer:
      "Redux is a state management library for JavaScript applications, including React. It provides a predictable state container that centralizes the state of an application, making it easier to manage and debug. Redux is often used in larger applications to handle complex state logic.",
  },
  {
    id: 10,
    question: "Explain React Router.",
    answer:
      "React Router is a library for handling navigation in React applications. It enables the creation of single-page applications with dynamic, client-side routing. React Router allows you to define routes, rendering different components based on the URL, providing a seamless and responsive user experience.",
  },
];

export default function App() {
  return (
    <div className="app">
      <FlashCards />
    </div>
  );
}

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {reactQuestions.map((question) => (
        <div
          key={question.id}
          onClick={() => handleClick(question.id)}
          className={question.id === selectedId ? "selected" : ""}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
