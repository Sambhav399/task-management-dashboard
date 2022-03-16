import React from 'react';
import Head from 'next/head';
import Script from 'next/script'
import getPageTitle from "../helpers/getPageTitle";
import {useRouter} from "next/router";

function PageHead() {
    const router = useRouter();
    return (
        <>
        <Head>
            <title>{getPageTitle(router.asPath)}</title>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <Script src="https://kit.fontawesome.com/23fd8d619c.js" crossorigin="anonymous" />
        </>
    )
}

export default PageHead;
