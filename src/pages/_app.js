import React from 'react';
import '../../styles/globals.css';
import PageHead from '../components/pageHead';
import Header from "../components/header";

function MyApp({Component, pageProps}) {
    return (
        <>
            <PageHead/>
            <Header/>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
