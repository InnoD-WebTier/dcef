import React from 'react';
import Link from 'gatsby-link';
{/*import '../css/bootstrap.css';*/}
import '../css/awards.scss';
import AwardsCard from '../components/awards-card.js';


//const AwardsPage = () => (
class AwardsPage extends React.Component {
  renderAwardsCards () {
    {/*Need to do this for every AwardsCard in the set of organizations*/}
    return (
      <AwardsCard
          organization = "Society of Professional Journalists"
          year = "2016-2017"
          cardsInfo = {[
            {
              award: "1st place Best All-around Daily Student Newspaper",
              title: "",
              author: "The Daily Californian Staff"
            },
            {
              award: "Finalist Best News Reporting",
              title: "19 campus employees violated UC sexual harassment policies in past seven years",
              author: "Alexandra Yoon-Hendricks, Katy Abbott and Melissa Wen"
            },
            {
              award: "Finalists Best Breaking News Story",
              title: "Thousands of East Bay high schoolers flood Berkeley streets protesting Trump victory",
              author: "The Daily Californian Staff"
            },
            {
              award: "Finalist Best Feature Writing",
              title: "The sky in the east was bright red",
              author: "Alexandra Yoon-Hendricks"
            },
            {
              award: "Finalist Best Sports Column Writing",
              title: "Sports with Sophie",
              author: "Sophie Goethals"
            }
          ]}
      />
    );
  }

  render () {
    return (
      <div>
        <div className="blue_box"></div>
        <div className="panel">
            <h1 className="panel__title">Awards & Honors</h1>
            <p className="panel__subtitle">In recent years, the Daily Cal has earned dozens of awards on a regional and national level for its
              comprehensive and high-quality coverage of UC Berkeley, the city of Berkeley and the entire UC system. In 2016,
              the Society of Professional Journalists declared the Daily Californian to be the best daily student newspaper in
              California, Nevada, Arizona and Hawaii.
            </p>
        </div>
        <div className="awards">
          <div className="awards__left">
            {this.renderAwardsCards()}
          </div>
          <div className="awards__right">
            {this.renderAwardsCards()}
          </div>
        </div>
      </div>
    );
  }
}

export default AwardsPage;
