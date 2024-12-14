import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service.js";

export async function GET(req, {params}) {
  const { cabinId } = params;
  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);
    return Response.json({ cabin, bookedDates });
  } catch (err) {
    return Response.json({ message: "Cabin not found" });
  }
}
