const locations = [
  {
    id: "administration-building",
    name: "Administration Building",
    abbreviation: "ADMIN",
    description: "Main administrative offices near the Four Pillars.",
    offices: ["President's Office", "Office of the VPHE", "Treasurer's Office", "Administrative Service Office", "HR Management Office", "University Student Recruitment Office"],
    hotspot: { x: 45.4, y: 58.0, width: 11.8, height: 8.9 }
  },
  {
    id: "adriatico-hall",
    name: "Adriatico Hall",
    abbreviation: "A",
    description: "College Reading Center and academic spaces.",
    offices: ["College Reading Center (CRC)", "Study areas", "Faculty rooms"],
    hotspot: { x: 42.0, y: 21.2, width: 5.2, height: 30.0 }
  },
  {
    id: "alingal-hall",
    name: "Alingal Hall",
    abbreviation: "AL",
    description: "Senior High School and multipurpose facilities.",
    offices: ["Alingal Multipurpose Hall", "Alingal Function Room", "COL Dean's Office", "Graduate School Dean's Office", "Computer Laboratories", "Biology Laboratory"],
    hotspot: { x: 63.3, y: 18.1, width: 8.4, height: 17.8 }
  },
  {
    id: "arrupe-hall",
    name: "Arrupe Hall",
    abbreviation: "AR",
    description: "Convention hall and student support spaces.",
    offices: ["Arrupe Convention Hall", "Psychology Laboratory", "Media Studies Laboratory", "Stock Room", "Consultation Room", "Prayer Rooms"],
    hotspot: { x: 52.0, y: 4.2, width: 10.8, height: 18.0 }
  },
  {
    id: "bonoan-hall",
    name: "Bonoan Hall",
    abbreviation: "RB",
    description: "Cafeteria and nearby campus services.",
    offices: ["Bonoan Cafeteria", "Dining area", "Student services"],
    hotspot: { x: 56.0, y: 33.0, width: 7.3, height: 7.9 }
  },
  {
    id: "burns-hall",
    name: "Burns Hall",
    abbreviation: "B",
    description: "Health, community, and admissions-related offices.",
    offices: ["College Infirmary", "Ateneo Higher Education Health Office", "Center for Community Development", "CBA Dean's Office", "CBA Chairperson's Office"],
    hotspot: { x: 59.7, y: 43.0, width: 5.4, height: 20.0 }
  },
  {
    id: "dolan-hall",
    name: "Dolan Hall",
    abbreviation: "D",
    description: "Computer and engineering laboratory building.",
    offices: ["COE Dean's Office", "COE Chairperson's Office", "CHSS Dean's Office", "CHSS Chairperson's Office", "SHS Computer Laboratory", "Drawing Laboratory", "Engineering Laboratory"],
    hotspot: { x: 32.5, y: 22.7, width: 9.4, height: 15.6 }
  },
  {
    id: "engineering-building",
    name: "Engineering Building",
    abbreviation: "EB",
    description: "Engineering, architecture, and smart technology facilities.",
    offices: ["CSE Dean's Office", "CSE Chairperson's Office", "Hydraulics Laboratory", "Architecture Studio", "UTM Room", "Smart Center"],
    hotspot: { x: 22.5, y: 34.7, width: 5.0, height: 9.6 }
  },
  {
    id: "eliazo-hall",
    name: "Eliazo Hall",
    abbreviation: "E",
    description: "Academic building beside Dolan Hall.",
    offices: ["Classrooms", "Faculty rooms", "Student learning spaces"],
    hotspot: { x: 24.8, y: 39.9, width: 6.7, height: 19.0 }
  },
  {
    id: "phelan-hall",
    name: "Phelan Hall",
    abbreviation: "P",
    description: "Academic and administrative building for computing and multimedia services.",
    offices: ["CCS Dean's Office", "CCS Chairperson's Office", "CCS Conference Room", "ICT Center", "Science Lecture Room", "NOCS Main Office", "Institutional Media Center", "Chemistry Laboratory", "Physics Laboratory"],
    hotspot: { x: 31.3, y: 40.1, width: 6.7, height: 25.0 }
  },
  {
    id: "santos-hall",
    name: "Santos Hall",
    abbreviation: "S",
    description: "College of Nursing and administrative support building.",
    offices: ["College of Nursing", "College Registrar's Office", "Admission and Aid Office", "Campus Ministry Office", "CON Dean's Office", "Nursing Amphitheater", "Skills Laboratory", "MIS", "Data Center Office", "DIA Lab"],
    hotspot: { x: 38.2, y: 45.0, width: 4.5, height: 20.5 }
  },
  {
    id: "xavier-hall",
    name: "Xavier Hall",
    abbreviation: "X",
    description: "Student affairs, organizations, and alumni offices.",
    offices: ["Office of Student Affairs", "Organization Offices", "SSG Office", "Xavier Dorms", "ADNU General Alumni Association", "University Press"],
    hotspot: { x: 18.6, y: 72.5, width: 15.0, height: 19.0 }
  },
  {
    id: "ricci-hall",
    name: "Ricci Hall",
    abbreviation: "RC",
    description: "Nursing and accountancy offices near Madrigal Administration.",
    offices: ["CHN Office", "Accountancy Office", "AdNU MAGIS TB HQ"],
    hotspot: { x: 65.0, y: 50.3, width: 4.4, height: 6.7 }
  },
  {
    id: "sanz-hall",
    name: "Sanz Hall",
    abbreviation: "SH",
    description: "Guidance, testing, and placement offices.",
    offices: ["College Guidance Center", "Institutional Testing Office", "Career and Placement Program Office", "Gender Concerns Program Office", "Director's Office", "Center for Psychological Services", "Center for Local Governance"],
    hotspot: { x: 17.4, y: 63.0, width: 5.3, height: 9.4 }
  },
  {
    id: "belardo-hall",
    name: "Belardo Hall",
    abbreviation: "HB",
    description: "Junior High School classrooms and principal's office.",
    offices: ["SHS Strand Chairperson's Office", "SHS Classrooms", "Junior High School spaces"],
    hotspot: { x: 20.8, y: 44.0, width: 5.0, height: 15.3 }
  },
  {
    id: "gymnasium",
    name: "Gymnasium",
    abbreviation: "GYM",
    description: "University gymnasium and performance facilities.",
    offices: ["University Gym", "University Choir", "Band Office", "Event floor"],
    hotspot: { x: 13.8, y: 72.0, width: 12.9, height: 19.3 }
  },
  {
    id: "james-obrien-library",
    name: "James O'Brien Library",
    abbreviation: "LIB",
    description: "Main university library.",
    offices: ["Library collections", "Reading areas", "Research support", "Study spaces"],
    hotspot: { x: 47.4, y: 25.6, width: 7.0, height: 8.2 }
  },
  {
    id: "covered-courts",
    name: "Covered Courts",
    abbreviation: "CC",
    description: "Large covered sports courts on the east side of campus.",
    offices: ["Basketball courts", "Volleyball courts", "Covered activity area"],
    hotspot: { x: 75.8, y: 35.3, width: 17.0, height: 12.0 }
  },
  {
    id: "tennis-court",
    name: "Tennis Court",
    abbreviation: "TC",
    description: "Outdoor tennis court beside Alingal Hall and the covered courts.",
    offices: ["Tennis court", "Outdoor sports area"],
    hotspot: { x: 70.5, y: 36.8, width: 3.0, height: 16.0 }
  },
  {
    id: "football-field",
    name: "Football Field",
    abbreviation: "FIELD",
    description: "Open field for football and outdoor activities.",
    offices: ["Football field", "Outdoor PE activities"],
    hotspot: { x: 77.0, y: 25.2, width: 13.0, height: 7.0 }
  },
  {
    id: "christ-the-king-church",
    name: "Christ the King Church",
    abbreviation: "CTK",
    description: "Campus church near the Main Gate.",
    offices: ["Church", "Prayer area", "Campus ministry activities"],
    hotspot: { x: 63.0, y: 80.0, width: 11.0, height: 11.5 }
  },
  {
    id: "jesuit-residence",
    name: "Jesuit Residence",
    abbreviation: "JR",
    description: "Residence area beside Christ the King Church.",
    offices: ["Jesuit Residence", "Community residence"],
    hotspot: { x: 76.0, y: 77.0, width: 9.8, height: 12.5 }
  },
  {
    id: "faber-center",
    name: "Faber Center",
    abbreviation: "FC",
    description: "Campus center beside the Jesuit Residence.",
    offices: ["Faber Center", "Meeting spaces"],
    hotspot: { x: 74.8, y: 90.5, width: 5.4, height: 5.5 }
  },
  {
    id: "xavier-grounds",
    name: "Xavier Grounds",
    abbreviation: "XG",
    description: "Open grounds near Xavier Hall and the Main Gate.",
    offices: ["Open grounds", "Campus events", "Student activities"],
    hotspot: { x: 34.2, y: 86.0, width: 16.0, height: 7.4 }
  },
  {
    id: "main-gate",
    name: "Main Gate",
    abbreviation: "G1",
    description: "Main entrance along the south side of campus.",
    offices: ["Main Gate", "Primary entrance", "Security checkpoint"],
    hotspot: { x: 47.8, y: 93.0, width: 7.5, height: 5.5 }
  },
  {
    id: "second-gate",
    name: "Second Gate",
    abbreviation: "G2",
    description: "Santa Cruz Gate on the west side of campus.",
    offices: ["Second Gate", "Sta. Cruz Gate", "Security checkpoint"],
    hotspot: { x: 18.2, y: 28.0, width: 6.8, height: 7.5 }
  },
  {
    id: "third-gate",
    name: "Third Gate",
    abbreviation: "G3",
    description: "Queborac Gate on the east side of campus.",
    offices: ["Third Gate", "Queborac Gate", "Security checkpoint"],
    hotspot: { x: 93.2, y: 21.2, width: 5.0, height: 8.5 }
  }
];

