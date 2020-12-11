exports.handler =async function(context, event, callback) {
    let Say=event.Say;
    let Listen = event.Listen;
    let Remember = event.Remember;
    let Collect = event.Collect;
    let Tasks = event.Task;
    let Redirect = event.Redirect;
    let Handoff = event.Handoff;
    
   let responseObject = {
   "actions": [
    {
        "say": {
            "speech": "This is a debug function"
        }
    } 
            ]
  };
console.log("This is a debug function");
 
  callback(null, responseObject);
}