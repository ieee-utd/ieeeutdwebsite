import React from 'react';
import { google } from 'googleapis';
const calendar = google.calendar('v3');

async function getCalendarData() {
    return await calendar.events.list({
        calendarId: process.env.NEXT_PUBLIC_TUTORING_CALENDAR_ID,
        key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY
    })
}
export default function Courses() {

    // const [calendarData, setCalendarData] = React.useState(null);
    // React.useEffect(() => {
    //     getCalendarData().then((data) => {
    //         setCalendarData(data);
    //         console.log(calendarData);
    //     });
    // }, []);
    return <>
    
    
    
    </>
}