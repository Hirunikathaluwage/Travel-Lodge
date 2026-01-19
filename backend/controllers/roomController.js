import Room from "../models/Room.js";

export const getRooms = async (req, res) => {
  try {
    const {
      checkIn,
      checkOut,
      guests,
      roomType,
      priceRange,
    } = req.query;

    let query = {};

    if (guests) {
      query.capacity = { $gte: Number(guests) };
    }

    if (roomType && roomType !== "all") {
      query.roomType = roomType;
    }

    if (priceRange && priceRange !== "all") {
      if (priceRange === "budget") query.price = { $lt: 200 };
      if (priceRange === "mid")
        query.price = { $gte: 200, $lte: 300 };
      if (priceRange === "luxury") query.price = { $gt: 300 };
    }

    let rooms = await Room.find(query);

 
    if (checkIn && checkOut) {
      const inDate = new Date(checkIn);
      const outDate = new Date(checkOut);

      rooms = rooms.filter((room) => {
        return !room.bookings.some(
          (booking) =>
            inDate <= booking.checkOut &&
            outDate >= booking.checkIn
        );
      });
    }

    res.status(200).json({
      success: true,
      count: rooms.length,
      rooms,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
