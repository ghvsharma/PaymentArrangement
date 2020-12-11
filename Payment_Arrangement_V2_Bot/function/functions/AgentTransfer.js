const axios = require('axios');
// This is your new function. To start, set the name and path on the left.

exports.handler =async function(context, event, callback) {
 try {
	let Listen = false;
  let Remember = {};
  let Collect = false;
  let Tasks = false;
  let Redirect = false;
  let Handoff = false;
  let Say = "";
  
  // Add your code here.  
  // Initialize Remember variables *********. 
  console.log("AgentTransfer"); 
  //****************** put your business logic here.*********//////////// 



  //****************** End of your business logic.*********//////////// 
  //***************** * Fill parameters for Response Builder ******////
  
  Say="You will be transferred to an agent."; 

const functions = Runtime.getFunctions();
let path = functions['responseBuilder'].path;
//console.log("path:"+path);
let RB = require(path);

await RB.responseBuilder(Say, Listen, Remember, Collect, Tasks, Redirect, Handoff, callback);

  } catch (error) {
    console.log("error found") ;
  console.error(error.message);    
  callback( error);
}
};
