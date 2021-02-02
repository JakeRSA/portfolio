let requiredFields = document.querySelectorAll("[required=required]");
const phoneRow = document.getElementById("phone-row");
const emailRow = document.getElementById("email-row");
const phone = document.getElementById("phone");
const email = document.getElementById("email");

let preferred = document.forms["contact-form"].elements["preferred"];
for (let i = 0, len = preferred.length; i < len; i++) {
  preferred[i].onclick = function () {
    if (this.value === "phone") {
      phoneRow.style.display = "block";
      phone.setAttribute("required", "required");
      email.removeAttribute("required");
      requiredFields = document.querySelectorAll("[required=required]");
      emailRow.style.display = "none";
    } else {
      emailRow.style.display = "block";
      email.setAttribute("required", "required");
      phone.removeAttribute("required");
      requiredFields = document.querySelectorAll("[required=required]");
      phoneRow.style.display = "none";
    }
  };
}

let submitBtn = document.getElementById("submit");

function checkNoEmpties(requiredFields) {
  let emptyRequireds = 0;
  for (i = 0; i < requiredFields.length; i++) {
    if (requiredFields[i].value == "") {
      emptyRequireds++;
    }
  }
  if (emptyRequireds === 0) {
    submitBtn.removeAttribute("disabled");
    submitBtn.classList -= "invalid-form-submit";
  } else {
    submitBtn.classList += "invalid-form-submit";
    submitBtn.setAttribute("disabled", "disabled");
  }
}

requiredFields.forEach((elem) => {
  elem.addEventListener("focusout", function () {
    checkNoEmpties(requiredFields);
  });
  elem.addEventListener("keyup", function () {
    checkNoEmpties(requiredFields);
  });
});
preferred.forEach((elem) => {
  elem.addEventListener("click", function () {
    checkNoEmpties(requiredFields);
  });
});

// output form data to console
allFields = document.forms["contact-form"].elements;
document.querySelector("#submit").addEventListener("click", function () {
  for (let i = 0; i < allFields.length; i++) {
    if (allFields[i].name === "first-name") {
      console.log("First Name: " + allFields[i].value);
    } else if (allFields[i].name === "last-name") {
      console.log("Last Name: " + allFields[i].value);
    } else if (allFields[i].name === "email") {
      console.log("Email: " + allFields[i].value);
    } else if (allFields[i].name === "phone") {
      console.log("Phone: " + allFields[i].value);
    } else if (
      allFields[i].name === "preferred" &&
      allFields[i].checked === true
    ) {
      console.log("Contact Via: " + allFields[i].value);
    } else if (allFields[i].name === "comment") {
      console.log("Comment: " + allFields[i].value);
    }
  }
  return false;
});
