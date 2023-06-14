function validateForm() {
  let Y = document.forms["myForm"]["fname"].value;
  if (Y == "") {
    alert("Form must be filled out. Please try again");
    return false;
  }
}