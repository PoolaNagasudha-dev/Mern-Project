import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-4 mt-10">
      <div className="container text-center px-4">
        <p>&copy; {new Date().getFullYear()} eShop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
