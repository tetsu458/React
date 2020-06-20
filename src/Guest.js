import React from "react";
import PropTypes from "prop-types"

import GuestName from "./Guest";

const Guest = props =>
        <li className={props.isConfirmed ? "responded" : null}>
            {/* {props.isEditing ? 
                            <input type="text" value={props.name} /> 
                          : <span>{props.name}</span>} */}
            <GuestName 
                isEditing={props.isEditing}
                handleName={e => props.setName(e.target.value)}>
                {props.name}
            </GuestName>
            <label>
            <input type="checkbox" 
                checked={props.isConfirmed}
                onChange={props.handleConfirmation} /> Confirmed
            </label>
            <button onClick={props.handleEdit}>{props.isEditing ? "save" : "edit"}</button>
            <button>remove</button>
        </li>
    
Guest.propTypes = {
    name: PropTypes.string.isRequired,
    isConfirmed: PropTypes.bool.isRequired,
    handleConfirmation: PropTypes.func.isRequired,
    handleEdit: PropTypes.func.isRequired,
    isEditing: PropTypes.bool.isRequired,
    setName: PropTypes.func.isRequired
}

export default Guest;