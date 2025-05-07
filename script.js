const roomMap = {
  "WILLIAM BRANHAM HOSTEL": ["1A", "1B", "2A", "2B"],
  "EVANGELIST BEN HOSTEL": ["1C", "1D"],
  "ELIZABETH BILLY HOSTEL": ["3A", "3B", "3C"],
  "BETHLEHEM HOSTEL": ["4A", "4B", "4C"]
};

const assignedRooms = {
  "WILLIAM BRANHAM HOSTEL": [],
  "EVANGELIST BEN HOSTEL": [],
  "ELIZABETH BILLY HOSTEL": [],
  "BETHLEHEM HOSTEL": []
};

document.getElementById("registrationForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("fullName").value;
  const isMother = document.getElementById("isMother").checked;
  const role = document.getElementById("churchRole").value;
  const marital = document.getElementById("maritalStatus").value;
  const gender = document.getElementById("gender").value;
  const arrivalDate = document.getElementById("arrivalDate").value;

  let hostel = "BETHLEHEM HOSTEL";

  if (isMother) hostel = "ELIZABETH BILLY HOSTEL";
  else if (role === "Elder") hostel = "WILLIAM BRANHAM HOSTEL";
  else if (marital === "Single" && gender === "Male") hostel = "EVANGELIST BEN HOSTEL";
  else if (marital === "Single" && gender === "Female") hostel = "ELIZABETH BILLY HOSTEL";

  let availableRooms = roomMap[hostel].filter(r => !assignedRooms[hostel].includes(r));
  let room = availableRooms[0] || "No rooms available";

  if (room !== "No rooms available") {
    assignedRooms[hostel].push(room);
  }

  const ticketDiv = document.getElementById("ticket");
  ticketDiv.style.display = "block";
  ticketDiv.innerHTML = `
    <h3>Registration Successful!</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Hall:</strong> ${hostel}</p>
    <p><strong>Room Number:</strong> ${room}</p>
    <p><strong>Arrival Date:</strong> ${arrivalDate}</p>
  `;

  // Optionally clear form here
  // this.reset();
});
