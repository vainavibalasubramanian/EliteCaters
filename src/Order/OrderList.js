import React, { useState } from 'react';
import './OrderList.css';
import { useLocation } from 'react-router-dom';

function OrderList() {
  const location = useLocation();
  const { formData } = location.state || {};
  const [data, setFormData] = useState({
    meals: {
      breakfast: [],
      lunch: [],
      dinner: [],
    },
    address: '',
    count: 1,
    date: '',
    time: '',
    preference: 'veg',
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const [mealType, foodItem] = name.split('.');
      setFormData((prevData) => ({
        ...prevData,
        meals: {
          ...prevData.meals,
          [mealType]: checked
            ? [...prevData.meals[mealType], foodItem]
            : prevData.meals[mealType].filter((item) => item !== foodItem),
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
  };

  return (
    <div className="order-container">
      <h1 >Place Your Order</h1>
      <form  onClick={handleSubmit}>
        <div className="section" style={{backgroundColor:'black' , color:'white' , padding:'20px 20px'}}>
          <h2 style={{paddingLeft:'10%'}}>Meal Selection</h2>
          <div className="meal-section">
          {formData ? (
            <div>
              <p><strong>Breakfast:</strong> {formData.breakfast}</p>
              <p><strong>Lunch:</strong> {formData.lunch}</p>
              <p><strong>Dinner:</strong> {formData.dinner}</p>
            </div>
          ) : (
            <p>No order data available.</p>
          )}
          </div>
        </div>

        <div className="section" style={{paddingLeft:'10%', fontSize:'20px' }}>
          <h2>Delivery Details</h2>
          <div style={{paddingBottom:'20px' }}>
            Address  
            <textarea type="textBox"
            name="address"
            value={data.address}
            onChange={handleInputChange}
            required
            style={{PaddingTop:'30px' , width:'30%' , marginLeft:'5px'}}
            ></textarea>
          </div>
          <div style={{paddingBottom:'20px'}}>
            Count 
            <input
              type="number"
              name="count"
              value={data.count}
              onChange={handleInputChange}
              min="1"
              required
              style={{marginLeft:'20px'}}
            />
          </div>
          <div style={{paddingBottom:'20px'}}>
            Date 
            <input
              type="date"
              name="date"
              value={data.date}
              onChange={handleInputChange}
              required
              style={{marginLeft:'30px'}}
            />
          </div>
          <div >
            Time 
            <input
              type="time"
              name="time"
              value={data.time}
              onChange={handleInputChange}
              required
              style={{marginLeft:'30px'}}
            />
          </div>
        </div>
        <div style={{fontSize:'30px' , paddingLeft:'150px'}}>₹300</div>
        <button type="submit" style={{marginLeft:'10%' , fontSize:'20px' , backgroundColor:'black', color:'white' , borderRadius:'6px' , padding:'10px 20px'}}>Pay</button>
      </form>
      {orderPlaced && (
        <div className="popup" style={{marginLeft:'10%' , fontSize:'25px'}}>
          <h2>Order Placed</h2>
          <p>Your order has been placed successfully!</p>
          <button onClick={() => setOrderPlaced(false)} style={{marginLeft:'10%' , fontSize:'20px' , backgroundColor:'black', color:'white' , borderRadius:'6px' , padding:'10px 20px'}}>Close</button>
        </div>
      )}
    </div>
  );
}

export default OrderList;
