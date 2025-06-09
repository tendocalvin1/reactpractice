

import ProfilePicture from './assets/WhatsApp Image.jpg'
function Card(){
        return(
            <div className="card">
                <img src={ProfilePicture} className='card-image' alt="Profile Picture"></img>
                <h2 className='card-title'>Tendo Calvin</h2>
                <p className='card-text'>I am a Software Engineer and Data Scientist who uses Python, JavaScript, Java and Rust.</p>
            </div>
        );
}

export default Card