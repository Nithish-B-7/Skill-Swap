import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import Button from "../../components/Button/Button";
import VantaBackground from "../VantaBackground/VantaBackground";
import Parallax from "../Parallax/Parallax";
import Scroll from "../Scroll/Scroll";
import "./Landing.css";
import { GrSecure } from "react-icons/gr";
import { PiFediverseLogoFill } from "react-icons/pi";
import { GiNetworkBars } from "react-icons/gi";
import Stories from "../Stories/Stories";

const Landing = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });

  const categories = [
    { title: "Web Development", imageClass: "web-dev" },
    { title: "Graphic Design", imageClass: "graphic-design" },
    { title: "Digital Marketing", imageClass: "digital-marketing" },
    { title: "Writing & Translation", imageClass: "writing" },
    { title: "UI/UX Developer", imageClass: "ui-ux" },
  ];

  const benefits = [
    {
      title: "Diverse Talent Pool",
      description:
        "Access a wide range of skills from verified professionals globally.",
      icon: <PiFediverseLogoFill  className="benefit-icon" />,
    },
    {
      title: "Secure & Easy",
      description:
        "Our platform ensures secure transactions and smooth collaboration.",
      icon: <GrSecure className="benefit-icon" />,
    },
    {
      title: "Grow Your Network",
      description:
        "Connect with peers, learn new skills, and expand your professional reach.",
      icon: <GiNetworkBars className="benefit-icon" />,
    },
  ];

  return (
    <div className="landing">
      <section className="hero">
        <VantaBackground />
        <div className="container hero-container">
          <div
            ref={ref1}
            className={`hero-content masking-container ${
              inView1 ? "active" : ""
            }`}
          >
            <h1 className="hero-title masked-text">
              Share Your Skills. <br />
              Grow Your Network.
            </h1>
            <p className="hero-description">
              Join our community of skilled professionals and find opportunities
              or hire talent for your next project.
            </p>
            <div className="hero-buttons">
              <Link to="/signup">
                <Button className="button-outline">Get Started</Button>
              </Link>
              <Link to="/hire-skill">
                <Button className="button-outline btn">Explore Skills</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-headline">How It Works</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">1</div>
              <h3>Create Profile</h3>
              <p>
                Sign up and showcase your professional skills and experience.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">2</div>
              <h3>Offer Skill</h3>
              <p>
                Post services you can provide with your rates and availability.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">3</div>
              <h3>Connect</h3>
              <p>
                Match with people who need your skills or find skilled
                professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="landing-section categories-section">
        <div className="landing-container">
          <h2 className="section-headline">Explore Popular Categories</h2>
          <div className="categories-container">
            <div className="categories-grid">
              {categories.map((category, index) => (
                <div
                  className={`category-card ${category.imageClass} ${
                    index === 0 ? "big" : "small"
                  }`}
                  key={index}
                >
                  <h3 className="category-title">{category.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="landing-section why-choose-us-section">
        <div className="landing-container">
          <h2 className="section-headline">Why Choose SkillSwap?</h2>
          <div className="benefits-container">
            {benefits.map((benefit, index) => (
              <div className="benefit-item" key={index}>
                <div className="benefit-icon-placeholder">{benefit.icon}</div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Scroll />

      <Parallax />

      <Stories />

      <section className="cta">
        <div className="container">
          <h2 className="section-headline">Ready to share your skills?</h2>
          <p className="cta-description">
            Join thousands of professionals who are already growing their
            network and business.
          </p>
          <Link to="/signup">
            <Button className="button-large">Sign Up Now</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Landing;