const viewport = document.querySelector("#mapViewport");
const splashScreen = document.querySelector("#splashScreen");
const transformEl = document.querySelector("#mapTransform");
const hotspotsEl = document.querySelector("#hotspots");
const selectionLayer = document.querySelector("#selectionLayer");
const searchInput = document.querySelector("#map-search");
const resultsEl = document.querySelector(".results");
const directoryList = document.querySelector("#directoryList");
const directoryCount = document.querySelector("#directoryCount");
const tapHint = document.querySelector("#tapHint");
const appShell = document.querySelector(".app-shell");
const cleanModeButton = document.querySelector("#cleanMode");
const wideViewButton = document.querySelector("#wideView");
const directoryToggle = document.querySelector("#directoryToggle");
const viewLabeledMapButton = document.querySelector("#viewLabeledMap");
const downloadMapButton = document.querySelector("#downloadMap");
const welcomeModal = document.querySelector("#welcomeModal");
const closeWelcome = document.querySelector("#closeWelcome");
const startMap = document.querySelector("#startMap");
const quizLaunch = document.querySelector("#quizLaunch");
const quizModal = document.querySelector("#quizModal");
const closeQuiz = document.querySelector("#closeQuiz");
const quizProgress = document.querySelector("#quizProgress");
const quizScore = document.querySelector("#quizScore");
const quizTitle = document.querySelector("#quizTitle");
const quizQuestion = document.querySelector("#quizQuestion");
const quizOptions = document.querySelector("#quizOptions");
const quizFeedback = document.querySelector("#quizFeedback");
const quizNext = document.querySelector("#quizNext");
const clearSearch = document.querySelector(".clear-search");
const infoPanel = document.querySelector("#infoPanel");
const closePanel = document.querySelector("#closePanel");
const selectedAbbreviation = document.querySelector("#selectedAbbreviation");
const selectedName = document.querySelector("#selectedName");
const selectedDescription = document.querySelector("#selectedDescription");
const selectedOffices = document.querySelector("#selectedOffices");

