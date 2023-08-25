import {useState, useEffect} from 'react'
import axios from 'axios'


export default function UpcomingEvents() {

    const [events, setEvents] = useState([
    {
        title: "Event1",
        location: "IEEE room",
        date: "Wed, 10/4/2023",
        time: "6:00 PM CT"
    },
    {
        title: "Event2",
        location: "Makerspace",
        date: "Fri, 10/6/2023",
        time: "8:00 PM CT"
    },
    {
        title: "Event3",
        location: "TI Auditorium",
        date: "Thur, 10/22/2023",
        time: "2:00 PM CT"
    },
    {
        title: "Event3",
        location: "TI Auditorium",
        date: "Thur, 10/22/2023",
        time: "2:00 PM CT"
    },
    {
        title: "Event3",
        location: "TI Auditorium",
        date: "Thur, 10/22/2023",
        time: "2:00 PM CT"
    }
    ])

    useEffect(() => {
        fetchEvents("id");
    }, [])

    const fetchEvents = async (calendarId) => {
        const API_BASE = 'https://www.googleapis.com/calendar/v3/calendars/';
        const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
        const instance = axios.create({

            baseURL: API_BASE,
            headers: { "Access-Control-Allow-Origin": "*"},
            params: {
                key: apiKey
            }

        })
        instance.get('calendars/calendarId/events', {
            params: {
              maxResults: 10
            }
          }).then(response => {
            const events = response.data.items;
            if (events.length === 0) {
            console.log('No events found.');
            }
          })
          .catch((err) =>{
            console.error('Error fetching events:', err);
          })
    }

return( <div className=" tw-pl-4 tw-items-center tw-ml-2">
                <div className="tw-whitespace-nowrap tw-overflow-x-auto ">
                    {
                        events.map(event => {
                            return (
                                <div className="tw-inline-block tw-align-middle 
                                tw-m-2 tw-p-6 tw-bg-white tw-w-[300px]">
                                    <h1 className="tw-text-2xl tw-border-b-black tw-border-b-4">{event.title}</h1>
                                    <br/>
                                    <h2>{event.location}</h2>
                                    <h2>{event.date}</h2>
                                    <span>Starts at <h2>{event.time}</h2></span>

                                </div>
                            )
                        })
                    }
                </div>
        </div>
      )



}