import React from 'react';

class MessageBuilder extends React.Component{
    render()
    {
        return <div className="form">
            <h1>Quickly send a formated message to one or more contacts</h1>
            <label>Your friends number: </label> <input type="text" value="(xx) 99-8888-8888" />
            <label>Your message: </label> 
            <textarea></textarea>
        </div>;
    }
}

export default MessageBuilder;