let view = { x: 0, y: 0, scale: 1 };
let minScale = 1;
let coverScale = 1;
let wideScale = 1;
const maxScale = 4.2;
let mapBaseWidth = 0;
let mapBaseHeight = 0;
let activeLocation = null;
let animationFrame = null;
let renderFrame = null;
const pointers = new Map();
let dragStart = null;
let pinchStart = null;
let sheetDrag = null;
let lastTap = { time: 0, x: 0, y: 0 };
let suppressHotspotClickUntil = 0;
const defaultLocationId = "administration-building";
const quizQuestions = [
  {
    question: "Which building is marked ADMIN on the map?",
    options: ["Administration Building", "Adriatico Hall", "Arrupe Hall"],
    answer: "Administration Building"
  },
  {
    question: "Which gate is near Christ the King Church?",
    options: ["Main Gate", "Second Gate", "Third Gate"],
    answer: "Main Gate"
  },
  {
    question: "Where can you find the main library?",
    options: ["James O'Brien Library", "Bonoan Hall", "Sanz Hall"],
    answer: "James O'Brien Library"
  },
  {
    question: "Which location is best for large indoor sports activities?",
    options: ["Covered Courts", "Faber Center", "Ricci Hall"],
    answer: "Covered Courts"
  },
  {
    question: "Which building code belongs to Phelan Hall?",
    options: ["P", "RB", "SH"],
    answer: "P"
  }
];
let quizIndex = 0;
let quizPoints = 0;
let quizAnswered = false;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function renderTransform() {
  const rect = viewport.getBoundingClientRect();
  const scaledWidth = mapBaseWidth * view.scale;
  const scaledHeight = mapBaseHeight * view.scale;
  const minX = Math.min(0, rect.width - scaledWidth);
  const minY = Math.min(0, rect.height - scaledHeight);

  view.x = scaledWidth <= rect.width ? (rect.width - scaledWidth) / 2 : clamp(view.x, minX, 0);
  view.y = scaledHeight <= rect.height ? (rect.height - scaledHeight) / 2 : clamp(view.y, minY, 0);
  transformEl.style.transform = `translate3d(${view.x}px, ${view.y}px, 0) scale(${view.scale})`;
  transformEl.style.setProperty("--marker-scale", String(1 / view.scale));
}

