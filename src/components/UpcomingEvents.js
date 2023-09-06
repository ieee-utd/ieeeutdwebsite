import {useState, useEffect} from 'react'
import axios from 'axios'


export default function UpcomingEvents({events}) {


return( <>
        {
            events.length ? (
            <div className="tw-pl-4 tw-items-center tw-ml-2 ">
                <div className="tw-whitespace-nowrap tw-overflow-x-auto ">
                    {
                        events.map(event => {
                            return (
                                <div key={event.id} className="tw-inline-block tw-align-middle 
                                tw-m-2 tw-p-6 tw-bg-white tw-w-[300px] tw-whitespace-normal">
                                    <h1 className="tw-text-2xl tw-border-b-black tw-border-b-4">{event.eventName}</h1>
                                    <br/>
                                    {/* <h2>{event.location}</h2> */}
                                    <h2>{event.date}</h2>
                                    <span>Starts at <h2>{event.time}</h2></span>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
            ) : 
            (
                <div className="tw-pl-4 tw-mt-[18%] tw-align-middle tw-text-center tw-text-white tw-underline tw-underline-offset-2 tw-decoration-white">
                There are no upcoming events
                </div>
            )
        }
        </>
      )



}

