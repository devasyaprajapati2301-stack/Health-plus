import Appointment from "../models/appointment.js";

// ✅ CREATE appointment
export const createAppointment = async (req, res) => {
  try {
    const { name, number, gender, mode } = req.body;

    // Basic validation
    if (!name || !number || !gender || !mode) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newAppointment = new Appointment({
      name,
      number,
      gender,
      mode,
    });

    await newAppointment.save();

    res.status(201).json({
      message: "Appointment created successfully",
      data: newAppointment,
    });
  } catch (error) {
    console.error("Error creating appointment:", error);
    res.status(500).json({ message: "Server error" });
  }
};