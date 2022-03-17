import React from 'react';

const StatusColumn = (props) => {
    return (
        <div className='flex flex-col gap-y-4'>
            <div className="inline-flex items-center">
                <h5 className="text-h5 font-600 flex-1">{props.title}</h5>
                <i className="fa-solid fa-ellipsis fa-lg text-theme-400" />
            </div>
            {props.children}
        </div>
    )
}

export default StatusColumn;