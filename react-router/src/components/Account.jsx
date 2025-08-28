import "../profile.css";
import { useNavigate } from "react-router-dom";
const UserDetails = () => {
    const navigate = useNavigate();
  return (
    <div class="profile-card">
      <img
        src="https://randomuser.me/api/portraits/men/75.jpg"
        alt="User Photo"
      />
      <h2>Jonathan Clarke</h2>
      <p>
        <strong>Age:</strong> 34
      </p>
      <p>
        <strong>Location:</strong> Seattle, WA, USA
      </p>
      <p>
        <strong>Email:</strong> jon.clarke@example.com
      </p>
      <p>
        <strong>Phone:</strong> (206) 555-7842
      </p>
      <p>
        <strong>Occupation:</strong> UX Designer
      </p>
      <p>
        Enthusiastic designer passionate about creating intuitive user
        experiences. Lover of coffee, nature, and minimalist design.
      </p>
      <button onClick={() => navigate('/')}>Back to Home Page</button>
    </div>
  );
};

export default UserDetails;
