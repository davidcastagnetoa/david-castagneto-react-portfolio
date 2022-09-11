import React, { Component } from "react";

import PortfolioItem from './portfolio-item.js'

export default class PortfolioContainer extends Component {
    constructor () {
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio",
            data: [
                {title: "Quip", url:"google.com"},
                {title: "Eventbrite", url:"facebook.com"},
                {title: "Ministry State", url:"instagram.com"},
                {title: "SwingAway", url:"twitter.com"}
            ]
        }
    }

    portfolioItems(){
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={item.url} />
        })
    }

    render(){
        return(
            <div>
                <h2>{this.state.pageTitle}</h2>
                {this.portfolioItems()}
            </div>
        )
    }
}