import { Link } from "react-router-dom";
import classes from "../assets/styles/login.module.css";

const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={classes.login}>
      <form onSubmit={handleSubmit}>
        <h2>Kirish</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Parol" />
        <Link to="/dashboard/stat">
          <button>Kirish</button>
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
