import React from 'react'
import about from '../images/About.png'
import about1 from '../images/image 1.png'
import about2 from '../images/image 2.png'
import about3 from '../images/image  3.png'
import './AboutUs.css'
function AboutUs() {
  //   const [Data,setData]=useState([]);
  //   const [Description,setDescription] = useState([]);

  //   useEffect(()=>{
  //   var myHeaders = new Headers();
  // myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NzM4NTMxMjEsImlzcyI6Ik5ld3NBUFAiLCJleHAiOjE2NzY0NDUxMjEsInN1YiI6Ik5ld3MgQVBQIEF1dGhlbnRpY2F0aW9uIn0.aKZFkV4bqFGOKok5CAX897sqBkERhVF6qiPe2CIYPvw");
  // myHeaders.append("Cookie", "ci_session=12af9107c7cb1f15a290434b44c1be817b862317; csrf_cookie_name=2edd6e5df33b18ac19c9b5bed190f876");

  // var requestOptions = {
  //   method: 'POST',
  //   headers: myHeaders,
  //   redirect: 'follow'
  // };

  // fetch("https://news.wrteam.in/Api/get_pages?access_key=5670&language_id=14", requestOptions)
  //   .then(response => response.json())
  //   .then(result => {
  //     setData(result.data)
  //     setDescription(result.data[2].page_content)
  // console.log(result)
  //   })
  //   .catch(error => console.log('error', error));

  // },[])
  // console.log(Data);


  return (

    <div >
      {/* <p>{Description}</p> */}

      <div className="mx-5">
        <div id="about" >
          <img src={about} className="img-fluid" alt="..." />
        </div>
        <div id="about">
          <h2 className="A my-4" style={{ color: "#1B2D51" }}><strong> About Us </strong></h2>
          <p> Most people wouldn't even consider getting a physical morning newspaper anymore,so we depend on digital source for our news. Finding an app that helps your get the news you want in a timely manner is essential.<br /><br /><br />
            Now all are in your handy. The Web contains so many polupar categories of news. Such as breaking news, top news, travels, sports, health,entaintainment,world etc. You can read,bookmark,like,comment and share the news with others
          </p>
        </div>
      </div>
      <div className='-company'>
        <div className="conatiner d-flex flex-row" id="our">
          <div className='img-wrapper' >
            <div className="text-center">
              <img src={about1} className="img-thumbnail" id='i1' alt="..." />
            </div>
            <div className="text-center">
              <img src={about3} className="img-thumbnail" id='i2' alt="..." />
            </div>
            <div className="text-center">
              <img src={about2} className="img-thumbnail" id='i3' alt="..." />
            </div>
          </div>
          <div className='container A3'>
            <h1> About Our Company</h1>
            <p> Our company that provide multi-technology services with multi-skilled and highly competent work force and strong globle presence.<br /><br /><br />
              Our motto of help the customer to expand their business with help of technology. Yes, we aren't alone, We are team of Devlopers & Thechnology lovers who are Enthusiastic, Passionate, Skilled, Creative, Multi-Telented, Ready to Strive,Helpful & always there to support our lovable clients, who are integral part of our team. </p>
          </div>
        </div>
      </div>
    </div>
  )
} export default AboutUs
