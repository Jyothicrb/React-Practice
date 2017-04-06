function timetick() {
  const element = (
  <div>
    <h1> Do you know the time ? </h1>
    <h2>It is {new Date().toLocaleTimeString()}.</h2>
  </div>
  );
ReactDOM.render
(
  element,
 document.getElementById('root')
 
);  
}
setInterval(timetick(), 2000); 
/*HTML
<!--<div id="root">
 *   <!-- This element's contents will be replaced with your component. -->
* </div> -->
