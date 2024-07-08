import React from "react"

export class Lb1 extends React.Component{
    data;
    
    constructor(props) {
        super(props);
        this.data = {name: "", surname: "", email: ""};
        this.state = {name: "", surname: "", email: ""};
    }
    onNameChange = (e) => {
        var val = e.target.value;
        this.setState({name: val});
    }
    onSurnameChange = (e) => {
        var val = e.target.value;
        this.setState({surname: val});
    }
    onEmailChange = (e) => {
        var val = e.target.value;
        this.setState({email: val});
    }
    handleSubmit = (e) => {
        e.preventDefault();
    }
    saveData = () => {
        this.data = this.state;
    }
    returnData = () => {
        this.setState(this.data);
    }

    render() {
        return(
            <>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name: </label>
                        <input type="text" value={this.state.name} onChange={this.onNameChange}></input><br></br>
                        <label>Surname: </label>
                        <input type="text" value={this.state.surname} onChange={this.onSurnameChange}></input><br></br>
                        <label>Email: </label>
                        <input type="text" value={this.state.email} onChange={this.onEmailChange}></input>
                    </div>
                    <input type="submit" value="Save" onClick={this.saveData}></input>
                    <input type="submit" value="Return" onClick={this.returnData}></input>
                </form>
            </>
        )
    }
}