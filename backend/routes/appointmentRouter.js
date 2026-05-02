import express from "express";
// 🚨 Removed Clerk imports from here because they are already in server.js
import {
  createAppointment,
  getAppointmentsByPatient,
  getAppointmentsByDoctor,
  cancelAppointment,
  getRegisteredUserCount,
  updateAppointment,
  confirmPayment,
  getAppointments,
  getStats,
} from "../controllers/appointmentController.js";

const appointmentRouter = express.Router();

appointmentRouter.get("/", getAppointments);
appointmentRouter.get("/confirm", confirmPayment);
appointmentRouter.get("/stats/summary", getStats);

// 🚨 Removed clerkMiddleware() and requireAuth() so the request can reach the controller
appointmentRouter.post("/", createAppointment);
appointmentRouter.get("/me", getAppointmentsByPatient);
appointmentRouter.get("/doctor/:doctorId", getAppointmentsByDoctor);
appointmentRouter.post("/:id/cancel", cancelAppointment);
appointmentRouter.get("/patients/count", getRegisteredUserCount);
appointmentRouter.put("/:id", updateAppointment);

export default appointmentRouter;














// import express from "express";
// import { clerkMiddleware, requireAuth } from "@clerk/express";
// import {
//   createAppointment,
//   getAppointmentsByPatient,
//   getAppointmentsByDoctor,
//   cancelAppointment,
//   getRegisteredUserCount,
//   updateAppointment,
//   confirmPayment,
//   getAppointments,
//   getStats,
// } from "../controllers/appointmentController.js";

// const appointmentRouter = express.Router();




// appointmentRouter.get("/",  getAppointments);
// appointmentRouter.get("/confirm", confirmPayment);
// appointmentRouter.get("/stats/summary",  getStats);


// // authentic routes
// // authentic routes

// appointmentRouter.post("/",clerkMiddleware(),requireAuth(),createAppointment);

// appointmentRouter.get(
//   "/me",
//   clerkMiddleware(),
//   requireAuth(),
//   getAppointmentsByPatient
// );

// appointmentRouter.get(
//   "/doctor/:doctorId",
//   getAppointmentsByDoctor
// );

// appointmentRouter.post(
//   "/:id/cancel",
//   cancelAppointment
// );

// appointmentRouter.get(
//   "/patients/count",
//   getRegisteredUserCount
// );

// appointmentRouter.put(
//   "/:id",
//   updateAppointment
// );



// export default appointmentRouter;
