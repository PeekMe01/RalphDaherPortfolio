import React from 'react'
import './about.css'
import ME from '../../assets/20230415_183428.jpg'
import {BsPersonWorkspace} from 'react-icons/bs'
import {AiOutlineTeam} from 'react-icons/ai'
import {MdOutlineSelfImprovement} from 'react-icons/md'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BsPersonWorkspace className='about__icon'/>
              <h5>Quick Learner</h5>
              <small>Something new you want me to learn? Sure, 1 week is all I need.</small>
            </article>

            <article className='about__card'>
              <AiOutlineTeam className='about__icon'/>
              <h5>Team Player</h5>
              <small>I understand the importance of teamwork, and I'm always down to work with someone who's willing to work.</small>
            </article>
            
            <article className='about__card'>
              <MdOutlineSelfImprovement className='about__icon'/>
              <h5>Always Improving</h5>
              <small>There's a 90% chance that while you're reading this I'm sharpening my skills and learning new things.</small>
            </article>
          </div>

          <p>
            I'm 20 years old, studying computer science at <a href="https://ua.edu.lb/en/home">Antonine University</a> and graduating in 2024. I'm not here because computer science is trendy and cool, but because it's the path I chose that will lead me to my long term goals.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
