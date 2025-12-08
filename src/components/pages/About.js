import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className="about-container">
            <section className="intro">
                <div className="intro-text">
                    <h1>Hello, I'm Emma</h1>
                    <h2>Web Developer</h2>
                    <Link to = "/contact" className="contact-btn"><strong>Get in Touch</strong></Link>
                </div>

                <div className="intro-photo">
                    <img src="/images/portfoliopic.jpg" alt="Emma headshot" />
                </div>
            </section>

            <section className="about-section">
                <h2>About Me</h2>
                <p>
                I'm a marketing professional turned aspiring web developer, blending creativity with technical curiosity. After several years working in marketing, where I managed websites, collaborated with designers, and learned how digital experiences shape brand identity, I realized the part of my job I loved most was building things, not just promoting them.
                </p>
                <p>
                That curiosity led me to pursue formal training in web devleopment at Boston University, where I've been strenghening my skills in front-end technologies, responsive design, and user-focused problem-solving. My background in marketing gives me a unique perspective in that I understand how users think, how brands communicate, and how thoughtful design can elevate a digital experience.  
                </p>
                <p>
                Now I am channeling that experience into a new career path, one where I can create, build, and bring ideas to life through clean, functional, accessible, and engaging code.
                </p>
            </section>

            <section className = "skills-section">
                <div className = "skill-card">
                    <h3>HTML5</h3>
                    <p>100+ Hours Experience</p>
                </div>
                <div className = "skill-card">
                    <h3>CSS</h3>
                    <p>100+ Hours Experience</p>
                </div>
                <div className = "skill-card">
                    <h3>JavaScript</h3>
                    <p>50+ Hours Experience</p>
                </div>
                <div className = "skill-card">
                    <h3>React</h3>
                    <p>25+ Hours Experience</p>
                </div>
            </section>

        </div>
    )
}