function getLocationById(id) {
  return locations.find((location) => location.id === id);
}

function requestRender() {
  if (renderFrame) return;
  renderFrame = requestAnimationFrame(() => {
    renderFrame = null;
    renderTransform();
  });
}

function animateTo(target, duration = 420) {
  cancelAnimationFrame(animationFrame);
  cancelAnimationFrame(renderFrame);
  renderFrame = null;
  const start = { ...view };
  const startTime = performance.now();

  function tick(now) {
    const progress = clamp((now - startTime) / duration, 0, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    view = {
      x: start.x + (target.x - start.x) * eased,
      y: start.y + (target.y - start.y) * eased,
      scale: start.scale + (target.scale - start.scale) * eased
    };
    renderTransform();

    if (progress < 1) {
      animationFrame = requestAnimationFrame(tick);
    }
  }

  animationFrame = requestAnimationFrame(tick);
}

function setScaleAt(nextScale, originX, originY) {
  cancelAnimationFrame(animationFrame);
  const oldScale = view.scale;
  const scale = clamp(nextScale, minScale, maxScale);
  const mapX = (originX - view.x) / oldScale;
  const mapY = (originY - view.y) / oldScale;

  view.scale = scale;
  view.x = originX - mapX * scale;
  view.y = originY - mapY * scale;
  requestRender();
}

function centerOn(location, zoom = 2.45) {
  animateTo(getLocationView(location, zoom));
}

function getLocationView(location, zoom = 2.45) {
  const rect = viewport.getBoundingClientRect();
  const centerX = (location.hotspot.x + location.hotspot.width / 2) / 100 * mapBaseWidth;
  const centerY = (location.hotspot.y + location.hotspot.height / 2) / 100 * mapBaseHeight;
  const targetScale = clamp(Math.max(zoom, minScale), minScale, maxScale);

  return {
    scale: targetScale,
    x: rect.width / 2 - centerX * targetScale,
    y: rect.height / 2 - centerY * targetScale
  };
}

function focusLocation(location, zoom = 2.45, animate = true) {
  activeLocation = location;
  renderSelection(location);
  updateActiveControls(location);
  if (animate) {
    centerOn(location, zoom);
    return;
  }
  view = getLocationView(location, zoom);
  renderTransform();
}

function renderHotspots() {
  hotspotsEl.innerHTML = "";
  locations.forEach((location) => {
    const button = document.createElement("button");
    const { x, y, width, height } = location.hotspot;
    button.type = "button";
    button.className = "hotspot";
    button.style.left = `${x}%`;
    button.style.top = `${y}%`;
    button.style.width = `${width}%`;
    button.style.height = `${height}%`;
    button.setAttribute("aria-label", `Select ${location.name}`);
    button.dataset.id = location.id;
    const marker = document.createElement("span");
    marker.className = "map-code-marker";
    marker.textContent = location.abbreviation;
    button.append(marker);
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      if (performance.now() < suppressHotspotClickUntil) return;
      selectLocation(location, true);
    });
    hotspotsEl.append(button);
  });
}

