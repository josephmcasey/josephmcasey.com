import React from "react"
import GenericCard from "./GenericCard"

export default class MediumCard extends GenericCard {

    constructor(props)
    {
        super(props)
    }

    render(a,b,c)
    {
        console.log('MediumCard: ', this.state)

        const {title, subtitle, teaser,} = this.state.data

        return (
            <a className="card card-medium" href={this.state.link} target="_blank">
                <div className="identifer">{this.state.id}</div>
                { this.state.image ? <img className="image" alt="" src={this.state.image}/> : null }
                <div className="title">{title}</div>
                <div className="title_sub">{subtitle}</div>
                <p>{teaser}</p>
                <time>{this.state.date}</time>
            </a>
        )
    }

}

