import React from 'react';
import Tag from "./tag";
import Image from "next/image";

const AdditionalBlock = props => {
    return (
        <div className={`flex gap-x-4 items-center ${props.className}`}>
            <i className={`text-theme-400 w-5 overflow-hidden ${props.icon}`}/>
            <div className={`flex-1 ${props.bodyStyle}`}>
                {props.children}
            </div>
            <button
                className='w-8 h-8 rounded-full overflow-hidden grid place-items-center border border-theme-400 border-dashed'>
                <i className="fa-solid fa-plus text-theme-400"/>
            </button>
        </div>
    )
}

const CreateCard = props => {

    function handleSubmit(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    return (
        <form className='p-4 bg-white rounded-xl shadow-card flex flex-col gap-y-4' onSubmit={handleSubmit}>
            <div className="flex items-center justify-between">
                <h5 className="text-h5 font-600 flex-1">Create New Card</h5>
                <i className="fa-solid fa-xmark text-theme-400"/>
            </div>
            <textarea
                placeholder='What is the task?'
                className='min-h-[5rem] border order-theme-400 rounded-lg p-4 text-sm'
            />
            <AdditionalBlock
                icon="fa-solid fa-tag"
                className='border-b border-theme-200 pb-4'
            >
                <Tag name='UI Design'/>
            </AdditionalBlock>
            <AdditionalBlock
                icon="fa-solid fa-user-plus"
                bodyStyle={'flex items-center gap-x-2'}
            >
                <div className="relative w-8 h-8 inline-flex justify-self-end rounded-full overflow-hidden">
                    <Image
                        src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                        layout='fill'
                        objectFit='cover'
                    />
                </div>
                <span className={'text-sm text-theme-400'}>Lorem</span>
            </AdditionalBlock>
            <button className='bg-violet-500 text-white font-500 rounded-lg py-3'>Done</button>
        </form>
    )
}

export default CreateCard;