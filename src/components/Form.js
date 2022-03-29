import React, {Component} from 'react';

class Form extends Component {

    constructor(props) {

        super(props);  

        /* TODO - set initial state for link name and URL */

        // this.states , this.props -->  

        this.state = {

            linkName: '',

            url: ''

        }

    }

    handleChange = event => {

        /* TODO - Logic for changing state based on form changes */

        if(event.target.id === "link")

            this.setState({ linkName: event.target.value}); // update the linkname in state

        else

            this.setState({ url: event.target.value});         

    }

    onFormSubmit = event => { // to prevent page reload on form submit

        event.preventDefault(); 

        // Logic for calling props to handle submission and setting state changes 

        

        let newFavLink = {linkName: this.state.linkName, url: this.state.url};

        this.props.addNew(newFavLink); // addNew was passed as props from LinkContainer

        this.setState({ linkName: '', url: ''}); // reset the states

    }

    render() {

        return(

            <form className="form">

                

                
            <label htmlFor="link">Name : </label>
            <br></br>
            <input type="text" id="link" className="linkbox"value={this.state.linkName} onChange={(event) =>this.handleChange(event)}/>      

            {/*--> added value={this.state.linkName} to update the UI when the internal state was updated */}
            <br></br>
            <label htmlFor="url">URL : </label>
            
            <br></br>
            <input type="text" id="url" className="linkbox" value={this.state.url} onChange={(event) =>this.handleChange(event)}/>
            <br></br>
            <button type="submit" className ="button" onClick={(e)=>this.onFormSubmit(e)}>Submit</button>                

            </form>
        )

    }

}

export default Form; 