import { auth } from "../_lib/auth.js";
import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service.js";
import DateSelector from "./DateSelector.js";
import LoginMessage from "./LoginMessage.js";
import ReservationForm from "./ReservationForm.js";

async function Reservation({ cabin }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);
  const session = await auth();
  return (
    <div className="grid grid-cols-2 border border-primary-800 min-h-[400px]">
      <DateSelector
        settings={settings}
        bookedDates={bookedDates}
        cabin={cabin}
      />
      {session?.user ? <ReservationForm user={session.user} cabin={cabin} /> : <LoginMessage />}
    </div>
  );
}

export default Reservation;
