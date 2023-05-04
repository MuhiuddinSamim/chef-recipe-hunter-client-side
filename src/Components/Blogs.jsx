import React from 'react';

const Blogs = () => {
    return (
        <div className='bg-purple-200 p-12'>
             <div>
            <h1 className='text-xl '>1.Difference between Controlled and Uncontrolled component?</h1>
            <p>Ans:A controlled component is a component whose behavior is fully controlled by its parent component or the application. This means that the parent component or the application is responsible for managing the state and behavior of the controlled component. A controlled component typically receives data and event handlers as props, and notifies the parent component or the application when its state changes.

On the other hand, an uncontrolled component is a component whose behavior is partially or entirely managed by itself. An uncontrolled component typically manages its own state and behavior, and does not rely on the parent component or the application to manage its state. Uncontrolled components are often used in situations where it is more convenient to let the component manage its own state, such as for input fields or form elements.</p>
        </div>
         <div className='py-10'>
            <h1 className='text-xl '>2.How to validate react props using PropTypes?</h1>
            <p>Ans:As your app grows, you can catch a lot of bugs with typechecking. For some applications, you can use JavaScript extensions like Flow or TypeScript to typecheck your whole application. But even if you don’t use those, React has some built-in typechecking abilities. To run typechecking on the props for a component, you can assign the special propTypes property:
                
            </p>
        </div> 
        <div className='py-10'>
            <h1 className='text-xl '>3.Difference between node js and Express js?</h1>
            <p>Ans:
Node.js and Express.js are both JavaScript-based technologies used in server-side web development. Here's the difference between Node.js and Express.js:

Node.js:

Node.js is a runtime environment that allows developers to run JavaScript code on the server-side.
It provides an event-driven, non-blocking I/O model that allows for highly scalable and efficient server-side applications.
Node.js comes with a built-in library of modules and APIs that developers can use to build web servers, file systems, and network applications.
Express.js:

Express.js is a web application framework built on top of Node.js that simplifies the process of building web applications and APIs.
It provides a set of features and utilities that make it easier to handle HTTP requests, manage routes, and interact with databases and other resources.
Express.js is highly flexible and customizable, and allows developers to add middleware and plugins to extend its functionality.</p>
        </div>
         <div className='py-10'>
            <h1 className='text-xl '>4.what is custom hook and why will you create a custom hook?</h1>
            <p>Ans:In React, a custom hook is a JavaScript function that starts with the use prefix and allows developers to reuse stateful logic across multiple components. Custom hooks are a powerful feature in React that can help reduce code duplication and improve the organization and reusability of your code.

Here are some reasons why you might want to create a custom hook:

Reusing stateful logic:
Custom hooks can be used to reuse stateful logic across multiple components. For example, if you have several components that share similar state management logic, you can extract that logic into a custom hook and reuse it across those components.

Abstracting complex logic:
Custom hooks can be used to abstract complex logic and make it easier to use and understand. For example, if you have a complex data fetching or data processing logic, you can extract that logic into a custom hook that abstracts away the details and provides a simpler API for components to use.

Separating concerns:
Custom hooks can be used to separate concerns and improve the modularity of your code. For example, if you have a component that handles both state management and network requests, you can extract the network request logic into a custom hook and keep the state management logic in the component.</p>
        </div>


        </div>
       
    );
};

export default Blogs;