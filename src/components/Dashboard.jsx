import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/dashboard.css'
import axios from 'axios'

function Dashboard () {

useEffect(() => {
 axios.get('https://coding.zippy.com.gh/api/get_order_statuses').then(res => {
        console.log(res)
 });

}, []) 



  return (
    <div className='trackpackage'>
    <div className='trackSection grid-col-span-2'>
    <div className='track'><h4>Track your package</h4></div>
    <div className='search'>
    <input type="text" name="trackingNumber" placeholder="Enter tracking number"/>
    </div>
    <div className='btnFindSearch'>
    <div className='searchBtn'>
    <button id='searchButton'>Search package</button>
    </div> 
    <div className='findBtn'>
    <button id='CantFindBtn'>Can't find</button>
    </div> 
    </div>
    </div> 
    <div className='discountCode'>
    <h3>Save up to 70%</h3>
    <p>Use code <span>ZIPPY01</span> and save up to <span>70%</span> cost</p>
   <div style={{width:'100%'}}><button className='claimBtn'>Claim now</button></div>
   </div>
  
   <div className='HistoryTable'>
   <Table className="table table-striped">
   <thead>
   <tr>
   <th>Tracking number</th>
   <th>Route</th>
   <th>Status</th>
   <th></th>
   </tr>
   </thead>
   <tbody>
   
   </tbody>
   </Table>
   </div>
 
    <div className='History'>
    <div className='packageHistoryH3'>
    <h3>Package History<span><img src='src/assets/images/close-circle.svg'></img></span></h3>
    </div>
    <div className='map'>
   {/* <iframe
  style={{width:'450',
  height:'250',
  frameborder:'0',border:'0'}}
  referrerpolicy="no-referrer-when-downgrade"
  src="https://www.google.com/maps/embed/v1/place
  ?key=YOUR_API_KEY
  &q=Eiffel+Tower,Paris+France"
  allowfullscreen>
  </iframe>*/}
  <img src='src\assets\images\Rectangle 6473.svg'></img>
    </div>
    <div className='packageHistory'>
    <h4>Tracking number</h4>
    <p>ZIPJF20243004</p>
    <div><hr></hr></div>
    <div className='stepper'>
    
    </div>
    <div className='PackageHistoryBtn'>
    <div style={{width:'100%'}}><button className='printBtn'>Print History</button></div>
    <div style={{width:'100%'}}><button className='shareBtn'>Share</button></div>
    </div>
    </div>
    </div>    
    </div>
  )
}

export default Dashboard;
