import React from 'react';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import listPlugin from '@fullcalendar/list'

const EventsPage = () => {
    return (
        <>
        <FullCalendar
            plugins={[ dayGridPlugin, listPlugin ]}
            initialView="dayGridMonth"
        />
      </>
    )
}

export default EventsPage;