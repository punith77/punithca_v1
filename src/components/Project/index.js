import React from 'react';
import ProjectImage from '../../images/projectImg.png'
import Card from './Card'


export default class Project extends React.Component {
    renderProjects() {
        let projects = []
        for (let i = 0; i < 7; i++) {

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
                            <i class="fab fa-github-square"></i>
                            <i class="fas fa-globe"></i>
                        </div>
                    </div>
                    {this.renderProjects().map(element => {
                        return (
                            element
                        )
                    })}
                </div>
            </section>
        )
    }
}