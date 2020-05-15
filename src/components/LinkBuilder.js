import React from 'react';
import { IMaskInput } from 'react-imask';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class LinkBuilder extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    form() {
        return <div className="form form-horizontal">
            <div class="field">
                <label className="label">Your country code: </label>
                <div class="control">
                    <select className="input">
                        <option value="0"></option>
                    </select>
                </div>
            </div>

            <div class="field">
                <label className="label">Your number: </label>
                <div class="control">
                    <FontAwesomeIcon icon={['fa','phone']} />
                    <IMaskInput mask={Number} radix="-" placeholder="Your phone number" />
                    <p class="help">This is a help text</p>
                </div>

                <div class="field">
                    <div class="control">
                        <label className="label"> Your link: </label>
                        <FontAwesomeIcon icon={['fab','link']} />
                        <input className="input" type="text" readonly="readonly" />
                        <p class="help">This is a help text</p>
                    </div>

                    <div class="control">
                        <label className="label"> Code </label>
                        <FontAwesomeIcon icon={['fa','code']} />
                        <textarea name="linktext"></textarea>
                        <p class="help">This is a help text</p>
                    </div>

                    <div class="control">
                        <button className="button is-success"><FontAwesomeIcon icon={['fab', 'whatsapp']} />&nbsp;Send me on What's App</button>
                    </div>
                </div>
            </div>
        </div >
    }

    render() {
        return <div className="box">

            <h1>Create a shareable link for WhatsApp</h1>

            {this.form()}
        </div>
    }
}

export default LinkBuilder;