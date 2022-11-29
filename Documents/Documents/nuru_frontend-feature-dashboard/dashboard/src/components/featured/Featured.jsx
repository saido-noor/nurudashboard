import "./feature.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Featured = () => {
  return (

    
    <div className="feature">
      <div className="top">
      </div>
      <div className="bottom">
      <p className="amount1">Sent Sms</p>
      <input type="date" className="start" name="birthday"/>

      <hr/>
        <div className="featuredChart">
          <CircularProgressbar value={59} text={"59%"} strokeWidth={15} />
        </div>
        <p className="strong"><strong>.</strong> sms</p>
        <div className="summary">
        </div>
      </div>
      
    
    </div>
  );
};
export default Featured;