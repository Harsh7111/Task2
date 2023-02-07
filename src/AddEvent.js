import React from 'react';
import './AddEvent.css';
function AddEvent() {

    return (

        <div className="form">
            <h1 className='tagi'> Register your Event :-</h1>
        <div className="form-body">
            <div className="Eventname">
                <label className="form__label">Event Name :</label>
                <input className="form__input" type="text" id="EventName" placeholder="Event Name"/>
            </div>
            <div className="startdate">
                <label className="form__label" >Start Date: </label>
                <input  type="date"  id="startdate"  className="form__input"placeholder=""/>
            </div>
            
            <div className="lastdate">
                <label className="form__label" >End Date: </label>
                <input  type="date"   className="form__input"/>
            </div>
            <div className="location">
                <label className="form__label" > Location :</label>
                <input  type="form_input"  className="form__input" placeholder="Enter your location"/>
            </div>
            <div className="categaory">
                <label className="form__label" >Category: </label>
                <select>
                    <option value="abc">Chooes vaild categaory</option>
                    <option value="abc">Chooe</option>
                    <option value="abc">Chcategaory</option>
                    <option value="abc">Chegaory</option>
                </select>
            </div>

            <div className="description">
                <label className="form__label" >description :</label>
                <input className="form__input" type="textarea" id="description"  placeholder="Enter your description"/>
            </div>
        </div>
        <div className="footer">
            <button type="submit" className="btn">Register</button>
        </div>
    </div>      
  
    );
}

export default AddEvent;
