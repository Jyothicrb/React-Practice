<!-- First react script -->

function fname(user) 
{
  return user.firstName + "  " + user.secondName ;
};

const user = {
  firstName: "Jyo", 
  secondName: "Pa"
};
const someName = (
  <h1> what's Up !! {fname(user)} </h1>);
ReactDOM.render(
    someName,
      document.getElementById('root')
    );
    
    <!-- 
    *<div id="root">
    *<!-- This element's contents will be replaced with your component. -->
    *</div>
    -->
