const Patient = require('../../../models/Patient')
const Appointment = require('../../../models/Appointment')

const dateToString = date => new Date(date).toISOString();

const patient = async patientId => {
    try {
      const patient = await Patient.findById(patientId);
      console.log(patient)
      return {
        ...patient._doc,
        _id: patient.id,
        createdAppointments: appointments.bind(this, patient._doc.createdAppointments)
      };
    } catch (err) {
      throw err;
    }
  };

  const singleAppointment = async appointmentId => {
    try {
      const appointment = await Apointment.findById(appointmentId);
      return transformAppointment(appointment);
    } catch (err) {
      throw err;
    }
  };
  
  const appointments = async appointmentIds => {
    try {
      const appointments = await Appointment.find({ _id: { $in: appointmentIds } });
  
      return appointments.map(appointment => {
        return transformAppointment(appointment);
      });
    } catch (err) {
      throw err;
    }
  };

  const transformAppointment = appointment => {
    return {
      ...appointment._doc,
      _id: appointment.id,
      date: dateToString(appointment._doc.date),
      creator: patient.bind(this, appointment.creator)
    }
  }

// exports.transformBooking = transformBooking;
exports.transformAppointment = transformAppointment