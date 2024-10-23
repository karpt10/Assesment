// import React from 'react'
// import './index.css'
// const Card = ({id, title, tag, userId, status, priority}) => {
//   return (
//     <div className='outerbox'>
//       <div className='flex'>
//         {id} <br/>
//            </div>
//            <div className='box'>
//           <b>{title}</b>
//           </div>
//           <br/>
//           {tag} {userId} 
//           {/* {status} {priority} */}
//     </div>
//   )
// }

// export default Card;
import React from 'react';
import './index.css';

const Card = ({ id, title, tag }) => {
  return (
    <div className="card-container">
      <div className="card-header">
        <div className="card-id">{id}</div>
        <img 
          src="https://via.placeholder.com/40" 
          alt="Profile" 
          className="profile-image" 
        />
      </div>
      <div className="card-title">
        <b>{title}</b>
      </div>
      <div className="card-footer">
        <span className="alert-icon">!</span>
        <span className="feature-badge">{tag}</span>
      </div>
    </div>
  );
};

export default Card;

