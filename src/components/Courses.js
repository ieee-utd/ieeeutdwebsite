import React, { useState, useEffect } from 'react';
import Course from './Course';

const courseMap = {
    'CS 1325': 'Introduction to Programming (CS 1325)',
    'EE/CE 1202': 'Introduction to Electrical Engineering II (EE/CE 1202)',
    'EE/CE 2310': 'Introduction to Digital Systems (EE/CE 2310)',
    'EE/CE 3202': 'Fundamentals II (EE/CE 3202)',
    'EE/CE 3310': 'Electronic Devices (EE/CE 3310)',
    'EE/CE 3320': 'Digital Circuits (EE/CE 3320)',
    'EE/CE 3311': 'Electronic Circuits (EE/CE 3311)',
    'EE 4301': 'Electromagnetic Engineering (EE 4301)',
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
    return (
        <>
            <div className='tw-flex tw-flex-col tw-items-center tw-justify-center tw-bg-[#EEEEEE]'>
                <h2 className='tw-font-bold tw-font-poppins tw-text-[72px] tw-p-8'>Courses</h2>
                <h3 className='tw-font-medium tw-text-black tw-text-[32px] tw-font-poppins'>
                    We currently provide tutoring in the following courses
                </h3>
            </div>
            {tutoringMap ? (
                Object.keys(tutoringMap).map((course) => (
                    <Course
                        key={course}
                        courseName={courseMap[course]}
                        courseCode={course}
                        tutors={tutoringMap[course]}
                    />
                ))
            ) : (
                <h2>Loading...</h2>
            )}
        </>
    );
}

