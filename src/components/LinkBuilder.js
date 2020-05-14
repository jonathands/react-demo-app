import React from 'react';

class LinkBuilder extends React.Component{
    constructor(props)
    {
        super(props);

        this.state = {}
    }


    render()
    {
        return <div className="form">
            <h1>Create a shareable link for WhatsApp</h1>
            <label>Your friends number: </label> <input type="text" value="(xx) 99-8888-8888" />
            <label>Your message: </label> 
        </div>;
    }
}

export default LinkBuilder;