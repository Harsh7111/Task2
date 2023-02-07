import React from 'react';
import './Home.css';
import { BrowserRouter as Router,Route,Link,Routes} from 'react-router-dom';
import logo from './sport.png';
import logo1 from './meetup.png';

import logo2 from './food.png';
import logo3 from './conn.png';
import logo4 from './buss.png';
import AddEvent from './AddEvent';
function Home() {
  
  return (
    

    <section className='hero__section' id="home">
    <div>
        <nav className='navbar'>
        <ul className="nav-links">
        <li className="nav-items"><a href="#">Home</a></li>
        <li className="nav-items"><a href="#">About</a></li>
        <li className="nav-items"><a href="#">blog</a></li>
        <li className="nav-items"><a href="#">Services</a></li>
    </ul>

    <div className="right-container">
        <input type="text" className="search-box" placeholder="search"/ >
             
    <button className='sub-btn'>
        <Link to="/AddEvent" >Add Event</Link>
        </button> 
    </div>
    </nav>  
    </div>
<div className='clr'>
    <div className='editbar'>
        <select className='city' >
            <option  > Chooes City</option>
            <option>Ahmedaab</option>
            <option>Surat</option>
            <option>Gandhinagar</option>
            <option>Mumbai</option>
            <option>dehli</option>
        </select>

        <select  className='city' >
            <option  > Chooes Category </option>
            <option>Food and drink</option>
            <option>sport</option>
            <option>Meetup</option>
            <option>Concerts</option>
            <option>Business</option>
        </select>

        <select className='city' >
            <option  > Chooes date</option>
            <option>Today</option>
            <option>Tommorrow</option>
            <option>This Weekend</option>
            <option>Upcomming Event</option>
          </select>


    </div>

        
      <h1 className="title">Things to do in & around Category Of Event</h1>
  
  
    <div className="categori">
        <div className="card-container">

            <div className="card">
                <img src={logo} alt="" className="card-img"/>
                <div className="card-body">
                    <h2 className="name">sports</h2>
                    <h6 className="des">Lorem ipsum dolor sit amet consectetur.</h6>
                    <button className="watchlist-btn">view to details</button>
                </div>
            </div>

            <div className="card">
                <img src={logo1} alt="" className="card-img" />
                <div className="card-body">
                    <h2 className="name">Meetup</h2>
                    <h6 className="des">Lorem ipsum dolor sit amet consectetur.</h6>
                    <button className="watchlist-btn">view to details</button>
                </div>
            </div>

            <div className="card">
                <img src={logo2} alt="" className="card-img" />
                <div className="card-body">
                    <h2 className="name">Food & drink</h2>
                    <h6 className="des">Lorem ipsum dolor sit amet consectetur.</h6>
                    <button className="watchlist-btn">view to details</button>
                </div>
            </div>

            <div className="card">
                <img src={logo3} alt="" className="card-img" />
                <div className="card-body">
                    <h2 className="name">Concerts</h2>
                    <h6 className="des">Lorem ipsum dolor sit amet consectetur.</h6>
                    <button className="watchlist-btn">view to details</button>
                </div>
            </div>

            <div class="card">
                <img src={logo4} alt="" class="card-img" />
                <div className="card-body">
                    <h2 className="name">Business</h2>
                    <h6 className="des">Lorem ipsum dolor sit amet consectetur.</h6>
                    <button className="watchlist-btn">view to details</button>
                </div>
            </div>

        </div>
    </div>
    
</div>
  

    <div className='display'>
    
    <Routes>
                <Route  path="/AddEvent" element={<AddEvent/>}></Route>
     </Routes>
    <h1 className="title">Deatails for all Event</h1>
    <img src={logo4} alt="" className="data" />
    <div className="card-body1">
                    <h2 className="name1">Concerts</h2>
                    <h6 className="des1">Lorem ipsum dolor sit amet consectetur.</h6>
                    
                </div>
                <img src={logo3} alt="" className="data" />
                    <div className="card-body1">
                    <h2 className="name1">Concerts</h2>
                    <h6 className="des1">Lorem ipsum dolor sit amet consectetur.</h6>

                </div>

    </div>
  
    
            
    </section>
  )
}

export default Home
