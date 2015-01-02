Appointments.permit(['insert', 'update', 'remove']).ifHasRole(['admin', 'assistant', 'doctor']).apply();

AppointmentSubmissions.permit(['insert', 'update', 'remove']).apply();