import React from 'react'

export default function Alert(props) {
    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (
        <div style={{ height: '50px' }}>
            {
                props.alert &&
                <div className={`alert alert-${props.alert.alertClass}`} role="alert">
                    <strong>  {capitalizeFirstLetter(props.alert.type)}</strong>:  {props.alert.msg}
                </div>

            }</div>
        // the above condition ( props.alert && ) says if  props.alert is not null then show the content otherwise not
    )
}
