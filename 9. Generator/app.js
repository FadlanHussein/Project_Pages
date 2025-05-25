const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
} else {
  document.body.classList.remove("dark-mode");
}
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  const isDarkMode = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
}
async function fetchQuote() {
  const apiKey = "bYbjXSeBZASW5lJ5FHBKZg==dvgugu4oLxsYxamv";
  const url = "https://api.api-ninjas.com/v1/quotes";
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: { "X-Api-Key": apiKey },
    });
    
    if(!response.ok){
        throw new Error(response.statusText);
    }
    const result = await response.json();
   
    const quote=result[0].quote
    const author=result[0].author
    document.getElementById("quote").textContent=`${quote}`
    document.getElementById("author").textContent=`${author}`
  } catch {
    document.getElementById("quote").textContent="Faild to load quote"
    document.getElementById("author").textContent=""

  }
}

fetchQuote()