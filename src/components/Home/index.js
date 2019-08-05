import React from 'react';



export default class Home extends React.Component {

    render() {

        return (
            <div className="section-home">

                <div className="home-wrapper">
                    <div className="about-highlights">

                        <div className="highlight-wrapper">
                            <div className="icon-container">

                                <div className="icon-wrapper windows-wrapper">
                                    <i className="fab fa-windows icons"></i>
                                </div>
                            </div>
                            <div className="highlight-text">
                                <h2>.Net</h2>
                                <p>Good in C#  and familar with .Net Core and Entity Framework.</p>
                            </div>

                        </div>

                        <div className="highlight-wrapper">
                            <div className="icon-container">

                                <div className="icon-wrapper node-wrapper">
                                    <i className="fab fa-node icons"></i>
                                </div>
                            </div>
                            <div className="highlight-text">
                                <h2>Node.Js</h2>
                                <p>Highly skilled in developing api's for enterprise applications.</p>
                            </div>

                        </div>

                        <div className="highlight-wrapper">
                            <div className="icon-container">

                                <div className="icon-wrapper react-wrapper">
                                    <i className="fab fa-react icons"></i>
                                </div>
                            </div>
                            <div className="highlight-text">
                                <h2>React</h2>
                                <p>I specialise in applications written in React and Redux.</p>
                            </div>

                        </div>

                        <div className="highlight-wrapper">
                            <div className="icon-container">

                                <div className="icon-wrapper sql-wrapper">
                                    <i className="fas fa-database icons"></i>
                                </div>
                            </div>
                            <div className="highlight-text">
                                <h2>SQL</h2>
                                <p>Good understanding of SQL databases like MySQL</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}