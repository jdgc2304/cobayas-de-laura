function displayCurrentYear() {
  const year = new Date().getFullYear();
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = year;
  } else {
    console.error("Element with ID 'year' not found in the document.");
  }
}
document.addEventListener("DOMContentLoaded", displayCurrentYear);
