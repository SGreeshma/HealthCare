  /* JavaScript Code */
  const appointmentNotification = document.querySelector('.appointment-notification');
  const closeNotificationButton = document.querySelector('#close-notification');
  
  closeNotificationButton.addEventListener('click', () => {
    appointmentNotification.classList.remove('show');
  });
  
  // Assuming you have a function to book an appointment and retrieve the appointment data
  function bookAppointment(doctor, date, time, reason) {
    // Book the appointment logic here
    const appointmentData = {
      doctor: doctor,
      date: date,
      time: time,
      reason: reason
    };
    
    // Display the appointment notification
    appointmentNotification.classList.add('show');
    document.querySelector('#doctor-name').textContent = appointmentData.doctor;
    document.querySelector('#appointment-date').textContent = appointmentData.date;
    document.querySelector('#appointment-time').textContent = appointmentData.time;
    document.querySelector('#reason-for-visit').textContent = appointmentData.reason;
  }