function extractVideoId(url) {
  const regex = /(?:v=|youtu\\.be\\/)([\\w-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

function extractTags() {
  const urlInput = document.getElementById("youtube-url");
  const errorDiv = document.getElementById("error");
  const tagsContainer = document.getElementById("tags-container");

  const videoId = extractVideoId(urlInput.value);
  errorDiv.textContent = "";
  tagsContainer.innerHTML = "";

  if (!videoId) {
    errorDiv.textContent = "Please enter a valid YouTube URL.";
    return;
  }

  // Simulate fetching tags (replace this with real API/scraper)
  const fakeTags = ["music", "official", "video", "2024", "hd", "pop"];
  fakeTags.forEach(tag => {
    const tagEl = document.createElement("span");
    tagEl.className = "tag";
    tagEl.textContent = `#${tag}`;
    tagsContainer.appendChild(tagEl);
  });
}
