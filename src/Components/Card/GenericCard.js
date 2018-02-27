import React, { Component } from 'react';

/**
 * Interactively offers options of playing the arcade machine or viewing other content
 */
class GenericCard extends Component {

    constructor(props) {
        super(props)

        this.state = props.state
    }

    render() {
        console.log('GenericCard: ', this.state)

        const {primary, secondary, image} = this.state.data

        return (
            <a className="card card-generic" href={this.state.link} target="_blank">
                <div className="identifer">{this.state.id}</div>
                { image ? <img className="image" alt="" src={image}/> : null }
                <div className="title">{primary}</div>
                <div className="title_sub">{secondary}</div>
                <time>{this.state.date}</time>
            </a>
        )
    }
}

export default GenericCard;
