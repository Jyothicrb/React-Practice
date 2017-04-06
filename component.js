function Welcome(props){
  return <h1>"welcome" {props.user} </h1>;
}
function App()
{
return( 
  <div>
    <Welcome user = "Sarala"/>
    <Welcome user = "Radhi"/>
    <Welcome user = "Yogi"/>
    <Welcome user = "Shanthi"/>
    </div> 
      );
}
      
      ReactDOM.render( 
      <App/>,
      document.getElementById('root')
      );
      <!-- HTML Code should contain a div element defined -->
