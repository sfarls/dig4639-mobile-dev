import React from 'react';
import './components/Card/index.js';
import Card from "./components/Card/index.js";

class App extends React.Component{
  render(){
    return <Card content="This is a Card!"></Card>
  }
}

export default App;