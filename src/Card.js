import React from 'react';
import './Card.css';

function Card(prop){
    return <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{prop.type}</h5>
            <h6 className="card-price text-center">${prop.charge}<span className="period">/month</span></h6>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{prop.user} User</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{prop.storage}GB Storage</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
              <li className={`${prop.type === "FREE" ? "text-muted" : "text"}`}><span className="fa-li"><i className="fas fa-times"></i></span>Unlimited
                Private Projects</li>
              <li className={`${prop.type === "FREE" ? "text-muted" : "text"}`}><span className="fa-li"><i className="fas fa-times"></i></span>Dedicated
                Phone Support</li>
              <li className={`${prop.type === "FREE" ? "text-muted" : "text"}`}><span className="fa-li"><i className="fas fa-times"></i></span>{prop.user} Free Subdomain
              </li>
              <li className={`${prop.type === "PRO" ? "text" : "text-muted"}`}><span className="fa-li"><i className="fas fa-times"></i></span>Monthly Status
                Reports</li>
            </ul>
            <div className="d-grid">
              <div className="btn btn-primary text-uppercase">Button</div>
            </div>
          </div>
        </div>
      </div>

}
export default Card;