function renderDirectory() {
  directoryCount.textContent = `${locations.length} locations`;
  directoryList.innerHTML = "";
  locations.forEach((location) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "directory-item";
    item.dataset.id = location.id;
    item.setAttribute("aria-label", `Locate ${location.name}`);

    const code = document.createElement("span");
    code.className = "directory-code";
    code.textContent = location.abbreviation;

    const copy = document.createElement("span");
    copy.className = "directory-copy";

    const name = document.createElement("span");
    name.className = "directory-name";
    name.textContent = location.name;

    const summary = document.createElement("span");
    summary.className = "directory-summary";
    summary.textContent = location.offices.slice(0, 2).join(" / ");

    copy.append(name, summary);
    item.append(code, copy);
    item.addEventListener("click", () => selectLocation(location, true));
    directoryList.append(item);
  });
}

function updateActiveControls(location) {
  document.querySelectorAll(".directory-item, .hotspot").forEach((element) => {
    element.classList.toggle("is-active", Boolean(location && element.dataset.id === location.id));
  });
}

function renderSelection(location) {
  selectionLayer.innerHTML = "";
  if (!location) return;

  const { x, y, width, height } = location.hotspot;
  const glow = document.createElement("div");
  glow.className = "selection-glow";
  glow.style.left = `${x}%`;
  glow.style.top = `${y}%`;
  glow.style.width = `${width}%`;
  glow.style.height = `${height}%`;

  const pin = document.createElement("div");
  pin.className = "map-pin";
  pin.style.left = `${x + width / 2}%`;
  pin.style.top = `${Math.max(2, y - 1.2)}%`;

  const label = document.createElement("div");
  label.className = "map-label";
  label.textContent = location.name;
  label.style.left = `${x + width / 2}%`;
  label.style.top = `${Math.max(6, y - 2.8)}%`;

  selectionLayer.append(glow, pin, label);
}

function renderPanel(location) {
  selectedAbbreviation.textContent = location.abbreviation;
  selectedName.textContent = location.name;
  selectedDescription.textContent = location.description;
  selectedOffices.innerHTML = "";
  location.offices.forEach((office) => {
    const item = document.createElement("li");
    item.textContent = office;
    selectedOffices.append(item);
  });
  infoPanel.classList.add("is-open");
  infoPanel.setAttribute("aria-hidden", "false");
}

function selectLocation(location, shouldMove = true) {
  activeLocation = location;
  renderSelection(location);
  renderPanel(location);
  updateActiveControls(location);
  closeResults();
  tapHint.classList.add("is-hidden");
  searchInput.value = location.name;
  clearSearch.classList.add("is-visible");
  if (shouldMove) centerOn(location);
}

function searchLocations(query) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return [];

  return locations
    .map((location) => {
      const haystack = [
        location.name,
        location.abbreviation,
        location.description,
        ...location.offices
      ].join(" ").toLowerCase();
      const startsWithName = location.name.toLowerCase().startsWith(normalized) ? 2 : 0;
      return haystack.includes(normalized) ? { location, score: startsWithName + 1 } : null;
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score || a.location.name.localeCompare(b.location.name))
    .slice(0, 8)
    .map((entry) => entry.location);
}

function renderResults(matches) {
  resultsEl.innerHTML = "";
  if (!matches.length) {
    closeResults();
    return;
  }

  matches.forEach((location) => {
    const option = document.createElement("button");
    option.type = "button";
    option.className = "result-option";
    option.setAttribute("role", "option");
    option.innerHTML = `
      <span class="result-badge">${location.abbreviation}</span>
      <span>
        <span class="result-main">${location.name}</span>
        <span class="result-sub">${location.offices.slice(0, 2).join(" / ")}</span>
      </span>
    `;
    option.addEventListener("click", () => selectLocation(location, true));
    resultsEl.append(option);
  });
  resultsEl.classList.add("is-open");
}

function closeResults() {
  resultsEl.classList.remove("is-open");
}

function resetMap() {
  activeLocation = null;
  renderSelection(null);
  updateActiveControls(null);
  infoPanel.classList.remove("is-open");
  infoPanel.setAttribute("aria-hidden", "true");
  searchInput.value = "";
  clearSearch.classList.remove("is-visible");
  closeResults();
  tapHint.classList.remove("is-hidden");
  animateTo({ x: 0, y: 0, scale: coverScale }, 360);
}

