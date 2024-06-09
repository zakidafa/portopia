// Copy Right
document.getElementById("year").textContent = new Date().getFullYear();

// Not Allow View Source Code
document.oncontextmenu = () => {
  alert("Not Allowed");
  return false;
};

document.onkeydown = (e) => {
  if (e.key == "F12") {
    alert("Not Allowed");
    return false;
  }
  if (e.ctrlKey && e.key == "u") {
    alert("Not Allowed");
    return false;
  }
  if (e.ctrlKey && e.key == "c") {
    alert("Not Allowed");
    return false;
  }
  if (e.ctrlKey && e.key == "v") {
    alert("Not Allowed");
    return false;
  }
  if (e.ctrlKey && e.key == "s") {
    alert("Not Allowed");
    return false;
  }
  let alertShown = false;

  document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "i")) {
      if (!alertShown) {
        alertShown = true;
        alert("Not Allowed");
        setTimeout(() => {
          alertShown = false;
        }, 500);
      }
      e.preventDefault();
      return false;
    }
  });
  document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && e.shiftKey && (e.key === "C" || e.key === "c")) {
      if (!alertShown) {
        alertShown = true;
        alert("Not Allowed");
        setTimeout(() => {
          alertShown = false;
        }, 500);
      }
      e.preventDefault();
      return false;
    }
  });
};
