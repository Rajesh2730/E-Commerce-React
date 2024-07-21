import React, { useContext } from 'react';
import { UserContext } from './UseContext';
import './profile.css';
import NavBar from '../Nav/NavBar';

const ProfilePage = () => {
  const { user, loading, error } = useContext(UserContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <NavBar />
      <div className="cont mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="pro-card">
              <div className="card-body">
                <h5 className="card-title mb-4">Profile Info</h5>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Joined:</strong> {new Date(user.joinedDate).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="ord-card mb-4">
              <div className="card-body">
                <h5 className="card-title">Order History</h5>
                {user.orderHistory.length > 0 ? (
                  <ul className="list-group">
                    {user.orderHistory.map(order => (
                      <li key={order.id} className="list-group-item">
                        Order #{order.id} - {order.status} - {new Date(order.date).toLocaleDateString()}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No orders found.</p>
                )}
              </div>
            </div>
            <div className="save-card">
              <div className="card-body">
                <h5 className="card-title">Saved Items</h5>
                {user.savedItems.length > 0 ? (
                  <div className="row">
                    {user.savedItems.map(item => (
                      <div key={item.id} className="col-md-4 mb-3">
                        <div className="card">
                          <img src={item.image} className="card-img-top" alt={item.name} />
                          <div className="card-body">
                            <h6 className="card-title">{item.name}</h6>
                            <p className="card-text">${item.price}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>No saved items found.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
