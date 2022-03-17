import React from 'react';
import getColor from "../../helpers/getColor";

const Tag = props => {
    const tagName = props.name;
    return (
        <div className={`bg-${getColor(tagName)}-100 px-4 py-1 rounded-full inline-flex justify-start`}>
            <span className={`text-xs text-${getColor(tagName)}-600 font-500`}>{tagName}</span>
        </div>
    )
}

export default Tag;