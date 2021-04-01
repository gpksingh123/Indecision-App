class IndecisionApp extends React.Component{
    render() {
        const title = 'Indecision'
        return (
            <div>
            <Header title={title}/>
            <Action/>
            <Options/>
            <AddOption/>
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>Put your life in the hands of a computer</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>What should i do?</div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <div>Options component here</div>
                <Option/>
            </div>
        )
    }
}

class Option extends React.Component {
    render(){
        return (
            <div>Option Component here</div>
        )
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>AddOption Here</div>
        )
    }
}
//Options -> Options component here

//AddOption -> AddOption component here


ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));