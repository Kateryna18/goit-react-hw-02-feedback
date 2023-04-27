import React, { Component }  from "react";
// import css from 'components/Feedback/Feedback.module.css';


class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }


    render() {
        return (
            <div className="feedback">
                <p className="feedback__request">Please leave feedback</p>
                <div className="feedback-button__container">
                <button type="button" className="feedback__button">Good</button>
                <button type="button" className="feedback__button">Neutral</button>
                <button type="button" className="feedback__button">Bad</button>
                </div>
                <h2 className="feedback__subtitle">Statistics</h2>
                <p>Good: <span>3</span></p>
                <p>Neutral: <span>2</span></p>
                <p>Bad: <span>2</span></p>
            </div>
        )
    }

}

export default Feedback;