import React from 'react';
import Table from './Table';
import Form from './Form';
import './mystyle.css'



class LinkContainer extends React.Component {

    constructor(props){

        super(props)

        

        // Creating a state to store the list of favLinks

        this.state = {favLinks: [],}

    }

    removeCharacter = index => {

        

        const tempArray = this.state.favLinks;

        // This will remove one element starting at the index

        tempArray.splice(index, 1);

        // This will set the new state

        this.setState ({ favLinks : tempArray });

    }

    handleSubmit = favLink => {

        /* Createing logic to setState and add new favLink to favLinks array in state */

        this.setState({

            // A Spread Operator

            favLinks: [...this.state.favLinks, favLink]

        });

    }

    render() {

        return (

            <div className="container">

                <h1 className="header">My Favorite Links</h1>

                <p className="header">Add a new url with a name and link to the table.</p>

                 

                <Table linkData= {this.state.favLinks} removeLink= {(index) => this.removeCharacter(index)} />  

                <br/>

                <h3 className="header">Add New</h3>

                

                <Form addNew= {(favLink) => this.handleSubmit(favLink)} />

            </div>

        );

    }

}

export default LinkContainer;