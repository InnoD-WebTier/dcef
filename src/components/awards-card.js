import React from 'react';
import Link from 'gatsby-link';
import '../css/bootstrap.css';
import '../css/awards-card.scss';

class AwardsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      organization: props.organization,
      year: props.year,
      cards: [
        {
          award: props.cardsInfo[0].award,
          title: props.cardsInfo[0].title,
          author: props.cardsInfo[0].author
        },
        {
          award: props.cardsInfo[1].award,
          title: props.cardsInfo[1].title,
          author: props.cardsInfo[1].author
        },
        {
          award: props.cardsInfo[2].award,
          title: props.cardsInfo[2].title,
          author: props.cardsInfo[2].author
        },
        {
          award: props.cardsInfo[3].award,
          title: props.cardsInfo[3].title,
          author: props.cardsInfo[3].author
        },
        {
          award: props.cardsInfo[4].award,
          title: props.cardsInfo[4].title,
          author: props.cardsInfo[4].author
        }
      ]
    };
  }

  renderAwardsList () {
    return this.state.cards.map(function(e, i) {
      let subtext = (e.title == "" ? e.author :
          '"' + e.title + '"' + " by " + e.author);
      return (
        <p className="list-item">
          <span className="list-item__text">{e.award}</span>
          <br/>
          {subtext}
        </p>
      );
    });
  }

  render () {
    return (
      <div className="box">
        <div className="box__subheader">
          <h3 className="box__subheader--title">{this.state.organization}</h3>
          <p className="box__subheader--year">{this.state.year}</p>
        </div>
        <div className="box__awardslist">
          {this.renderAwardsList()}
        </div>
      </div>
    );
  }
}

export default AwardsCard;
