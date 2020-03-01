import React from 'react';
import "./index.css";


class Card extends React.Component{
    render() {
        return (
            <div classname = "card">
                <span classname = "close"
                    onClick = {() => this.props.clickMe()}>
                        &times;
                </span>

                <h3>{this.props.title}</h3>
                <p>{this.props.content}</p>
            </div>
        )
    }
}

export default Card;