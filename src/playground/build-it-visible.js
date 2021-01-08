

const appRoot = document.getElementById('app')
let detailsBool = false;

const changeDetailsDisplay = () => {
    detailsBool = !detailsBool;
    render()
}
const render = () =>{
    let button;

    const template = (
        <div>
            <h1>Vibility Toggle</h1>
            <button onClick = {changeDetailsDisplay}>{detailsBool ? 'Hide details' : 'Show details'}</button>
            {detailsBool && (
                <div>
                    <p>Hey, There are some details you can see now.</p>
                </div>
            )}    
        </div>
    )
    ReactDOM.render(template,appRoot)
}

render()


