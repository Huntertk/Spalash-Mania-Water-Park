import React from 'react'
import '../styles/mapComp.scss'

const HomeMap = () => {
  return (
    <div style={{margin:'2rem  auto', width: '100%', display:'flex', alignItems:'center', flexDirection:'column'}}>

      <h1 style={{margin:'1rem'}}>Splash Mania WaterPark</h1>
      
      <iframe width="360" height="400" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=SplashMania%20WaterPark,%20Jalan%20Cove%20Sentral%204,%20Bandar%20Gamuda%20Cove,%20Dengkil,%20Selangor,%20Malaysia+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population calculator map</a></iframe>

      <div className="opeationHour">
        <h1>Operating Hours</h1>
        <p>Thursday - Tuesday : 10am - 6pm (Closed on Wednesday EXCEPT during Malaysia public holidays and school holidays)</p>
      </div>
    </div>
  )
}

export default HomeMap