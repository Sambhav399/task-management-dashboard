import React from 'react';
import Image from "next/image";
import Tag from "./tag";

const Flag = ({data}) => (
    <div className="inline-flex items-center gap-x-2 text-xs text-theme-400 min-w-max">
        <i className="fa-solid fa-flag"/>
        <span>{data}</span>
    </div>
)

const Message = props => {
    const {count, unread} = props.data;
    const afterClasses = " relative after:content-[''] after:w-2 after:h-2 after:bg-pink-500 after:absolute after:-top-1 after:-right-1 after:rounded-full after:border after:border-white"
    return (
        <div className="inline-flex items-center gap-x-2 text-xs text-theme-400">
            <i className={`fa-solid fa-message${unread ? afterClasses : ''}`}/>
            <span>{count}</span>
        </div>
    )
}

const Attachments = ({data}) => (
    <div className="inline-flex items-center gap-x-2 text-xs text-theme-400">
        <i className="fa-solid fa-link"/>
        <span>{data}</span>
    </div>
)

const AssignedTo = props => {
    const {name, image} = props.data;
    return (
        <div className="relative w-6 h-6 inline-flex justify-self-end rounded-full overflow-hidden" title={name}>
            <Image
                src={image}
                layout='fill'
                objectFit='cover'
            />
        </div>
    )
}

const Card = props => {
    const {department, title, date, messages, unreadMessages, attachments, assignedTo} = props.data;
    return (
        <div className='p-4 bg-white rounded-xl shadow-card flex flex-col gap-y-4' draggable>
            <div className="flex items-center justify-between">
                <Tag name={department}/>
                <i className="fa-solid fa-ellipsis text-theme-400"/>
            </div>
            <p className='line-clamp-3 text-sm'>{title}</p>
            <div className="grid grid-cols-4 gap-x-4">
                <Flag data={date}/>
                <Message data={messages}/>
                <Attachments data={attachments}/>
                <AssignedTo data={assignedTo}/>
            </div>
        </div>
    )
}

export default Card;