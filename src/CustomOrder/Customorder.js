// import React, { useState } from 'react';
// import { FormControl, RadioGroup, FormControlLabel, Radio, Box } from '@mui/material';

// import InstagramIcon from '@mui/icons-material/Instagram';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import { useNavigate } from 'react-router-dom';
// import './Customorder.css';

// function App() { 
//   const nav = useNavigate();
//   const [selection, setSelection] = useState('');
//   const [Deliveryselection, setDeliverySelection] = useState('');
//   const [filter, setFilter] = useState(false);

//   const handleChange = (event) => {
//     setSelection(event.target.value);
//   };
//   const handleDeliveryChange = (event) => {
//     setDeliverySelection(event.target.value);
//   };
//   const HandleOrderList = () =>{
//     nav('/OrderList')
//   }
  
//   return (
//     <div>
//       <h1 style={{ paddingLeft: '50px', fontStyle: 'italic' ,paddingBottom:'50px'}}>Custom Order</h1>
//       <div className="container">
//         <div className="content">
//           <div className="form-row">
//             <table>
//               <tr>
//                 <td>
//                   <Box sx={{ padding: 2 }}>
//                     <FormControl component="fieldset">
//                       <RadioGroup row aria-label="veg-nonveg" name="veg-nonveg" value={selection} onChange={handleChange}>
//                         <FormControlLabel value="veg" control={<Radio />} label="Veg" />
//                         <FormControlLabel value="non-veg" control={<Radio />} label="Non-Veg" />
//                       </RadioGroup>
//                     </FormControl>
//                   </Box>
//                 </td>
//                 <td>
//                   <div className="city-selector">
//                     <label htmlFor="dropdown">City : </label>
//                     <select style={{ width: '150px' }}>
//                       <option>Select City</option>
//                       <option>Coimbatore</option>
//                       <option>Chennai</option>
//                       <option>Madurai</option>
//                       <option>Banglore</option>
//                     </select>
//                   </div>
//                 </td>
//               </tr>
//               <tr>
//                 <td>
//                   <div className="space">
//                     <label style={{ paddingLeft: '15px' }}>Count : </label>
//                     <input type="number" style={{ width: '165px', marginLeft: '28px', borderRadius: '5px', border: 'none', height: '25px' }}></input>
//                   </div>
//                 </td>
//                 <td>
//                   <div className="space">
//                     <label style={{ paddingLeft: '18px' }}>Date : </label>
//                     <input type='date' style={{ width: '140px', borderRadius: '5px', border: 'none', height: '25px' }}></input>
//                   </div>
//                 </td>
//               </tr>
//               <tr>
//                 <td>
//                   <div className="space">
//                     <label style={{ paddingLeft: '15px' }}>Delivery At : </label>
//                     <Box sx={{ padding: 2 }}>
//                     <FormControl component="fieldset">
//                       <RadioGroup row aria-label="home-work" name="home-work" value={Deliveryselection} onChange={handleDeliveryChange}>
//                         <FormControlLabel value="home" control={<Radio />} label="Home" />
//                         <FormControlLabel value="work" control={<Radio />} label="Work" />
//                       </RadioGroup>
//                     </FormControl>
//                   </Box>
//                   </div>
//                 </td>
//                 <td>
//                   <div className="space">
//                     <label htmlFor="dropdown" style={{ paddingLeft: '16px' }}>Time : </label>
//                     <select style={{ width: '150px' }}>
//                       <option>Select Time</option>
//                       <option>6 AM</option>
//                       <option>8 AM</option>
//                       <option>11 AM</option>
//                       <option>1 PM</option>
//                       <option>3 PM</option>
//                       <option>7 PM</option>
//                       <option>9 PM</option>
//                     </select>
//                   </div>
//                 </td>
//               </tr>
//             </table>
//           </div>
//           <button style={{ backgroundColor: '#d1c938', color: 'black', fontSize: '15px', border: 'none', borderRadius: '7px', padding: '8px', width: '110px', marginLeft: '40%',marginBottom: '60px'}}>Submit</button>
//         </div>
//       </div>
//       <div className='app'>
//         <div className="menu-container">
//           <h1>Create Your Menu</h1>
//           <div className="section">
//             <h2>Breakfast</h2>
//             <div className="dropdown">
//               <span role="img" aria-label="search">🔍</span>
//               <select className="custom-dropdown">
//                 <option>Select Breakfast</option>
//                 <option>Idly with sambar/coconut chutney</option>
//                 <option>Dosa with sambar/cocnut and tomato chutney</option>
//                 <option>Poori with chole</option>
//                 <option>Ven pongal</option>
//                 <option>Kichadi</option>
//                 <option>Oats</option>
//               </select>
//               <span className="dropdown-arrow">▼</span>
//             </div>
//           </div>
//           <div className="section">
//             <h2>Lunch</h2>
//             <div className="dropdown">
//               <span role="img" aria-label="search">🔍</span>
//               <select className="custom-dropdown">
//                 <option>Select Lunch</option>
//                 <option>Mini Meals</option>
//                 <option>Veg briyani</option>
//                 <option>Coriander rice</option>
//                 <option>Ghee rice</option>
//                 <option>Tomato rice</option>
//                 <option>Curd rice</option>
//               </select>
//               <span className="dropdown-arrow">▼</span>
//             </div>
//           </div>
//           <div className="section">
//             <h2>Dinner</h2>
//             <div className="dropdown">
//               <span role="img" aria-label="search">🔍</span>
//               <select className="custom-dropdown">
//                 <option>Select Dinner</option>
//                 <option>Plain utthappam with sambar/coconut chutney</option>
//                 <option>Onion utthappam with sambar/coconut chutney</option>
//                 <option>Sevai</option>
//                 <option>Veg noddles</option>
//                 <option>Podi dosa with sambar/coconut chutney</option>
//               </select>
//               <span className="dropdown-arrow">▼</span>
//             </div>
//           </div>
//           <button style={{marginLeft:'45%' , padding:'10px 20px' , backgroundColor:'rgb(4, 59, 21)' , color:'white',border:'none',borderRadius:'7px',cursor:'pointer '}} onClick={HandleOrderList}>Order</button>
//         </div>
//       </div>
//       <footer className="footer">
//         <div className="footer-column">
//           <ul>
//             <li>Home</li>
//             <li>Packages</li>
//             <li>Custom Order</li>
//             <li>About Us</li>
//             <li>Contact Us</li>
//           </ul>
//         </div>
//         <div className="footer-column">
//           <ul>
//             <li>Address :</li>
//             <li>ABC street, Coimbatore</li>
//             <li>641008</li>
//           </ul>
//         </div>
//         <div className="footer-column social">
//           <InstagramIcon />
//           <FacebookIcon />
//           <TwitterIcon />
//           <div>Copyright © 2024, PrimePlates.</div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect } from 'react';
// import { FormControl, RadioGroup, FormControlLabel, Radio, Box } from '@mui/material';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import { useNavigate } from 'react-router-dom';
// import {getAllCustomOrders, getBreakfastOptions, getLunchOptions, getDinnerOptions } from './CustomOrderServices';
// import './Customorder.css';

