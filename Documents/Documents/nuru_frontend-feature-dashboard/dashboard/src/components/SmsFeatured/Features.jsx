import "./features.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";



const Features = () => {
  return (
    <div>
        <div className='sms-container'>
            <div className='sms-content'>
               <p>Total SMS</p>
               <br />
               <p>2000</p>
            </div>

            <div className='consumed'>
               <p>Consumed SMS</p>
               <br />
               <p>2000</p>
            </div>

            <div className='total'>
               <p>Total Sms</p>
               <br />
               <p>2000</p>
            </div>
        </div>
        <br />
        <br />
        <div className="container">
            <div className="top">
              {/* <h1 className="title">Sent SMS</h1>
              <MoreVertIcon fontSize="small" /> */}
            </div>
            <div className="bottom">
            <p className="amount1">Costs</p>
            <p className="title1">Total Cost</p>
              <div className="featuredChart">
                <CircularProgressbar value={59} text={"4.213%"} strokeWidth={15} />
              </div>
              <p className="strong"><strong>.</strong> sms</p>
              <div className="summary">
              </div>
            </div>
            <div className="bottom">
          
            <p className="title2">Total Cost</p>
              <div className="featuredChart">
                <CircularProgressbar value={59} text={"4.213%"} strokeWidth={15} />
              </div>
              <p className="strong"><strong>.</strong> sms</p>
              <div className="summary">
              </div>
            </div>
            
        </div>

        <div className="container">
            <div className="top">
              {/* <h1 className="title">Sent SMS</h1>
              <MoreVertIcon fontSize="small" /> */}
            </div>
            <div className="bottom">
            <p className="amount1">Costs</p>
            <p className="title1">Total Cost</p>
              <div className="featuredChart">
                <CircularProgressbar value={59} text={"4.213%"} strokeWidth={15} />
              </div>
              <p className="strong"><strong>.</strong> sms</p>
              <div className="summary">
              </div>
            </div>
            <div className="bottom">
          
            <p className="title2">Total Cost</p>
              <div className="featuredChart">
                <CircularProgressbar value={59} text={"4.213%"} strokeWidth={15} />
              </div>
              <p className="strong"><strong>.</strong> sms</p>
              <div className="summary">
              </div>
            </div>
            
        </div>
    </div>
  );
};
export default Features;