import "./TripStyles.css";

function TripData(props) {
  return (
    <div className="t-card">
      <div className="timage">
        <img src={props.image} alt="ek pic hai" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}

export default TripData;