// function CustomOrder() {
//   const nav = useNavigate();
//   const [selection, setSelection] = useState('');
//   const [deliverySelection, setDeliverySelection] = useState('');
//   const [formData, setFormData] = useState({
//     city: '',
//     count: '',
//     date: '',
//     time: '',
//     breakfast: '',
//     lunch: '',
//     dinner: '',
//   });
//   const [breakfastOptions, setBreakfastOptions] = useState([]);
//   const [lunchOptions, setLunchOptions] = useState([]);
//   const [dinnerOptions, setDinnerOptions] = useState([]);
//   const [customOrders, setCustomOrders] = useState([]);

//   useEffect(() => {
//     fetchCustomOrders();
//     fetchMealOptions();
//   }, []);

//   const fetchCustomOrders = async () => {
//     try {
//       const response = await getAllCustomOrders();
//       setCustomOrders(response.data);
//     } catch (error) {
//       console.error('Error fetching custom orders:', error);
//     }
//   };

//   const fetchMealOptions = async () => {
//     try {
//       const [breakfastRes, lunchRes, dinnerRes] = await Promise.all([
//         getBreakfastOptions(),
//         getLunchOptions(),
//         getDinnerOptions(),
//       ]);
//       setBreakfastOptions(breakfastRes.data);
//       setLunchOptions(lunchRes.data);
//       setDinnerOptions(dinnerRes.data);
//     } catch (error) {
//       console.error('Error fetching meal options:', error);
//     }
//   };

//   const handleChange = (event) => {
//     setSelection(event.target.value);
//   };

