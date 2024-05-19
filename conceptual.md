### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
    - React is a JS library for building user interfaces, You use it when making web apps, it makes the development process smoother with the use of JSX and components that can be reusable for less typed code.

- What is Babel?
    Babel is a JS transpiler that when used with React will turn our JSX into code that can be understood by browsers

- What is JSX?
  - JSX is a syntax extension for JavaScript that allows users to write HTML-like code within JavaScript files

- How is a Component created in React?
    You create a new JS file, with the name of the file Capitalized (ie:`Component.js`),
    import React and any other dependencies, and build the component to do whatever you need.   Make sure to export functionality from relevant components.

- What are some difference between state and props?
    Props: Props are used for passing data from a parent component to a child component,
    State: used to manage data within components, especially when we want data to persist between refreshes.

- What does "downward data flow" refer to in React?
    Refers to parent components passing data down to children via props.

- What is a controlled component?
    A controlled component is typically a form that input data values are controlled by React through state.

- What is an uncontrolled component?
    An uncontrolled component is a form input that React does not control with state, usually resembles a regular HTML form.

- What is the purpose of the `key` prop when rendering a list of components?
    the key prop is used to help React identify which items have changed.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
    Array index's may not be static, so if the key is an index, React could re-render the incorrect element.
    

- Describe useEffect.  What use cases is it used for in React components?
    useEffect is a hook that React can use to do something (like fetch data) after a render. be default it runs after initial render and after every update.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
    useRef returns a mutable object with a current key, and values equal to the initial value.
    It persists across renders, any mutations will NOT cause a re-render.

- When would you use a ref? When wouldn't you use one?
    Use to store any mutable variables that don't trigger re-renders when changed,
    Should not be used for: Storing state, storing state effecting elements, etc.

- What is a custom hook in React? When would you want to write one?
    A custom hook is a hook that we write to handle repeated tasks, Abstract logic, or even generate our own JSX. That React may not have a hook for our specific purpose.