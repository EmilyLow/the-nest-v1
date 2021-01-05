
function Stub(props) {



    return (
        <div>
             <img src={props.datum.imgSrc} alt="bird" />
             <h3>{props.datum.title}</h3>
             <p>{props.datum.blurb}</p>
             <p>{props.datum.author}</p>
        </div>
    )
}


export default Stub;