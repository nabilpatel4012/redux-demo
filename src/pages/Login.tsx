import { useNavigate } from "react-router-dom";



const Login: React.FC = () => {
  const navigate = useNavigate();
  
  const handleSubmit = () => {
    navigate('/main/home')
  }

  return (
    
    <div>
      <div style={{ display: "flex", flexWrap: "wrap",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            margin:"15%" }}
            >
        <form
          style={{
            border: "2px solid black",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            height: "200px",
            justifyContent:"space-around"
          }}
        >
          <input
            type="email"
            placeholder="Email"
            style={{
              display: "flex",
              marginBottom: "20px",
              width: "400px",
              height: "50px",
              borderRadius: "20px",
              border: "2px solid black",
              fontSize: "20px",
              paddingLeft: "20px",
            }}
            
          />
          
          <input
            type="password"
            placeholder="Password"
            style={{
              display: "flex",
              marginBottom: "20px",
              width: "400px",
              height: "50px",
              borderRadius: "20px",
              border: "2px solid black",
              fontSize: "20px",
              paddingLeft: "20px",
            }}
          />
          <button
            type="submit"
            style={{
              display: "flex",
              width: "425px",
              height: "50px",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "20px",
              border: "2px solid black",
              color: "white",
              backgroundColor: "black",
              fontSize: "20px",
            }}
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
