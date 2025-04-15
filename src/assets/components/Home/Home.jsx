import './Home.scss';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="headings">
          <h1>shop lifestyle essentials.</h1>
          <button>
            <Link to="/products">Explore our products</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
