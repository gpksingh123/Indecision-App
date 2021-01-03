console.log("I am app.")

//only render the subtitle (and p tag) if subtitle exist - logical and operator
//render new p tag - if options.length > 0 "Here are your options" else "No Options"

var app = {
    tite: "Indecision App",
    subtitle: "This is some info",
    options: ['One','Two']
}
//JSX - Javascript XML
var template = (
<div> 
    <h1>{app.title}</h1> 
    {app.subtitle && <p>{app.subtitle}</p> }
    {app.options.length > 0 ? "Here are your options" : "No Options"}
</div>)

var user = {
    // name: "Sona",
    age: "100",
    // location: "New York"
}

function getLocation(location){
    if(location){
        return <p>Location: {location}</p>
    } else {
        return undefined
    }
}

var userName = "Sona";
var userAge = "27";
var userLocation = "SF";
var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)
  
var appRoot = document.getElementById('app')

ReactDOM.render(template,appRoot); 