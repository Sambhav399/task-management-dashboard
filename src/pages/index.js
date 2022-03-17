import React from "react";
import Image from "next/image";
import StatusColumn from "../components/statusColumn";
import Card from "../components/statusColumn/card";
import CreateCard from "../components/statusColumn/createCard";
import ProgressBar from "../components/progressBar";
import ActivityBlock from "../components/activity";

import data from '../constants/projectsData.json';

const UserImage = props => (
    <span className='relative block w-8 h-8 rounded-full overflow-hidden'>
        <Image
            src={props.src}
            alt={props.alt}
            layout='fill'
            objectFit='cover'
        />
    </span>
)

export default function Home(props) {
    return (
        <>
            <div className="flex divide-x flex-1 overflow-y-auto">
                <main className="flex-1 px-10 py-12 overflow-y-auto">
                    <header className='flex mb-10'>
                        <h1 className='text-h1 font-600 flex-1'>Homepage Design</h1>
                        <div className="inline-flex gap-2">
                            <UserImage
                                src={'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'}
                            />
                            <UserImage
                                src={'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'}
                            />
                            <UserImage
                                src={'https://images.unsplash.com/photo-1614436163996-25cee5f54290?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=742&q=80'}
                            />
                            <div
                                className='w-8 h-8 rounded-full overflow-hidden grid place-items-center border border-pink-500 border-dashed'>
                                <i className="fa-solid fa-plus text-pink-500"/>
                            </div>
                        </div>
                    </header>
                    <section className="grid grid-cols-4 gap-x-8">
                        {data.sections.map((item, index) => (
                            <StatusColumn title={item.title} key={index}>
                                {item.tickets.map((item, index) => (
                                    <Card key={index} data={item}/>
                                ))}
                                {item.createNewCard
                                    ? <CreateCard/>
                                    : <button
                                        className="text-theme-400 inline-flex items-center justify-center gap-x-4 w-full">
                                        <i className="fa-solid fa-plus fa-sm"/>
                                        Add Card
                                    </button>
                                }
                            </StatusColumn>
                        ))}
                    </section>
                </main>
                <div className='w-80 px-10 py-12 overflow-y-auto hidden 2xl:block'>
                    <div className="flex flex-col gap-y-10 mb-20">
                        <h5 className="text-h5 font-600">Task Progress</h5>
                        {data.taskProgress.map((item, index) => (
                            <ProgressBar key={index} data={item}/>
                        ))}
                    </div>
                    <div className="flex flex-col gap-y-6">
                        <h5 className="text-h5 font-600">Recent Activity</h5>
                        {data.activity.map((item, index) => (
                            <ActivityBlock key={index} data={item}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}