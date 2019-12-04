import React from "react";
import {
    callTypes,
    survivors,
    survivorTypes
} from '../data';

class CallForm extends React.Component {
    renderCallOpts(opt) {
        return <option value={opt.id} data-keep={opt.keep}>{opt.name}</option>;
    }

    renderSurvivorOpts(opt) {
        return <option value={opt.id}>{opt.name}</option>;
    }

    renderSurvivorFields() {

        return (
            <div>
                <label>Survivor</label>
                <select>
                    <option>Who did you keep?</option>
                    {survivors.map(renderSurvivorOpts)}
                </select>
                <label>Tokens</label>
                <input type="number" />
            </div>
        )
    }

    render() {
        return (
            <form id="submit-call">
                <div>
                    <label for="callType">Call Type</label><br />
                    <select name="callType" onChange={this.renderSurvivorFields}>
                        <option>Select call type</option>
                        {callTypes.map(this.renderCallOpts)}
                    </select>
                </div>

                <fieldset id="survivors">
                    <legend>Kept Tokens</legend>
                </fieldset>

                <p><button type="submit">Record Call Results</button></p>
            </form>
        )
    }
}

export default CallForm;