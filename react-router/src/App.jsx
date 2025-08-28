import { useNavigate } from "react-router-dom";



const HomePageApplication = () => {
  const navigate = useNavigate();

    return (
      <div>
        <h1>
          Home Page of React Router Project 
        </h1>
        <button onClick={() => navigate('settings/useraccount')}>Check user details</button>
      </div>
    )
  }

  export default HomePageApplication;

  