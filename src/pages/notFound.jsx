import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <p>sahifa topilmadi</p>
      <Link to="/">Asosiy sahifaga qaytish</Link>
    </div>
  );
};

export default NotFound;
