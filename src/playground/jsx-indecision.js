const app = {
    tite: "Indecision App",
    subtitle: "This is some info",
    options: []
}
//JSX - Javascript XML
const onFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted")

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    console.log(app.options)
    render();
}

 const onRemoveAll = (e) => {
     e.preventDefault();
     app.options = [];
     console.log(app.options)
     render();
 }

 const onMakeDecision = () => {
    const randomNum = Math.floor((Math.random() * app.options.length));
    const option = app.options[randomNum]
    console.log(option)
    alert(option)
 }

const appRoot = document.getElementById('app')
const numbers = [55, 101, 1000];

const render = () => {
    const template = (
        <div> 
            <h1>{app.title}</h1> 
            {app.subtitle && <p>{app.subtitle}</p> }
            {app.options.length > 0 ? "Here are your options" : "No Options"}
            <p>Number of options {app.options.length}</p>
            <button disabled={!app.options.length} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    app.options.map((item,index)=> <li key={index}>Option: {item}</li> )
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name = "option"></input>
                <button>Add Option</button>
            </form>
        </div>)
        ReactDOM.render(template,appRoot); 
}


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

render();