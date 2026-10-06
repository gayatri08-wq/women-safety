const callBtn = document.getElementById('callBtn');
const locationBtn = document.getElementById('locationBtn');
const logBtn = document.getElementById('logBtn');
const locationStatus = document.getElementById('locationStatus');
const incidentLog = document.getElementById('incidentLog');

callBtn.addEventListener('click', () => {
  window.location.href = 'tel:112';
});

locationBtn.addEventListener('click', () => {
  if (!navigator.geolocation) {
    locationStatus.textContent = 'Geolocation is not supported in this browser.';
    return;
  }

  locationStatus.textContent = 'Getting your location...';

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      const locationText = `Latitude: ${latitude.toFixed(5)}, Longitude: ${longitude.toFixed(5)}`;
      locationStatus.textContent = `Live location shared: ${locationText}`;
    },
    () => {
      locationStatus.textContent = 'Unable to access your location. Please try again.';
    }
  );
});

logBtn.addEventListener('click', () => {
  const time = new Date().toLocaleString();
  incidentLog.textContent = `Incident logged at ${time}. Please remain alert and contact emergency services if needed.`;
});