function setupInitialView() {
  const viewportRect = viewport.getBoundingClientRect();
  const mapWidth = Math.min(viewportRect.width, viewportRect.height * 1.6);
  const mapHeight = mapWidth / 1.6;
  mapBaseWidth = mapWidth;
  mapBaseHeight = mapHeight;
  transformEl.style.width = `${mapWidth}px`;
  wideScale = Math.min(viewportRect.width / mapWidth, viewportRect.height / mapHeight);
  coverScale = Math.max(viewportRect.width / mapWidth, viewportRect.height / mapHeight);
  minScale = wideScale;
  view = {
    scale: wideScale,
    x: (viewportRect.width - mapWidth * wideScale) / 2,
    y: getWideY(viewportRect, mapHeight, wideScale)
  };
  renderTransform();
}

function getWideY(viewportRect, mapHeight, scale) {
  const centeredY = (viewportRect.height - mapHeight * scale) / 2;
  const mobileTopBias = window.matchMedia("(max-width: 759px)").matches ? -Math.min(96, viewportRect.height * 0.12) : 0;
  return centeredY + mobileTopBias;
}

function showWideView() {
  activeLocation = null;
  renderSelection(null);
  updateActiveControls(null);
  infoPanel.classList.remove("is-open");
  infoPanel.setAttribute("aria-hidden", "true");
  closeResults();
  const viewportRect = viewport.getBoundingClientRect();
  animateTo({ x: 0, y: getWideY(viewportRect, mapBaseHeight, wideScale), scale: wideScale }, 360);
}

viewport.addEventListener("pointerdown", (event) => {
  cancelAnimationFrame(animationFrame);
  viewport.setPointerCapture(event.pointerId);
  const hotspot = event.target.closest(".hotspot");
  pointers.set(event.pointerId, { x: event.clientX, y: event.clientY, hotspotId: hotspot?.dataset.id || null });
  viewport.classList.add("is-dragging");

  if (pointers.size === 1) {
    dragStart = {
      pointerX: event.clientX,
      pointerY: event.clientY,
      x: view.x,
      y: view.y,
      moved: false,
      hotspotId: hotspot?.dataset.id || null
    };
  } else if (pointers.size === 2) {
    const points = Array.from(pointers.values());
    const centerX = (points[0].x + points[1].x) / 2;
    const centerY = (points[0].y + points[1].y) / 2;
    pinchStart = {
      distance: Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y),
      scale: view.scale,
      mapX: (centerX - view.x) / view.scale,
      mapY: (centerY - view.y) / view.scale
    };
    suppressHotspotClickUntil = performance.now() + 350;
  }
});

viewport.addEventListener("pointermove", (event) => {
  if (!pointers.has(event.pointerId)) return;
  pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });

  if (pointers.size === 1 && dragStart) {
    const moveX = event.clientX - dragStart.pointerX;
    const moveY = event.clientY - dragStart.pointerY;
    if (Math.hypot(moveX, moveY) > 4) dragStart.moved = true;
    view.x = dragStart.x + event.clientX - dragStart.pointerX;
    view.y = dragStart.y + event.clientY - dragStart.pointerY;
    requestRender();
  } else if (pointers.size === 2 && pinchStart) {
    const points = Array.from(pointers.values());
    const distance = Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y);
    const centerX = (points[0].x + points[1].x) / 2;
    const centerY = (points[0].y + points[1].y) / 2;
    const scale = clamp(pinchStart.scale * (distance / pinchStart.distance), minScale, maxScale);
    view.scale = scale;
    view.x = centerX - pinchStart.mapX * scale;
    view.y = centerY - pinchStart.mapY * scale;
    requestRender();
  }
});

