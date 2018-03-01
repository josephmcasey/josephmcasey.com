import React, {Component} from 'react';
import GenericCard from "../../Components/Card/GenericCard"
import MediumCard from "../../Components/Card/MediumCard"
import TwitterCard from "../../Components/Card/TwitterCard"

export default class Library extends Component {

    constructor(props){
        super(props)

        this.state = {
            content: [
                {
                    id: 'g.1',
                    link: 'https://www.example.com',
                    date: new Date().toString(),
                    type: 'generic',
                    data : {
                        primary: 'Primary Text',
                        secondary: 'Secondary Text',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    }
                },
                {
                    id: 'm.1',
                    link: 'https://www.example.com',
                    date: new Date().toString(),
                    type: 'medium',
                    data : {
                        title: 'Star Wars',
                        subtitle: 'Return of the Jedi',
                        teaser: 'A long time ago in a galaxy far far away ',
                    }
                },
                {
                    id: 't.1',
                    link: 'https://www.example.com',
                    date: new Date().toString(),
                    type: 'twitter',
                    data : {
                        tweet: 'My favorite drink is covfefe.'
                    }
                }
            ]
        }
    }

    render(){
        const content = this.state.content

        return (
            <div className="library">
                <div className="isolated">
                    <GenericCard state={content[0]}/>
                </div>
                <div className="isolated">
                    <MediumCard state={content[1]}/>
                </div>
                <div className="isolated">
                    <TwitterCard state={content[2]}/>
                </div>
            </div>
        )
    }

}
