import React from 'react';
import "./Blogs.css"

const Blogs = () => {
    return (
        <div>
           <div className='blog-title'>
            All Question Answer is Here.
           </div>
            <div className='blog-answer'>
                <h3>Q1.when we should use context API? </h3>
                <p>Answer: Context API is a tool provided by React that allows you to share state between components without having to pass down props manually through multiple layers of the component tree.
                    Context API can help to avoid "prop drilling" - the process of passing props down through multiple levels of components to reach a deeply nested component. By using Context API, we can provide a way for our components to access data that is not directly available to them, without having to pass that data through all of the components in between.
                </p>
                <h3>Q2.What is custom hook?</h3>
                <p>Answer: A custom hook is a reusable function that contains some stateful logic and can be used across multiple React components. Custom hooks allows to abstract away complex logic and reuse it throughout your application without repeating code.</p>
                <h3>Q3.What is useRef? when it is used?</h3>
                <p>Answer: The primary use case for useRef is to access the DOM nodes or React elements that are created by the components. When a ref is passed to a component via the ref attribute, it provides access to the underlying DOM node or React element that is created when the component is mounted.</p>
                <h3>Q4.What is useMemo?when it is used?</h3>
                <p>Answer: The primary use case for useMemo is to optimize performance by avoiding unnecessary computations. When a component renders, any JavaScript expressions in the JSX are re-evaluated, which can be expensive if the expressions involve complex computations or data processing. By using useMemo, you can ensure that the result of a function is only computed when its dependencies change, rather than on every render.</p>
            </div>
        </div>
    );
};

export default Blogs;