//   const handleDeliveryChange = (event) => {
//     setDeliverySelection(event.target.value);
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async () => {
//     try {
//       const customOrderData = {
//         ...formData,
//         selection,
//         deliverySelection,
//       };
//       fetchCustomOrders();
//     } catch (error) {
//       console.error('Error creating custom order:', error);
//     }
//   };

//   const handleOrderList = () => {
//     nav('/OrderList');
//   };

//   return (
//     <div>
//       <h1 style={{ paddingLeft: '50px', fontStyle: 'italic', paddingBottom: '50px' }}>Custom Order</h1>
//       <div className="container">
//         <div className="content">
//           <div className="form-row">
//             <table>
//               <tr>
//                 <td>
//                   <Box sx={{ padding: 2 }}>
//                     <FormControl component="fieldset">
//                       <RadioGroup row aria-label="veg-nonveg" name="veg-nonveg" value={selection} onChange={handleChange}>
//                         <FormControlLabel value="veg" control={<Radio />} label="Veg" />
//                         <FormControlLabel value="non-veg" control={<Radio />} label="Non-Veg" />
//                       </RadioGroup>
//                     </FormControl>
//                   </Box>
//                 </td>
//                 <td>
//                   <div className="city-selector">
//                     <label htmlFor="dropdown">City : </label>
//                     <select name="city" value={formData.city} onChange={handleInputChange} style={{ width: '150px' }}>
//                       <option>Select City</option>
//                       <option>Coimbatore</option>
//                       <option>Chennai</option>
//                       <option>Madurai</option>
//                       <option>Bangalore</option>
//                     </select>
//                   </div>
//                 </td>
//               </tr>
//               <tr>
//                 <td>
//                   <div className="space">
//                     <label style={{ paddingLeft: '15px' }}>Count : </label>
//                     <input
//                       type="number"
//                       name="count"
//                       value={formData.count}
//                       onChange={handleInputChange}
//                       style={{ width: '165px', marginLeft: '28px', borderRadius: '5px', border: 'none', height: '25px' }}
//                     />
//                   </div>
//                 </td>
//                 <td>
//                   <div className="space">
//                     <label style={{ paddingLeft: '18px' }}>Date : </label>
//                     <input
//                       type="date"
//                       name="date"
//                       value={formData.date}
//                       onChange={handleInputChange}
//                       style={{ width: '140px', borderRadius: '5px', border: 'none', height: '25px' }}
//                     />
//                   </div>
//                 </td>
//               </tr>
//               <tr>
//                 <td>
//                   <div className="space">
//                     <label style={{ paddingLeft: '15px' }}>Delivery At : </label>
//                     <Box sx={{ padding: 2 }}>
//                       <FormControl component="fieldset">
//                         <RadioGroup row aria-label="home-work" name="home-work" value={deliverySelection} onChange={handleDeliveryChange}>
//                           <FormControlLabel value="home" control={<Radio />} label="Home" />
//                           <FormControlLabel value="work" control={<Radio />} label="Work" />
//                         </RadioGroup>
//                       </FormControl>
//                     </Box>
//                   </div>
//                 </td>
//                 <td>
//                   <div className="space">
//                     <label htmlFor="dropdown" style={{ paddingLeft: '16px' }}>Time : </label>
//                     <select
//                       name="time"
//                       value={formData.time}
//                       onChange={handleInputChange}
//                       style={{ width: '150px' }}
//                     >
//                       <option>Select Time</option>
//                       <option>6 AM</option>
//                       <option>8 AM</option>
//                       <option>11 AM</option>
//                       <option>1 PM</option>
//                       <option>3 PM</option>
//                       <option>7 PM</option>
//                       <option>9 PM</option>
//                     </select>
//                   </div>
//                 </td>
//               </tr>
//             </table>
//           </div>
//           <button
//             style={{
//               backgroundColor: '#d1c938',
//               color: 'black',
//               fontSize: '15px',
//               border: 'none',
//               borderRadius: '7px',
//               padding: '8px',
//               width: '110px',
//               marginLeft: '40%',
//               marginBottom: '60px',
//             }}
//             onClick={handleSubmit}
//           >
//             Submit
//           </button>
//         </div>
//       </div>
//       <div className="app">
//         <div className="menu-container">
//           <h1>Create Your Menu</h1>
//           <div className="section">
//             <h2>Breakfast</h2>
//             <div className="dropdown">
//               <span role="img" aria-label="search">🔍</span>
//               <select
//                 name="breakfast"
//                 value={formData.breakfast}
//                 onChange={handleInputChange}
//                 className="custom-dropdown"
//               >
//                 <option>Select Breakfast</option>
//                 {breakfastOptions.map((option) => (
//                   <option key={option} value={option}>
//                     {option}
//                   </option>
//                 ))}
//               </select>
//               <span className="dropdown-arrow">▼</span>
//             </div>
//           </div>
//           <div className="section">
//             <h2>Lunch</h2>
//             <div className="dropdown">
//               <span role="img" aria-label="search">🔍</span>
//               <select
//                 name="lunch"
//                 value={formData.lunch}
//                 onChange={handleInputChange}
//                 className="custom-dropdown"
//               >
//                 <option>Select Lunch</option>
//                 {lunchOptions.map((option) => (
//                   <option key={option} value={option}>
//                     {option}
//                   </option>
//                 ))}
//               </select>
//               <span className="dropdown-arrow">▼</span>
//             </div>
//           </div>
//           <div className="section">
//             <h2>Dinner</h2>
//             <div className="dropdown">
//               <span role="img" aria-label="search">🔍</span>
//               <select
//                 name="dinner"
//                 value={formData.dinner}
//                 onChange={handleInputChange}
//                 className="custom-dropdown"
//               >
//                 <option>Select Dinner</option>
//                 {dinnerOptions.map((option) => (
//                   <option key={option} value={option}>
//                     {option}
//                   </option>
//                 ))}
//               </select>
//               <span className="dropdown-arrow">▼</span>
//             </div>
//           </div>
//           <button
//             style={{
//               marginLeft: '45%',
//               padding: '10px 20px',
//               backgroundColor: 'rgb(4, 59, 21)',
//               color: 'white',
//               border: 'none',
//               borderRadius: '7px',
//               cursor: 'pointer',
//             }}
//             onClick={handleOrderList}
//           >
//             Order
//           </button>
//         </div>
//       </div>
//       <footer className="footer">
//         <div className="footer-column">
//           <ul>
//             <li>Home</li>
//             <li>Packages</li>
//             <li>Custom Order</li>
//             <li>About Us</li>
//             <li>Contact Us</li>
//           </ul>
//         </div>
//         <div className="footer-column">
//           <ul>
//             <li>Address :</li>
//             <li>ABC street, Coimbatore</li>
//             <li>641008</li>
//           </ul>
//         </div>
//         <div className="footer-column social">
//           <InstagramIcon />
//           <FacebookIcon />
//           <TwitterIcon />
//           <div>Copyright © 2024, PrimePlates.</div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default CustomOrder;
import React, { useState, useEffect } from 'react';
import { FormControl, RadioGroup, FormControlLabel, Radio, Box } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useNavigate } from 'react-router-dom';
import { getAllCustomOrders, getBreakfastOptions, getLunchOptions, getDinnerOptions } from './CustomOrderServices';
import './Customorder.css';

