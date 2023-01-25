import React, { useState } from 'react'
import './Home.css'
import food_jpg from '../images/food.jpg'
import { useEffect } from 'react'
import { BsPlayCircle } from 'react-icons/bs';



function NewsCardFS() {
    const [Data, setData] = useState([]);
    const [Title, setTitle] = useState();
    const [Description, setDescription] = useState();
    const [Category, setCategory] = useState('Food');
    const [Image, setImage] = useState();
    const [Video_url, setVideo_url] = useState();
    

    useEffect(()=>{
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NzM5MzAwNDksImlzcyI6Ik5ld3NBUFAiLCJleHAiOjE2NzY1MjIwNDksInN1YiI6Ik5ld3MgQVBQIEF1dGhlbnRpY2F0aW9uIn0.PcSpXqX6tLmFSC6-dfKvkPKwUxzrB_6ZGrgwnLDcmCQ");

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("https://news.wrteam.in/Api/get_breaking_news?access_key=5670&language_id=14", requestOptions)
        .then(response => response.json())
        .then(result => {
            setData(result.data)
            setTitle(result.data[0].title);
            setDescription(result.data[0].description.slice(0, 350)+"...");
            setCategory('Food');
            setImage (result.data[0].image);
            // setVideo_url(result.data[0].content_value);
        })
        .catch(error => console.log('error', error));
    },[]);
    
    const handleRad = (event)=>{

        const value = event.target.value
       
        if(value === 'rad1'){
            setTitle(Data[0].title);
            setDescription(Data[0].description.slice(0, 350)+"...");
            setCategory('Food');
            setImage (Data[0].image);
            setVideo_url(Data[0].content_value);

            
        }
        else if(value === 'rad2'){
            setTitle(Data[1].title);
            setDescription(Data[1].description.slice(0, 350)+"...");
            setCategory('Food');
            setImage (Data[1].image);
            setVideo_url(Data[1].content_value);

        }
        else if(value === 'rad3'){
            setTitle(Data[2].title);
            setDescription(Data[2].description.slice(0, 350)+"...");
            setCategory('Food');
            setImage (Data[2].image);
            setVideo_url(Data[2].content_value);

        }
        
    
    }
    

    
 
    // const NewsCardContan = () => {


    // }
    
  return (

    
        <div  className="d-flex justify-content-around h-100">

{/* <div className="col-12 " dangerouslySetInnerHTML={{__html: data}}></div> */}

            <div id='Left-first-section' className='my-auto'>
                <button id='btnCatagory' className='btn' type="button" >{Category}</button>
                <h1 id='Top-Title'><b>{Title}</b></h1>
                <p id='Top-Description' dangerouslySetInnerHTML={{__html: Description}}></p>
                <button id='btnCatagory' className='btn' type="button" ><b>READ MORE</b></button>
                <a id='btnpaly'  href={Video_url}><BsPlayCircle id='btnpaly-logo' size={40}/></a>


            </div>

            <div id='right-first-section' className='my-auto'>

            <div>
            <img src={Image} className="rounded float-end" id='fs-Newscard-image' alt="..."/>
            </div>

            {/* toogle button */}
            <div id='fs-Radios' className='my-auto'>
            <input type="radio" id='fs-Radiobtn' value="rad1" name="radFS" onClick={handleRad} defaultChecked/> 
            <input type="radio" id='fs-Radiobtn' value="rad2" name="radFS" onClick={handleRad} /> 
            <input type="radio" id='fs-Radiobtn' value="rad3" name="radFS" onClick={handleRad} /> 
                </div>
            </div>

        </div>
        
   
  )
}

export default NewsCardFS
