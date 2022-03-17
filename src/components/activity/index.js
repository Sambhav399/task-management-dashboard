import React from 'react';

const ActivityBlock = ({data}) => {
    const {icon, user, message, date, bgColor} = data;
    return (
        <div className='flex items-start gap-x-4'>
            <span className={`block w-8 h-8 grid place-items-center rounded-full text-white ${bgColor}`}>
                <i className={`fa-xs ${icon}`}/>
            </span>
            <div className="flex-1 inline-flex flex-col gap-y-1">
                <p className='text-sm'>
                    <span className="font-500 mr-1.5 capitalize">{user}</span>
                    {message}
                </p>
                <p className='text-xs capitalize text-theme-400 font-500'>{date}</p>
            </div>
        </div>
    )
}

export default ActivityBlock;