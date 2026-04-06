fetch('about-me-text.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("about-me-text");
    container.textContent = data.about;
  });