import React, { useState } from 'react'
import './Home.css'
import food_jpg from '../images/food.jpg'
import travel_jpg from '../images/travel.jpg'
import tech_jpg from '../images/tech.jpg'

function NewsCardFS() {

    const [Title, setTitle] = useState('Understimating the challange of raising Series a Funding');
    const [Description, setDescription] = useState("here are many variations of pasages of Lorem ipsum available, but the majority have suffored alteration in some form, by injection humour, or randomised words which dont't look even slightly believable.");
    const [Category, setCategory] = useState('Food');
    const [Image, setImage] = useState(food_jpg);

    const handleRad = (event)=>{

        const value = event.target.value

        if(value === 'rad1'){
            setTitle("Understimating the challange of raising Series a Funding");
            setDescription("There are many variations of pasages of Lorem ipsum available, but the majority have suffored alteration in some form, by injection humour, or randomised words which dont't look even slightly believable.");
            setCategory('Food');
            setImage (food_jpg);
        }
        else if(value === 'rad2'){
            setTitle("travel the challange of raising Series a Funding");
            setDescription("There are many variations of pasages of Lorem ipsum available, but the majority have suffored alteration in some form, by injection humour, or randomised words which dont't look even slightly believable.");
            setCategory('Travel');
            setImage (travel_jpg);
        }
        else if(value === 'rad3'){
            setTitle("technology the challange of raising Series a Funding");
            setDescription("There are many variations of pasages of Lorem ipsum available, but the majority have suffored alteration in some form, by injection humour, or randomised words which dont't look even slightly believable.");
            setCategory('Technology');
            setImage (tech_jpg);
        }
        
    
    }

    
 
    // const NewsCardContan = () => {


    // }
    
  return (
    
        <div  className="d-flex justify-content-around h-100">

            <div id='Left-first-section' className='my-auto'>
                <button id='btnCatagory' className='btn' type="button" >{Category}</button>
                <h1 id='Top-Title'><b>{Title}</b></h1>
                <p id='Top-Description'>{Description}</p>
                <button id='btnCatagory' className='btn' type="button" ><b>READ MORE</b></button>

            </div>

            <div id='right-first-section' className='my-auto'>

            <div>
            <img src={Image} className="rounded float-end" id='fs-Newscard-image' alt="..."/>
            </div>

            {/* toogle button */}
            <div id='fs-Radios' className='my-auto'>
            <input type="radio" id='fs-Radiobtn' value="rad1" name="radFS" onChange={handleRad} defaultChecked/> 
            <input type="radio" id='fs-Radiobtn' value="rad2" name="radFS" onChange={handleRad} /> 
            <input type="radio" id='fs-Radiobtn' value="rad3" name="radFS" onChange={handleRad} /> 
                </div>
            </div>

        </div>
   
  )
}

export default NewsCardFS
