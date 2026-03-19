// Panic key: Esc → Google Classroom
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    window.location.href = 'https://classroom.google.com';
  }
});

// Games list (display names cleaned up, files keep cl prefix)
const games = [
  { name: "Retro Bowl",               img: "https://i.ibb.co/3zXhY3P/retro-bowl.png", file: "games/clretrobowl.html" },
  { name: "Drive Mad y",              img: "https://i.ibb.co/0jK0Y3K/drive-mad.png", file: "games/cldrivemady.html" },
  { name: "Doom",                     img: "https://via.placeholder.com/220/222/fff?text=Doom", file: "games/cldoom.html" },
  { name: "FNAF",                     img: "https://i.ibb.co/7p4n7vF/fnaf1.png", file: "games/clFNAF.html" },
  { name: "FNAF 2",                   img: "https://i.ibb.co/3d3v7nK/fnaf2.png", file: "games/clFNAF2.html" },
  { name: "Five Nights at Epsteins",  img: "https://via.placeholder.com/220/222/fff?text=FNAE", file: "games/clfiveNightsAtEpsteins.html" },
  { name: "FNAF PS",                  img: "https://via.placeholder.com/220/222/fff?text=FNAFPS", file: "games/clfnfNAFps.html" },
  { name: "Slope Plus",               img: "https://via.placeholder.com/220/222/fff?text=Slope+", file: "games/clslopeplus.html" },
  { name: "Lithrio",                  img: "https://via.placeholder.com/220/222/fff?text=Lithrio", file: "games/cllithrio.html" },
  { name: "Snow Rider",               img: "https://via.placeholder.com/220/222/fff?text=Snow+Rider", file: "games/clsnowrider.html" },
  { name: "Subway Surfers Beijing",   img: "https://i.ibb.co/7v7p7nL/subway-surfers.png", file: "games/clsubwaysurfersbeijing.html" },
  { name: "BitLife",                  img: "https://via.placeholder.com/220/222/fff?text=BitLife", file: "games/clbitlife.html" },
  { name: "Escape Road",              img: "https://via.placeholder.com/220/222/fff?text=Escape+Road", file: "games/clescaperoad.html" },
  { name: "Crazy Cattle 3D",          img: "https://i.ibb.co/0jK0Y3K/crazy-cattle.png", file: "games/clcrazycattle3d.html" },
  { name: "Extreme Run 3D",           img: "https://via.placeholder.com/220/222/fff?text=Extreme+Run+3D", file: "games/clextremerun3d.html" },
  { name: "House of Hazards",         img: "https://via.placeholder.com/220/222/fff?text=House+of+Hazards", file: "games/clhouseofhazards.html" },
  { name: "Hard Water Tycoon",        img: "https://via.placeholder.com/220/222/fff?text=Hard+Water+Tycoon", file: "games/clhardwaterycoon.html" }
  // Add more games here later if you want
];

// Render games
function render(query = "") {
  const filtered = games.filter(g => g.name.toLowerCase().includes(query.toLowerCase()));
  document.getElementById("grid").innerHTML = filtered.map(g => `
    <div class="game" onclick="play('${g.file}')">
      <img src="${g.img}" alt="${g.name}" onerror="this.src='https://via.placeholder.com/220/222/fff?text=${g.name.replace(/ /g,'+')}'"/>
      <h3>${g.name}</h3>
    </div>
  `).join("");
}

// Play game
function play(url) {
  document.getElementById("gameFrame").src = url;
  document.getElementById("player").style.display = "block";
}

function closeGame() {
  document.getElementById("player").style.display = "none";
  document.getElementById("gameFrame").src = "";
}

// Tab switching
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    const target = tab.getAttribute("data-tab");
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.getElementById(target).classList.add("active");
    tab.classList.add("active");
    closeGame();
  });
});

// Cloaker
function applyCloak() {
  const title = document.getElementById("cloakTitle").value.trim() || "Google Docs";
  document.title = title;
}

// Start
render();