function endPointer(event) {
  const wasTap = dragStart && !dragStart.moved && pointers.size === 1;
  if (dragStart?.moved || pinchStart) {
    suppressHotspotClickUntil = performance.now() + 250;
  }
  pointers.delete(event.pointerId);
  viewport.classList.toggle("is-dragging", pointers.size > 0);
  if (pointers.size === 0) {
    if (wasTap) {
      const now = performance.now();
      const tappedLocation = dragStart.hotspotId ? getLocationById(dragStart.hotspotId) : null;
      if (tappedLocation) {
        suppressHotspotClickUntil = now + 350;
        selectLocation(tappedLocation, true);
        dragStart = null;
        pinchStart = null;
        return;
      }
      const distance = Math.hypot(event.clientX - lastTap.x, event.clientY - lastTap.y);
      if (now - lastTap.time < 280 && distance < 28) {
        setScaleAt(view.scale < 2.2 ? 2.45 : wideScale, event.clientX, event.clientY);
        lastTap = { time: 0, x: 0, y: 0 };
      } else {
        lastTap = { time: now, x: event.clientX, y: event.clientY };
      }
    }
    dragStart = null;
    pinchStart = null;
  } else if (pointers.size === 1) {
    const remaining = Array.from(pointers.values())[0];
    dragStart = {
      pointerX: remaining.x,
      pointerY: remaining.y,
      x: view.x,
      y: view.y,
      moved: true
    };
    pinchStart = null;
  }
}

viewport.addEventListener("pointerup", endPointer);
viewport.addEventListener("pointercancel", endPointer);
viewport.addEventListener("wheel", (event) => {
  event.preventDefault();
  const delta = event.deltaY > 0 ? -0.14 : 0.14;
  setScaleAt(view.scale + delta, event.clientX, event.clientY);
}, { passive: false });

document.querySelector("#zoomIn").addEventListener("click", () => {
  const rect = viewport.getBoundingClientRect();
  setScaleAt(view.scale + 0.35, rect.width / 2, rect.height / 2);
});

document.querySelector("#zoomOut").addEventListener("click", () => {
  const rect = viewport.getBoundingClientRect();
  setScaleAt(view.scale - 0.35, rect.width / 2, rect.height / 2);
});

cleanModeButton.addEventListener("click", () => {
  const isClean = appShell.classList.toggle("clean-mode");
  cleanModeButton.classList.toggle("is-active", isClean);
  cleanModeButton.setAttribute("aria-pressed", String(isClean));
});

directoryToggle.addEventListener("click", () => {
  const isCollapsed = appShell.classList.toggle("directory-collapsed");
  directoryToggle.setAttribute("aria-expanded", String(!isCollapsed));
  directoryToggle.setAttribute("aria-label", isCollapsed ? "Show building list" : "Hide building list");
});

wideViewButton.addEventListener("click", showWideView);

viewLabeledMapButton.addEventListener("click", () => {
  window.open("assets/labeled-map-reference.png", "_blank", "noopener");
});

downloadMapButton.addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "assets/labeled-map-reference.png";
  link.download = "adnu map.png";
  document.body.append(link);
  link.click();
  link.remove();
});

function closeWelcomeModal() {
  welcomeModal.classList.remove("is-open");
}

function openQuiz() {
  closeWelcomeModal();
  quizIndex = 0;
  quizPoints = 0;
  quizAnswered = false;
  quizModal.classList.add("is-open");
  quizModal.setAttribute("aria-hidden", "false");
  renderQuizQuestion();
}

function closeQuizModal() {
  quizModal.classList.remove("is-open");
  quizModal.setAttribute("aria-hidden", "true");
}

function renderQuizQuestion() {
  const question = quizQuestions[quizIndex];
  quizAnswered = false;
  quizTitle.textContent = "KOMPAS Quiz Mode";
  quizProgress.textContent = `Question ${quizIndex + 1} of ${quizQuestions.length}`;
  quizScore.textContent = `Score ${quizPoints}`;
  quizQuestion.textContent = question.question;
  quizFeedback.textContent = "";
  quizNext.textContent = quizIndex === quizQuestions.length - 1 ? "See Score" : "Next";
  quizNext.disabled = true;
  quizOptions.innerHTML = "";

  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quiz-option";
    button.textContent = option;
    button.addEventListener("click", () => answerQuiz(button, option));
    quizOptions.append(button);
  });
}

function answerQuiz(button, answer) {
  if (quizAnswered) return;
  const question = quizQuestions[quizIndex];
  const isCorrect = answer === question.answer;
  quizAnswered = true;
  if (isCorrect) quizPoints += 1;
  quizScore.textContent = `Score ${quizPoints}`;
  quizFeedback.textContent = isCorrect ? "Correct. Nice navigation instincts." : `Not quite. Answer: ${question.answer}.`;

  quizOptions.querySelectorAll(".quiz-option").forEach((optionButton) => {
    optionButton.disabled = true;
    if (optionButton.textContent === question.answer) optionButton.classList.add("is-correct");
  });
  if (!isCorrect) button.classList.add("is-wrong");
  quizNext.disabled = false;
}

