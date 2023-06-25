document.addEventListener("visibilitychange", (event) => {
  if (document.visibilityState == "visible") {
    document.title = "dumpcats";
  } else {
    document.title = "come back pls(";
  }
});