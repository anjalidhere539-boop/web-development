async function downloadSong() {
  const url = document.getElementById("songUrl").value;
  const result = document.getElementById("result");
  if (!url) {
    alert("Enter Spotify URL!");
    return;
  }
  result.innerText = "Fetching download link...";
  result.innerText = "Demo Only – API key required.";
}