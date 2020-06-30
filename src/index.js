// import React from 'react';
// import { render } from 'react-dom';


function convertToHtml(virtualNode) {
  console.log(virtualNode);

  if(typeof virtualNode === 'string' || typeof virtualNode === 'number') {
    return document.createTextNode(`${virtualNode}`);
  }

  const $domElement = document.createElement(virtualNode.tagName);

  virtualNode.props.children.forEach((virtualChild) => {
    $domElement.appendChild(convertToHtml(virtualChild));
  })

  return $domElement;
}

function render(initialVirtualTree, $domRoot) {
  // console.log(JSON.stringify(initialVirtualTree, null, 4));

  const $appHTML = convertToHtml(initialVirtualTree);
  console.log('$appHTML',$appHTML);
  $domRoot.appendChild($appHTML);
}

function createElement(elementType, props, ...children) {
  const virtualElementProps = {
    ...props,
    children
  }

  if(typeof elementType === "function") {
    return elementType(virtualElementProps);
  }

  return {
    tagName: elementType,
    props: virtualElementProps
  };
}

const React = {
  createElement,
};

// ========================================

function Title() {
  return React.createElement("h1", null, "Bla");
}

function App(props) {
  // return (
  //   React.createElement(
  //     "section",
  //     {
  //       className: "App"
  //     }, 
  //     React.createElement(Title, null), 
  //     React.createElement("div", null, 
  //     React.createElement("div", null, "0"), 
  //     React.createElement("button", null, "Incrementar"), 
  //     React.createElement("button", null, "Decrementar"))
  //   )
  // );
  return (
    <section className="App">
      <h1>Contador</h1>
      <div>
        <div>0</div>
        <button>Incrementar</button>
        <button>Decrementar</button>
      </div>
    </section>
  );
}

render(React.createElement(App, null), document.querySelector('#root'));