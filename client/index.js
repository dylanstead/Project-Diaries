document.addEventListener("DOMContentLoaded", function () {
  const loginTab = document.getElementById("loginTab");
  const signupTab = document.getElementById("signupTab");
  const confirmPasswordField = document.getElementById("confirmPasswordField");
  const authForm = document.getElementById("authForm");

  loginTab.addEventListener("click", function () {
    loginTab.classList.add("active");
    signupTab.classList.remove("active");
    confirmPasswordField.style.display = "none";
    authForm.querySelector("button").textContent = "Login";
  });

  signupTab.addEventListener("click", function () {
    signupTab.classList.add("active");
    loginTab.classList.remove("active");
    confirmPasswordField.style.display = "block";
    authForm.querySelector("button").textContent = "Sign Up";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const journalEntries = document.getElementById("journalEntries");
  const addEntryButton = document.getElementById("addEntry");
  let entryCount = 0;

  function createJournalEntry() {
    entryCount++;
    const entryDiv = document.createElement("div");
    entryDiv.className = "journal-entry";
    entryDiv.innerHTML = `
          <div class="d-flex justify-content-between align-items-center mb-3">
              <h2>Entry ${entryCount}</h2>
              <input type="text" class="form-control w-50" placeholder="Search...">
          </div>
          <input type="date" class="form-control mb-3">
          <textarea class="form-control mb-3" placeholder="Write about your day..."></textarea>
          <button class="btn btn-success submit-entry">Submit</button>
      `;
    journalEntries.appendChild(entryDiv);

    // Add event listener to the submit button
    const submitButton = entryDiv.querySelector(".submit-entry");
    submitButton.addEventListener("click", function () {
      const entryContent = entryDiv.querySelector("textarea").value;
      const entryDate = entryDiv.querySelector('input[type="date"]').value;
      if (entryContent && entryDate) {
        alert(`Entry submitted for ${entryDate}`);
        // Here you would typically send the data to a server
      } else {
        alert("Please fill in both the date and entry content.");
      }
    });
  }

  addEntryButton.addEventListener("click", createJournalEntry);

  // Create the first entry automatically
  createJournalEntry();
});
