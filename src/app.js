console.log("I am app.")

const app = {
    tite: "Indecision App",
    subtitle: "This is some info",
    options: ['One','Two']
}
//JSX - Javascript XML
const template = (
<div> 
    <h1>{app.title}</h1> 
    {app.subtitle && <p>{app.subtitle}</p> }
    {app.options.length > 0 ? "Here are your options" : "No Options"}
</div>)

const user = {
    name: "Sona",
    age: "100",
    location: "New York"
} 

function getLocation(location){
    if(location){
        return <p>Location: {location}</p>
    } else {
        return undefined
    }
}

const userName = "Sona";
const userAge = "27";
const userLocation = "SF";
const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)
  
const appRoot = document.getElementById('app')

ReactDOM.render(template,appRoot); 