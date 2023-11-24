// Inside your "FuturePlan.js" file
import React from 'react';
import '../components/FuturePlan.css';

function FuturePlan() {
  return (
    <div className="custom-futureplan-container">
      <div className="custom-futureplan-heading">
        <h1>FUTURE PLAN</h1>
        <h3>APULKI DIVYANG SEVA FOUNDATION</h3>
      </div>

      <div>

        <div className="custom-futureplan-item-container">
          <div className="custom-futureplan-text">
            <h2>Old Age Home</h2>
            <h4>Apulki Divyang Seva Foundation envisions the establishment of a safe haven for elderly divyang individuals, providing them solace in their later years. This facility will offer high-quality services, including free food, healthcare, clothing, and essential amenities, ensuring their well-being and comfort. Our goal is to create a supportive and nurturing environment where these individuals can enjoy their second innings in life with dignity and peace.</h4>
          </div>
          <img className="custom-futureplan-image" src='data:image/png;base64,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' alt='image' />
        </div>

        <div className="custom-futureplan-item-container">
        <img className="custom-futureplan-image" src='data:image/jpeg;base64,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' alt='image' />
          <div className="custom-futureplan-text">
            <h2>Scholarship Provision</h2>
            <h4>We will also work to develop a scholarship program dedicated to disabled children and the children of single parents who will show better performance in their academics. We believe that offering these scholarships will not only provide essential financial support for their education but also serve as a meaningful encouragement. Our goal is to nurture their educational aspirations, empower their future prospects, and celebrate their achievements through this token of support and motivation.</h4>
          </div>
         
        </div>

        <div className="custom-futureplan-item-container">
          <div className="custom-futureplan-text">
            <h2>Self-Help Group</h2>
            <h4>ADSF proudly operates 15 exclusive Self-Help Groups comprised solely of divyang individuals. These groups serve as platforms for comprehensive support, aimed at fostering self-sufficiency and financial independence. Within these groups, we provide training and essential business support to empower disabled individuals, enabling them to establish self-reliance and stand on their own feet. Our mission is to create opportunities for divyang people to thrive and achieve economic independence.</h4>
          </div>
          <img className="custom-futureplan-image" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYCYiQpPpbwE-Xb-s6EgKTKqw9J7mK_l3uGw&usqp=CAU' alt='image' />
        </div>

      </div>

    </div>
  );
}

export default FuturePlan;
