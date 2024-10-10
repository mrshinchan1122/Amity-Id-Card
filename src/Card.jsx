import ProfilePic from './assets/sai.jpg'
import Amitylogo from './assets/amity-id-logo1.png'

function Card(){
    return (
        <div className= "card-component">
            <div className="title">
                <img className = "amity-logo" src = {Amitylogo} alt="amity-logo" />
                <div className="titleName">
                <h1>AMITY</h1>
                <h2>UNIVERSITY</h2>
                <h3>-------RAJASTHAN-------</h3>
            </div>
                
            </div>

           <div className="card-info">
           <img className = "card-image"src = {ProfilePic} alt = "sai-ganesh-Id-card"/>
            
           <p className="card-para">
            <span className="name">Addala Sai Ganesh</span><br />
            <span className="course">B.Tech (CSE)</span><br />
            <span className="year">2021-2025</span>
        </p>

           </div>

           <div className="signature">
            <p>Signature Authority</p>
            <p>Holder's Signature</p>
           </div>
        </div>
    );
}

export default Card