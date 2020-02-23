<<<<<<< HEAD
import React from 'react';
import "./index.css";

class Card extends React.Component{
    render() {
        return (<p className="card">This is a Card!</p>)
=======
import "./index.css"

class Card {
    constructor(props) {
        this.props = props;
        this.element = document.createElement("div");
        this.element.innerHTML = this.props.content;
        this.element.className = "card";

    }

    render() {
        return this.element;
>>>>>>> a1f9e4606c477861511232cd614761e40245179a
    }
}

export default Card;