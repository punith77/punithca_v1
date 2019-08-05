import React from 'react';
import ProjectImage from '../../images/projectImg.png'
import Card from './Card'


export default class Project extends React.Component {
    renderProjects() {
        let projects = []
        for (let i = 0; i < 2; i++) {

            projects.push(
                <div className="project-container" style={{ textAlign: "center" }}>
                    <Card />
                    {/* <div className="project-caption">
                        <i class="fab fa-github-square"></i>
                        <i class="fas fa-globe"></i>
                    </div> */}
                </div>
            )
        }
        return projects
    }
    render() {
        return (
            <section className="section-projects">
                <div className="project-wrapper">
                    <div className="project-container">
                        <img src={ProjectImage} alt="Project 1" className="project-pic" />
                        <div className="project-caption">
                            <h3>Chat App</h3>
                            <div className="project-links">
                                <i class="fab fa-github-square"></i>
                                <i class="fas fa-globe"></i>
                            </div>

                        </div>
                    </div>


                    <div className="project-empty">

                        <h3>PicMe</h3>
                        <h4>Coming Soon</h4>
                        <div className="project-caption">
                            <h3>Photography App</h3>
                            <div className="project-links">
                                <i class="fab fa-github-square"></i>
                                {/* <i class="fas fa-globe"></i> */}
                            </div>
                        </div>
                    </div>

                    <div className="project-empty">

                        <h3>Bali Car </h3>
                        <h4>Coming Soon</h4>
                        <div className="project-caption">
                            <h3>Car Rental App</h3>
                            <div className="project-links">
                                <i class="fab fa-github-square"></i>
                                {/* <i class="fas fa-globe"></i> */}
                            </div>
                        </div>
                    </div>



                </div>
            </section>
        )
    }
}