import './SkillCard.css';
import Button from '../Button/Button'

const SkillCard = ({ skill }) => {
  const { title, description, price, location, user } = skill;

  return (
    <div className="skill-card">
      <div className="skill-card-content">
        <h3 className="skill-title">{title}</h3>
        <p className="skill-description">{description}</p>
        <div className="skill-meta">
          <div className="skill-price">${price}/hr</div>
          <div className="skill-location">{location}</div>
        </div>
        <div className="skill-user">
          <div className="user-avatar">
            <img src={user.avatar || "https://via.placeholder.com/40"} alt={user.name} />
          </div>
          <div className="user-info">
            <div className="user-name">{user.name}</div>
            <div className="user-rating">
              <span className="stars">★★★★☆</span>
              <span className="reviews">(24)</span>
            </div>
          </div>
        </div>
      </div>
      <div className="skill-card-footer">
        <Button className="hire-button">Hire Now</Button>
      </div>
    </div>
  );
};

export default SkillCard;