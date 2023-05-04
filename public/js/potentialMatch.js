const urlParams = new URLSearchParams(window.location.search);
const distance = urlParams.get("distance");

if (distance === "all") {
  document.getElementById("showAllProfilesButton").style.display = "none";
} else {
  document.getElementById("showWithin5kmButton").style.display = "none";
}

function showAllProfiles() {
  const url = new URL(window.location.href);
  url.searchParams.set("distance", "all");
  window.location.href = url.toString();
}

function showProfilesWithin5km() {
  const url = new URL(window.location.href);
  url.searchParams.set("distance", "5km");
  window.location.href = url.toString();
}
