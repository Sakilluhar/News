import React, { useState } from 'react'
import './Home.css'
import { useEffect } from 'react'
import { BsPlayCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { BearerToken } from '../Tokens';
  



function NewsCardFS() {
    const [Data, setData] = useState([]);
    const [Title, setTitle] = useState();
    const [Description, setDescription] = useState();
    const [Category, setCategory] = useState('Breaking News');
    const [Image, setImage] = useState();
    const [Video_url, setVideo_url] = useState();
    const [Nid, setNid] = useState();
    const [Category_id, setCategory_id] = useState();
    const BToken = BearerToken();

    useEffect(()=>{
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+BToken);

        var formdata = new FormData();
        formdata.append("access_key", "5670");
        formdata.append("language_id", "14");

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
        };

        // fetch("https://news.wrteam.in/Api/get_breaking_news", requestOptions)
        fetch("http://news.thewrteam.in/Api/get_breaking_news", requestOptions)
        .then(response => response.json())
        .then(result => {
            setData(result.data)
            setTitle(result.data[0].title);
            setDescription(result.data[0].description.slice(0, 350)+"...");
            setCategory('Breaking News');
            setImage (result.data[0].image);
        })
        .catch(error => console.log('error', error));
    },[]);
    
    const handleRad = (event)=>{

        const value = event.target.value
       
        if(value === 'rad1'){
            setTitle(Data[0].title);
            setDescription(Data[0].description.slice(0, 350)+"...");
            setCategory('Breaking News');
            setImage (Data[0].image);
            setVideo_url(Data[0].content_value);
            // setNid(Data[0].id);
            // setCategory_id(Data[0].category_id);

            
        }
        else if(value === 'rad2'){
            setTitle(Data[1].title);
            setDescription(Data[1].description.slice(0, 350)+"...");
            setCategory('Breaking News');
            setImage (Data[1].image);
            setVideo_url(Data[1].content_value);

        }
        else if(value === 'rad3'){
            setTitle(Data[2].title);
            setDescription(Data[2].description.slice(0, 350)+"...");
            setCategory('Breaking News');
            setImage (Data[2].image);
            setVideo_url(Data[2].content_value);

        }
        
    
    }
    

    
 
    // const NewsCardContan = () => {


    // }
    
  return (

    
        <div id='fs-main' className="h-100">

{/* <div className="col-12 " dangerouslySetInnerHTML={{__html: data}}></div> */}
            <div id='body-first-section' className=''>
            <div id='Left-first-section' className='my-auto'>
                <button id='btnCatagory' className='btn' type="button" >{Category}</button>
                <h1 id='Top-Title'><b>{Title}</b></h1>
                <p id='Top-Description' dangerouslySetInnerHTML={{__html: Description}}></p>
                <div>
                {/* <Link id='btnReadMore' className='btn' type="button" to={"/NewsView?Nid=" + Data[0].id + "&Cid=" + Data[0].category_id} ><b>READ MORE</b></Link> */}
                <a id='btnpaly'  href={Video_url}><BsPlayCircle id='btnpaly-logo' size={40}/></a>
                </div>
            </div>

            <div>
            <img src={Image} className="float-end" id='fs-Newscard-image' alt="..."/>
            </div>

            </div>
            <div id='fs-Radios' className=''>
            <input type="radio" id='fs-Radiobtn' value="rad1" name="radFS" onClick={handleRad} defaultChecked/> 
            <input type="radio" id='fs-Radiobtn' value="rad2" name="radFS" onClick={handleRad} /> 
            <input type="radio" id='fs-Radiobtn' value="rad3" name="radFS" onClick={handleRad} /> 
            </div>

        </div>
        
   
  )
}

export default NewsCardFS
