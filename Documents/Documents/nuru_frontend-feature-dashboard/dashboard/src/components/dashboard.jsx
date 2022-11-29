import Card from "./card/Card"
import Chart from "./charts/Chart"
import Featured from "./featured/Featured"
import Sidebar from "./Sidebar"

const Dashboard =()=>{
    return(
        <div>
            <Sidebar/>
            <Card/>
            <Featured/>
            <Chart/>
        </div>
    )
}

export default Dashboard