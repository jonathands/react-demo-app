import React from 'react';

class ChatBox extends React.Component {
    constructor(props)
    {
        super(props);

        this.state = {}
    }

    render() {
        return <div className="notification is-warning">
            Hello , it's me , I was trying to write react.
        </div>
    }
}

export default ChatBox;