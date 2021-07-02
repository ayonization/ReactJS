import React from "react"; //importing dependency

import ReactDom from "react-dom";

//!react component

// const Greeting = () =>{

// @param element to be rendered, props object, children(actually rendered)
//   return React.createElement('h1',{},'hello world');
// }

function Greeting() {
  //capitalize first letter of function so react knows it is a component
  //return single JSX element

  return (
    // * use react fragments to return multiple elements <></>
    //separate react components rendered
    <div>
      <Person />
      <Message />
    </div>
  );
}

// return these components to render
const Person = () => <h2> Ayon Sen</h2>;

const Message = () => {
  return <p> This is my message</p>;
};

//! rendering react functionalities in the index html file

ReactDom.render(<Greeting />, document.getElementById("root")); //components must be closed with closing tag
