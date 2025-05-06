import React from "react";
import SkillCard from "../../components/SkillCard/SkillCard";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import "./Profile.css";

const Profile = () => {
  const user = {
    name: "Alex Johnson",
    location: "San Francisco, CA",
    bio: "Full-stack web developer with 5+ years of experience specializing in React and Node.js. Passionate about creating clean, efficient code and user-friendly interfaces.",
    avatar:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    skills: [
      {
        id: 1,
        title: "Web Development",
        description:
          "Full-stack web development with React and Node.js. Creating responsive, modern websites for businesses and individuals.",
        price: "45",
        location: "Remote",
        user: {
          name: "Alex Johnson",
          avatar:
            "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
        },
      },
      {
        id: 2,
        title: "Mobile App Development",
        description:
          "Native iOS and Android app development using React Native. Create cross-platform mobile apps with a single codebase.",
        price: "55",
        location: "Remote",
        user: {
          name: "Alex Johnson",
          avatar:
            "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
        },
      },
    ],
    contact: {
      email: "alex.johnson@example.com",
      phone: "(555) 123-4567",
      website: "www.alexjohnson.dev",
    },
    education: "B.S. Computer Science, Stanford University",
    experience: "5+ years in web and mobile development",
    socialMedia: {
      linkedin: "linkedin.com/in/alexjohnson",
      github: "github.com/alexjohnson",
      twitter: "twitter.com/alexjohnsondev",
    },
  };
 

  return (
    <div className="profile">
      <div className="container">
        <div className="profile-container">
          <div className="profile-header">
            <div className="profile-avatar">
              <img src={user.avatar} alt={user.name} />
            </div>
            <div className="profile-info">
              <h1 className="profile-name">{user.name}</h1>
              <p className="profile-location">{user.location}</p>
              <div className="profile-actions">
                <button className="button-small">Edit Profile</button>
              </div>
            </div>
          </div>

          <div className="profile-content">
            <div className="profile-main">
              <section className="profile-section">
                <h2 className="section-title">About</h2>
                <p className="profile-bio">{user.bio}</p>
              </section>

              <section className="profile-section">
                <h2 className="section-title">Skills Offered</h2>
                <div className="profile-skills-grid">
                  {user.skills.map((skill) => (
                    <div className="skill-card-wrapper" key={skill.id}>
                      <SkillCard skill={skill} text={'Edit Skill'}/>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="profile-sidebar">
              <section className="profile-section contact-section">
                <h2 className="section-title">Contact Information</h2>
                <ul className="contact-list">
                  <li>
                    <span className="contact-label">Email:</span>
                    <span className="contact-value">{user.contact.email}</span>
                  </li>
                  <li>
                    <span className="contact-label">Phone:</span>
                    <span className="contact-value">{user.contact.phone}</span>
                  </li>
                  <li>
                    <span className="contact-label">Website:</span>
                    <span className="contact-value">
                      {user.contact.website}
                    </span>
                  </li>
                </ul>
              </section>

              <section className="profile-section">
                <h2 className="section-title">Education</h2>
                <p>{user.education}</p>
              </section>

              <section className="profile-section">
                <h2 className="section-title">Experience</h2>
                <p>{user.experience}</p>
              </section>

              <section className="profile-section">
                <h2 className="section-title">Social Media</h2>
                <ul className="social-list">
                  <li>
                    <a
                      href={`https://${user.socialMedia.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin />
                    </a>
                  </li>
                  <li>
                    <a
                      href={`https://${user.socialMedia.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithubSquare />
                    </a>
                  </li>
                  <li>
                    <a
                      href={`https://${user.socialMedia.twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsTwitterX />
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
