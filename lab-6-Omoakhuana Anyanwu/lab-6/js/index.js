/*
  HTML for the project.
  Template
  <div class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">FULLNAME HERE</h5>
    </div>
  <small>EMAIL HERE<</small>
  </div>
*/

function getContacts() {
  fetch("public/data/contacts.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // Logging the fetched data to the console
      renderContacts(data); // Call the render function and pass the contacts data
    })
    .catch((error) => {
      console.error("Error fetching contacts:", error);
    });
}

function renderContacts(contacts) {
  const contactsContainer = document.getElementById("contacts");
  contactsContainer.innerHTML = ""; // Clear previous content

  if (contacts.length > 0) {
    contacts.forEach((contact) => {
      const contactItem = document.createElement("div");
      contactItem.classList.add("list-group-item", "list-group-item-action");

      const contactContent = `
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">${contact.name}</h5>
        </div>
        <small>${contact.email}</small>
      `;

      contactItem.innerHTML = contactContent;
      contactsContainer.appendChild(contactItem);
    });
  } else {
    contactsContainer.textContent = "No Contacts Found";
  }
}
getContacts();
