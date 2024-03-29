import React, { useState, useEffect } from 'react';
import Course from './Course';

const courseMap = {
    'CS 1325': 'Introduction to Programming',
    'CE/EE 1202': 'Introduction to Electrical Engineering II',
    'CE/EE 2310': 'Introduction to Digital Systems',
    'CE/EE 3202': 'Fundamentals II',
    'CE/EE 3320': 'Digital Circuits',
    'CE/EE 3311': 'Electronic Circuits',
    'EE 4301': 'Electromagnetic Engineering',
}
export default function Courses() {
    const [tutoringMap, setTutoringMap] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/google/calendarData');
                const data = await response.json();
                setTutoringMap(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    console.log(tutoringMap);
    return (
        <div className='tw-flex tw-flex-col tw-items-center tw-justify-center tw-bg-gray-300'>
            <h2 className='tw-font-bold tw-font-poppins tw-text-[72px] tw-p-8'>Courses</h2>
            <h3 className='tw-font-medium tw-text-black tw-text-[32px] font-poppins'>
                We currently provide tutoring in the following courses
            </h3>
            <Course courseName="test" date="test"/>
        </div>
    );
}
