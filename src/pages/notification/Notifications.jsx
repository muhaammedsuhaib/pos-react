import React from 'react'
import NewOrderNotification from '../../components/notifications/NewOrderNotification'
import NewOrderPickup from '../../components/notifications/NewOrderPickup'
import NewReservation from '../../components/notifications/NewReservation'
import CallWaiter from '../../components/notifications/CallWaiter'
import NewBooking from '../../components/notifications/NewBooking'
import NewBookinEdiit from '../../components/notifications/NewBookinEdiit'
import NewBookingOrder from '../../components/notifications/NewBookingOrder'
import ReminderBooking from '../../components/notifications/ReminderBooking'

function Notifications() {
  return (
    <div>
        {/* <NewOrderNotification /> */}
        {/* <NewOrderPickup /> */}
        {/* <NewReservation /> */}
        {/* <CallWaiter /> */}
        {/* <NewBooking /> */}
        <NewBookinEdiit />
        {/* <NewBookingOrder /> */}
        {/* <ReminderBooking /> */}
    </div>
  )
}

export default Notifications