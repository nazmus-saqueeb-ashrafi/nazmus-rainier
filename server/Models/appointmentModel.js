import mongoose from "mongoose";


const appointmentSchema = mongoose.Schema(
  {
    patientId: {
      type: String,
      required: true,
    },
    patientEmail: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    rescheduled: {
      type: Boolean,
      required: true,
      default: false,
    },
    rescheduledReason: {
      type: String,
      required: false,
    },
    delay: {
      type: Boolean,
      required: true,
      default: false,
    },
    canceled: {
      type: Boolean,
      required: true,
      default: false,
    },
    latest:{
        type: Boolean,
      required: true,
      default: false,

    }

  },
  {
    timestamps: true,
  }
)

// we register the model with mongoose
const Appointment = mongoose.model('Appointment', appointmentSchema)

export default Appointment