function CustomOrder() {
  const nav = useNavigate();
  const [selection, setSelection] = useState('');
  const [deliverySelection, setDeliverySelection] = useState('');
  const [formData, setFormData] = useState({
    city: '',
    count: '',
    date: '',
    time: '',
    breakfast: '',
    lunch: '',
    dinner: '',
  });
  const [breakfastOptions, setBreakfastOptions] = useState([]);
  const [lunchOptions, setLunchOptions] = useState([]);
  const [dinnerOptions, setDinnerOptions] = useState([]);
  const [customOrders, setCustomOrders] = useState([]);

  useEffect(() => {
    fetchCustomOrders();
    fetchMealOptions();
  }, []);

  const fetchCustomOrders = async () => {
    try {
      const response = await getAllCustomOrders();
      setCustomOrders(response.data);
    } catch (error) {
      console.error('Error fetching custom orders:', error);
    }
  };

  const fetchMealOptions = async () => {
    try {
      const [breakfastRes, lunchRes, dinnerRes] = await Promise.all([
        getBreakfastOptions(),
        getLunchOptions(),
        getDinnerOptions(),
      ]);
      setBreakfastOptions(breakfastRes.data);
      setLunchOptions(lunchRes.data);
      setDinnerOptions(dinnerRes.data);
    } catch (error) {
      console.error('Error fetching meal options:', error);
    }
  };

  const handleChange = (event) => {
    setSelection(event.target.value);
  };

  const handleDeliveryChange = (event) => {
    setDeliverySelection(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const customOrderData = {
        ...formData,
        selection,
        deliverySelection,
      };
      fetchCustomOrders();
    } catch (error) {
      console.error('Error creating custom order:', error);
    }
  };

  const handleOrderList = () => {
    nav('/OrderList', { state: { formData } });
  };

  return (
    <div>
      <h1 style={{ paddingLeft: '50px', fontStyle: 'italic', paddingBottom: '50px' }}>Custom Order</h1>
      <div className="container">
        <div className="content">
          <div className="form-row">
            <table>
              <tr>
                <td>
                  <Box sx={{ padding: 2 }}>
                    <FormControl component="fieldset">
                      <RadioGroup row aria-label="veg-nonveg" name="veg-nonveg" value={selection} onChange={handleChange}>
                        <FormControlLabel value="veg" control={<Radio />} label="Veg"  />
                        <FormControlLabel value="non-veg" control={<Radio />} label="Non-Veg" />
                      </RadioGroup>
                    </FormControl>
                  </Box>
                </td>
                <td>
                  <div className="city-selector">
                    <label htmlFor="dropdown" style={{fontSize:"20px" , fontStyle:'italic'}}>City : </label>
                    <select name="city" value={formData.city} onChange={handleInputChange} style={{ width: '150px' }}>
                      <option>Select City</option>
                      <option>Coimbatore</option>
                      <option>Chennai</option>
                      <option>Madurai</option>
                      <option>Bangalore</option>
                    </select>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="space">
                    <label style={{ paddingLeft: '15px',fontSize:'20px', fontStyle:'italic' }}>Count : </label>
                    <input
                      type="number"
                      name="count"
                      value={formData.count}
                      onChange={handleInputChange}
                      style={{ width: '165px', marginLeft: '28px', borderRadius: '5px', border: 'none', height: '25px' }}
                    />
                  </div>
                </td>
                <td>
                  <div className="space">
                    <label style={{ paddingLeft: '18px',fontSize:'20px', fontStyle:'italic' }}>Date : </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      style={{ width: '140px', borderRadius: '5px', border: 'none', height: '25px' }}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="space">
                    <label style={{ paddingLeft: '15px',fontSize:'20px', fontStyle:'italic' }}>Delivery At : </label>
                    <Box sx={{ padding: 2 }}>
                      <FormControl component="fieldset">
                        <RadioGroup row aria-label="home-work" name="home-work" value={deliverySelection} onChange={handleDeliveryChange}>
                          <FormControlLabel value="home" control={<Radio />} label="Home" />
                          <FormControlLabel value="work" control={<Radio />} label="Work" />
                        </RadioGroup>
                      </FormControl>
                    </Box>
                  </div>
                </td>
                <td>
                  <div className="space">
                    <label htmlFor="dropdown" style={{ paddingLeft: '16px',fontSize:'20px', fontStyle:'italic' }}>Time : </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      style={{ width: '150px' }}
                    >
                      <option>Select Time</option>
                      <option>6 AM</option>
                      <option>8 AM</option>
                      <option>11 AM</option>
                      <option>1 PM</option>
                      <option>3 PM</option>
                      <option>7 PM</option>
                      <option>9 PM</option>
                    </select>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <button
            style={{
              backgroundColor: '#d1c938',
              color: 'black',
              fontSize: '15px',
              border: 'none',
              borderRadius: '7px',
              padding: '8px',
              width: '110px',
              marginLeft: '40%',
              marginBottom: '60px',
            }}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="app">
        <div className="menu-container">
          <h1>Create Your Menu</h1>
          <div className="section">
            <h2>Breakfast</h2>
            <div className="dropdown">
              <span role="img" aria-label="search">🔍</span>
              <select
                name="breakfast"
                value={formData.breakfast}
                onChange={handleInputChange}
                className="custom-dropdown"
              >
                <option>Select Breakfast</option>
                {breakfastOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <span className="dropdown-arrow">▼</span>
            </div>
          </div>
          <div className="section">
            <h2>Lunch</h2>
            <div className="dropdown">
              <span role="img" aria-label="search">🔍</span>
              <select
                name="lunch"
                value={formData.lunch}
                onChange={handleInputChange}
                className="custom-dropdown"
              >
                <option>Select Lunch</option>
                {lunchOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <span className="dropdown-arrow">▼</span>
            </div>
          </div>
          <div className="section">
            <h2>Dinner</h2>
            <div className="dropdown">
              <span role="img" aria-label="search">🔍</span>
              <select
                name="dinner"
                value={formData.dinner}
                onChange={handleInputChange}
                className="custom-dropdown"
              >
                <option>Select Dinner</option>
                {dinnerOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <span className="dropdown-arrow">▼</span>
            </div>
          </div>
          <button
            style={{
              marginLeft: '45%',
              padding: '10px 20px',
              backgroundColor: '#d1c938',
              color: 'black',
              fontSize: '16px',
              fontWeight: 'bold',
              borderRadius: '7px',
              border: 'none',
              cursor: 'pointer',
              marginTop: '20px',
            }}
            onClick={handleOrderList}
          >
            Order List
          </button>
        </div>
      </div>
      <div className="footer">
        <div className="footer-content">
          <p>Stay connected with us:</p>
          <div className="social-icons">
            <InstagramIcon />
            <FacebookIcon />
            <TwitterIcon />
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default CustomOrder;
