import React from 'react';
import './mystyle.css'

const TableHeader = () => {

    // boilerplate table header functional component

    return (
        <div className="tableheader">

        <thead >

            <tr >

            <th >Name</th>
            <th >URL</th>
            <th >Remove</th> 

            </tr>

        </thead>
        </div>
    );

}

const TableBody = props => {

    // boilerplate table body functional component

    // we use Array.map to create table rows from LinkData passed via props

    const rows = props.linkData.map((row, index) => {

        return (
            <div className="tableheader">

            <tr key={index}>

                

                <td >{row.linkName}</td>

                

                <td ><a href={row.url}>{row.url}</a></td>

                <td id="delete"><button onClick={() => props.removeLink(index)}>Delete</button></td>

            </tr>

            </div>
        );

    });

    return <tbody>{rows}</tbody>;

}

const Table = (props) => {

//  const {linkData, removelink} = props;

   

    return (

        <div >

          { TableHeader()} 

            {TableBody(props)}

        </div>

    )

}

export default Table;