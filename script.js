// Panic key: Esc → Google Classroom
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    window.location.href = 'https://classroom.google.com';
  }
});

// Games list — no folder prefix, display names with spaces
const games = [
  { name: "Retro Bowl",               img: "https://i.ibb.co/3zXhY3P/retro-bowl.png", file: "clretrobowl.html" },
  { name: "Drive Mad y",              img: "https://i.ibb.co/0jK0Y3K/drive-mad.png", file: "cldrivemady.html" },
  { name: "Doom",                     img: "https://via.placeholder.com/220/222/fff?text=Doom", file: "cldoom.html" },
  { name: "FNAF",                     img: "https://i.ibb.co/7p4n7vF/fnaf1.png", file: "clFNAF.html" },
  { name: "FNAF 2",                   img: "https://i.ibb.co/3d3v7nK/fnaf2.png", file: "clFNAF2.html" },
  { name: "Five Nights at Epsteins",  img: "https://via.placeholder.com/220/222/fff?text=FNAE", file: "clfiveNightsAtEpsteins.html" },
  { name: "FNAF PS",                  img: "https://via.placeholder.com/220/222/fff?text=FNAFPS", file: "clfnfNAFps.html" },
  { name: "Slope Plus",               img: "https://via.placeholder.com/220/222/fff?text=Slope+", file: "clslopeplus.html" },
  { name: "Lithrio",                  img: "https://via.placeholder.com/220/222/fff?text=Lithrio", file: "cllithrio.html" },
  { name: "Snow Rider",               img: "https://via.placeholder.com/220/222/fff?text=Snow+Rider", file: "clsnowrider.html" },
  { name: "Subway Surfers Beijing",   img: "https://i.ibb.co/7v7p7nL/subway-surfers.png", file: "clsubwaysurfersbeijing.html" },
  { name: "BitLife",                  img: "https://via.placeholder.com/220/222/fff?text=BitLife", file: "clbitlife.html" },
  { name: "Escape Road",              img: "https://via.placeholder.com/220/222/fff?text=Escape+Road", file: "clescaperoad.html" },
  { name: "Crazy Cattle 3D",          img: "https://i.ibb.co/0jK0Y3K/crazy-cattle.png", file: "clcrazycattle3d.html" },
  { name: "Extreme Run 3D",           img: "https://via.placeholder.com/220/222/fff?text=Extreme+Run+3D", file: "clextremerun3d.html" },
  { name: "House of Hazards",         img: "https://via.placeholder.com/220/222/fff?text=House+of+Hazards", file: "clhouseofhazards.html" },
  { name: "Hard Water Tycoon",        img: "https://via.placeholder.com/220/222/fff?text=Hard+Water+Tycoon", file: "clhardwaterycoon.html" }
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
function play(filename) {
  document.getElementById("gameFrame").src = filename;
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
