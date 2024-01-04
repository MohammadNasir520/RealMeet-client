"use client"

import Footer from '@/components/ui/Footer';
import LinkShareCard from '@/components/ui/LinkShareCard/LinkShareCard';
import React, { useState } from 'react';

const MeetingPage = () => {

    const [linkShareCardStatus, setLinkShareCardStatus] = useState(true)

    return (
        <div className='h-screen bg-black '>
            <div className=''>
                <div className='absolute bottom-10 left-10'>
                    <LinkShareCard linkShareCardStatus={linkShareCardStatus} setLinkShareCardStatus={setLinkShareCardStatus}></LinkShareCard>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default MeetingPage;