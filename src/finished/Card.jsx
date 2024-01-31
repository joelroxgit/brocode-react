import profilepic from "./assets/giga.jpg"
function Card () {
    return(
        <div className="card">
        <img className="profile-img" src={profilepic}></img>
        <h2 className="card-title">joelrox</h2>
        <p className="card-text">Iam a software developer</p>
        </div>
    )
}

export default Card;