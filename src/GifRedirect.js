import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const GifRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/about');
    }, 3000); // 4 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="gif-container">
      <img className="full-screen-gif" src="/throwingflashbeng.gif" alt="Loading..." />
    </div>
  );
};

export default GifRedirect;