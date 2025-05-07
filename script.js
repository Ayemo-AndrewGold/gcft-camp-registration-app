const roomMap = {
  "Hall A": ["1A", "1B", "2A", "2B"],
  "Hall B": ["1C", "1D"],
  "Hall C": ["3A", "3B", "3C"],
  "Hall D": ["4A", "4B", "4C"],
  "Hall E": ["5A", "5B", "5C"]
};

const assignedRooms = {
  "Hall A": [],
  "Hall B": [],
  "Hall C": [],
  "Hall D": [],
  "Hall E": []
};

document.getElementById("registrationForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("fullName").value;
  const isMother = document.getElementById("isMother").checked;
  const role = document.getElementById("churchRole").value;
  const marital = document.getElementById("maritalStatus").value;
  const gender = document.getElementById("gender").value;
  const arrivalDate = document.getElementById("arrivalDate").value;

  let hall = "Hall E";

  if (isMother) hall = "Hall A";
  else if (role === "Elder") hall = "Hall B";
  else if (marital === "Single" && gender === "Male") hall = "Hall C";
  else if (marital === "Single" && gender === "Female") hall = "Hall D";

  let availableRooms = roomMap[hall].filter(r => !assignedRooms[hall].includes(r));
  let room = availableRooms[0] || "No rooms available";

  if (room !== "No rooms available") {
    assignedRooms[hall].push(room);
  }

  const ticketDiv = document.getElementById("ticket");
  ticketDiv.style.display = "block";
  ticketDiv.innerHTML = `
    <h3>Registration Successful!</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Hall:</strong> ${hall}</p>
    <p><strong>Room Number:</strong> ${room}</p>
    <p><strong>Arrival Date:</strong> ${arrivalDate}</p>
  `;

  // Optionally clear form here
  // this.reset();
});
