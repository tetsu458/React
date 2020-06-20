import React from "react";
import PropTypes from "prop-types"


const GuestName = props => {
    props.isEditing ? <input type="text" value={props.children} onChange={handleNameChange} /> : <span>{props.children}</span>
}
    
GuestName.propTypes = {
    isEditing: PropTypes.bool.isRequired,
    handleNameChange=PropTypes.func.isRequired
}

export default GuestName;