function showQuizResult() {
  quizTitle.textContent = "Quiz Complete";
  quizProgress.textContent = "Finished";
  quizScore.textContent = `Score ${quizPoints}/${quizQuestions.length}`;
  quizQuestion.textContent = quizPoints >= 4 ? "You are ready to chart your Atenean journey." : "Good start. Explore the map and try again.";
  quizFeedback.textContent = "";
  quizOptions.innerHTML = "";
  quizNext.textContent = "Play Again";
  quizNext.disabled = false;
}

function advanceQuiz() {
  if (quizIndex >= quizQuestions.length) {
    openQuiz();
    return;
  }
  if (quizIndex === quizQuestions.length - 1) {
    quizIndex += 1;
    showQuizResult();
    return;
  }
  quizIndex += 1;
  renderQuizQuestion();
}

closeWelcome.addEventListener("click", closeWelcomeModal);
startMap.addEventListener("click", closeWelcomeModal);
welcomeModal.addEventListener("click", (event) => {
  if (event.target === welcomeModal) closeWelcomeModal();
});

splashScreen.addEventListener("animationend", () => {
  splashScreen.remove();
});

quizLaunch.addEventListener("click", openQuiz);
closeQuiz.addEventListener("click", closeQuizModal);
quizNext.addEventListener("click", advanceQuiz);
quizModal.addEventListener("click", (event) => {
  if (event.target === quizModal) closeQuizModal();
});

closePanel.addEventListener("click", () => {
  infoPanel.classList.remove("is-open");
  infoPanel.setAttribute("aria-hidden", "true");
});

infoPanel.addEventListener("pointerdown", (event) => {
  if (window.matchMedia("(min-width: 760px)").matches) return;
  if (event.target.closest("button")) return;
  infoPanel.setPointerCapture(event.pointerId);
  sheetDrag = {
    id: event.pointerId,
    startY: event.clientY,
    lastOffset: 0
  };
  infoPanel.classList.add("is-dragging");
});

infoPanel.addEventListener("pointermove", (event) => {
  if (!sheetDrag || sheetDrag.id !== event.pointerId) return;
  const offset = Math.max(0, event.clientY - sheetDrag.startY);
  sheetDrag.lastOffset = offset;
  infoPanel.style.transform = `translateY(${offset}px)`;
});

function endSheetDrag(event) {
  if (!sheetDrag || sheetDrag.id !== event.pointerId) return;
  const shouldClose = sheetDrag.lastOffset > 120;
  infoPanel.classList.remove("is-dragging");
  infoPanel.style.transform = "";
  sheetDrag = null;
  if (shouldClose) {
    infoPanel.classList.remove("is-open");
    infoPanel.setAttribute("aria-hidden", "true");
  }
}

infoPanel.addEventListener("pointerup", endSheetDrag);
infoPanel.addEventListener("pointercancel", endSheetDrag);

searchInput.addEventListener("input", () => {
  const value = searchInput.value;
  clearSearch.classList.toggle("is-visible", value.length > 0);
  renderResults(searchLocations(value));
});

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    const firstMatch = searchLocations(searchInput.value)[0];
    if (firstMatch) selectLocation(firstMatch, true);
  }
  if (event.key === "Escape") closeResults();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeResults();
    closeWelcomeModal();
    closeQuizModal();
  }
});

document.querySelector(".search").addEventListener("submit", (event) => {
  event.preventDefault();
  const firstMatch = searchLocations(searchInput.value)[0];
  if (firstMatch) selectLocation(firstMatch, true);
});

clearSearch.addEventListener("click", () => {
  searchInput.value = "";
  searchInput.focus();
  clearSearch.classList.remove("is-visible");
  closeResults();
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".search")) closeResults();
});

window.addEventListener("resize", () => {
  setupInitialView();
  if (activeLocation) {
    renderSelection(activeLocation);
    centerOn(activeLocation, Math.max(view.scale, 2.2));
  }
});

// Edit the locations array above to adjust building information and percentage hotspots.
renderHotspots();
renderDirectory();
setupInitialView();
focusLocation(locations.find((location) => location.id === defaultLocationId) || locations[0], 2.45, false);
