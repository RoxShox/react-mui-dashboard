import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import { formatDate } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import timeGridPlugin from '@fullcalendar/timegrid'
import { Box, List, ListItem, ListItemText, Typography, useTheme } from '@mui/material'
import Header from '../../components/Header'
import { tokens } from '../../theme'
const Calendar = () => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const [currentEvents, setCurrentEvents] = useState([])

	const handleDateClick = selected => {
		const title = prompt('Please enter a new title for your event')
		const calendarApi = selected.view.calendar
		calendarApi.unselect()
		if (title) {
			calendarApi.addEvent({
				id: `${selected.dateStr}-${title}`,
				title,
				start: selected.start,
				allDay: selected.allDay,
			})
		}
	}

	const handleEventClick = selected => {
		if (window.confirm(`Are you sure you want to delete the event '${selected.event.title}'`)) {
			selected.event.remove()
		}
	}
	return (
		<Box m="20px">
			<Header title="CALENDAR" subtitle="Full Calendar Interative Page" />

			<Box display="flex" justifyContent="space-between">
				{/* Calendar sidebar */}
				<Box flex="1 1 20%" backgroundColor={colors.primary[400]} p="15px" borderRadius="4px">
					<Typography variant="h5">Events</Typography>
					<List>
						{currentEvents.map(e => (
							<ListItem
								key={e.id}
								sx={{
									backgroundColor: colors.greenAccent[500],
									margin: '10px 0',
									borderRadius: '2px',
								}}>
								<ListItemText
									primary={e.title}
									secondary={
										<Typography>
											{formatDate(e.start, {
												year: 'numeric',
												month: 'short',
												day: 'numeric',
											})}
										</Typography>
									}
								/>
							</ListItem>
						))}
					</List>
				</Box>

				{/* CAlendar */}
				<Box flex="1 1 100%" ml="15px">
					<FullCalendar
						height="75vh"
						plugins={[dayGridPlugin, interactionPlugin, listPlugin, timeGridPlugin]}
						headerToolbar={{
							left: 'prev,next today',
							center: 'title',
							right: 'dayGridMonth, timeGridWeek, timeGridDay,listMonth',
						}}
						initialView="dayGridMonth"
						editable={true}
						selectable={true}
						selectMirror={true}
						dayMaxEvents={true}
						select={handleDateClick}
						eventClick={handleEventClick}
						eventsSet={events => setCurrentEvents(events)}
						initialEvents={[
							{ id: '1234', title: 'All-day event', date: '2022-11-12' },
							{ id: '4321', title: 'Timed event', date: '2022-12-16' },
						]}></FullCalendar>
				</Box>
			</Box>
		</Box>
	)
}

export default Calendar
