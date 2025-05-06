import React, { useState } from 'react';
import SkillCard from '../../components/SkillCard/SkillCard';
import './HireSkill.css';

const HireSkill = () => {
  const [skills] = useState([
    {
      id: 1,
      title: 'Web Development',
      description: 'Full-stack web development with React and Node.js. Creating responsive, modern websites for businesses and individuals.',
      price: '45',
      location: 'Remote',
      user: {
        name: 'Daniel Wilson',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      }
    },
    {
      id: 2,
      title: 'UI/UX Design',
      description: 'User interface and experience design for web and mobile applications. Clean, intuitive designs that convert.',
      price: '40',
      location: 'San Francisco',
      user: {
        name: 'Sophia Chen',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      }
    },
    {
      id: 3,
      title: 'Content Writing',
      description: 'SEO-optimized blog posts, articles, and website copy. Engaging content that tells your brand story.',
      price: '25',
      location: 'Remote',
      user: {
        name: 'Emily Parker',
        avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      }
    },
    {
      id: 4,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing services including SEO, PPC, and social media management.',
      price: '35',
      location: 'New York',
      user: {
        name: 'Marcus Johnson',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      }
    },
    {
      id: 5,
      title: 'Mobile App Development',
      description: 'Native iOS and Android app development using Swift and Kotlin. Create stunning, performant mobile experiences.',
      price: '55',
      location: 'Remote',
      user: {
        name: 'Alex Rivera',
        avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      }
    },
    {
      id: 6,
      title: 'Video Editing',
      description: 'Professional video editing for social media, marketing, and personal projects. Creative transitions and effects.',
      price: '30',
      location: 'Los Angeles',
      user: {
        name: 'Jessica Wong',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      }
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');

  const filteredSkills = skills.filter(skill => 
    skill.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
    (locationFilter === '' || skill.location.toLowerCase().includes(locationFilter.toLowerCase()))
  );

  return (
    <div className="hire-skill">
      <div className="container">
        <div className="hire-skill-header">
          <h1 className="hire-skill-title">Find Skilled Professionals</h1>
          <p className="hire-skill-subtitle">Browse and connect with talented individuals for your projects</p>
          
          <div className="hire-skill-search">
            <div className="search-input-container">
              <input
                type="text"
                placeholder="Search skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <span className="search-icon">🔍</span>
            </div>
            
            <div className="search-input-container">
              <input
                type="text"
                placeholder="Filter by location..."
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="search-input"
              />
              <span className="search-icon">📍</span>
            </div>
          </div>
        </div>
        
        <div className="skills-grid">
          {filteredSkills.length > 0 ? (
            filteredSkills.map((skill) => (
              <div className="skill-card-wrapper" key={skill.id}>
                <SkillCard skill={skill} />
              </div>
            ))
          ) : (
            <div className="no-results">
              <h3>No skills found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HireSkill;