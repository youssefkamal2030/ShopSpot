import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../AppProvider';
import './AccountPage.css';

function AccountPage() {
  const { logoutUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    logoutUser();
    localStorage.removeItem('token'); 
    navigate('/login');
  };

  return (
    <div className="account-page-container">
      <button className="signout-button" onClick={handleSignOut}>Sign Out</button>
      <div className="account-header">
        <h1 className="account-title">Your Account</h1>
      </div>
      <div className="account-cards-container">
        <div className="account-card">
          <div className="card-body">
            <h5 className="card-title">Your Payments</h5>
            <p className="card-text">Manage or add payment methods and view your transactions.</p>
            <Link to="/Profile/CardInputform" className="custom-btn">Review</Link>
          </div>
        </div>
        <div className="account-card">
          <div className="card-body">
            <h5 className="card-title">Your Address</h5>
            <p className="card-text">Edit, remove or set default address.</p>
            <Link to="/profile/addAddressPage" className="custom-btn">Review</Link>
          </div>
        </div>
        <div className="account-card">
          <div className="card-body">
            <h5 className="card-title">Installment Plan</h5>
            <p className="card-text">View installment plans offered.</p>
            <Link to="/Profile/InstallmentPage" className="custom-btn">Review</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountPage;
