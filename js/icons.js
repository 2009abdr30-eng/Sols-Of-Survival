(function () {
  "use strict";
  const s = 'stroke="#2B1E1A" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"';
  const sf = 'fill="none" ' + s;
  const L = (d, c, w) => { w = w || 3.4; return `<path d="${d}" fill="none" stroke="#2B1E1A" stroke-width="${w + 2.6}" stroke-linecap="round" stroke-linejoin="round"/><path d="${d}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`; };
  const C = { ink: "#2B1E1A", white: "#F4F1EC", grey: "#B8B4AE", grey2: "#9AA0A6", grey3: "#6B7178", glass: "#BFE6EF", solar: "#3C6FD1", plant: "#5DBB63", water: "#4FA3E0",
    yellow: "#FFC83D", green: "#4CC38A", red: "#F25F5C", cyan: "#3EC6E0", gold: "#FFB000", navy: "#1F3B73", pink: "#F49AC1", purple: "#8E6CCF", mars1: "#F0A271", mars2: "#D9774B", mars3: "#A9502F", peach: "#F7D9C2", space: "#1B1F3A" };

  const I = {
    bolt: `<path d="M18.5 3 7 18h7.5l-2.5 11L25 13h-7.5l3-10z" fill="${C.yellow}" ${s}/>`,
    air: `<path d="M9 23h14.5a5 5 0 0 0 .5-10 7.5 7.5 0 0 0-14-2.2A6.2 6.2 0 0 0 9 23z" fill="${C.glass}" ${s}/>` + L("M5 27.5h10", C.cyan, 2.4) + `<circle cx="13" cy="15" r="1.6" fill="#fff"/>`,
    heart: `<path d="M16 27.5S3.5 20 3.5 11.6A6.2 6.2 0 0 1 16 8.4a6.2 6.2 0 0 1 12.5 3.2C28.5 20 16 27.5 16 27.5z" fill="${C.red}" ${s}/><path d="M9 11a3 3 0 0 1 3-3" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/>`,
    coin: `<circle cx="16" cy="16" r="12.5" fill="${C.gold}" ${s}/><circle cx="16" cy="16" r="8.5" fill="${C.yellow}" stroke="${C.ink}" stroke-width="1.6"/><path d="m16 10.5 1.7 3.5 3.8.5-2.8 2.7.7 3.8L16 19.2 12.6 21l.7-3.8-2.8-2.7 3.8-.5z" fill="${C.gold}" stroke="${C.ink}" stroke-width="1.3" stroke-linejoin="round"/>`,
    drop: `<path d="M16 3.5S7 13.5 7 19.5a9 9 0 0 0 18 0c0-6-9-16-9-16z" fill="${C.water}" ${s}/><path d="M11.5 19.5a4.5 4.5 0 0 0 3 4.3" stroke="#fff" stroke-width="2.2" fill="none" stroke-linecap="round"/>`,
    play: `<path d="M9 5.5 26 16 9 26.5z" fill="#fff" ${s}/>`,
    back: `<path d="M23 5.5 6 16l17 10.5z" fill="#fff" ${s}/>`,
    radiation: `<circle cx="16" cy="16" r="13" fill="${C.yellow}" ${s}/><path d="M16 16 10.2 6.3a11 11 0 0 1 11.6 0zM16 16h11a11 11 0 0 1-5.6 9.6zM16 16l-5.4 9.6A11 11 0 0 1 5 16z" fill="${C.ink}"/><circle cx="16" cy="16" r="3.2" fill="${C.yellow}" stroke="${C.ink}" stroke-width="2"/>`,
    shield: `<path d="M16 3 5 7.5v8c0 7 5 11 11 13.5 6-2.5 11-6.5 11-13.5v-8z" fill="${C.cyan}" ${s}/><path d="M16 7v18.5c4-2 7.5-5 7.5-10V9.8z" fill="#fff" opacity=".35"/>`,
    sun: L("M16 2.5v3.5M16 26v3.5M2.5 16H6M26 16h3.5M6.5 6.5l2.5 2.5M23 23l2.5 2.5M25.5 6.5 23 9M9 23l-2.5 2.5", C.gold, 2.6) + `<circle cx="16" cy="16" r="7" fill="${C.yellow}" ${s}/>`,
    ice: `<path d="M16 4 27 9v13l-11 6-11-6V9z" fill="${C.glass}" ${s}/><path d="M5 9l11 5 11-5M16 14v14" ${sf}/><path d="M9 12.5l3 1.4" stroke="#fff" stroke-width="2" stroke-linecap="round"/>`,
    sprout: L("M16 28.5V15", C.plant, 2.6) + `<path d="M16 16.5c-1-6-6-8.5-11-7.5 0 5 4.5 9.5 11 7.5zM16 14c1-6 6-8.5 11-7.5 0 5-4.5 9.5-11 7.5z" fill="${C.plant}" ${s}/>`,
    microscope: `<path d="M6 28h20" ${sf}/><path d="M11 28a9 9 0 0 1 12-10" ${sf}/><rect x="12.5" y="3.5" width="6.5" height="14" rx="2" transform="rotate(-28 15.75 10.5)" fill="${C.navy}" ${s}/><circle cx="21.5" cy="18.5" r="2.8" fill="${C.glass}" ${s}/>`,
    rock: `<path d="M4.5 24 7.5 13.5l8-5.5 9.5 4 3 12z" fill="${C.mars3}" ${s}/><path d="M11 15.5l4 1.8M18 13l3 1" stroke="${C.mars2}" stroke-width="2.4" stroke-linecap="round"/>`,
    lettuce: `<circle cx="16" cy="17" r="11.5" fill="${C.plant}" ${s}/><path d="M16 7.5v19M9.5 12.5q6.5 6 13 0M8.5 19.5q7.5 5.5 15 0" fill="none" stroke="${C.ink}" stroke-width="1.8" stroke-linecap="round"/>`,
    potato: `<ellipse cx="16" cy="17" rx="12" ry="9" transform="rotate(-18 16 17)" fill="${C.mars2}" ${s}/><circle cx="11.5" cy="15" r="1.3" fill="${C.ink}"/><circle cx="19" cy="19.5" r="1.3" fill="${C.ink}"/><circle cx="20" cy="13" r="1.1" fill="${C.ink}"/>`,
    tomato: `<circle cx="16" cy="18.5" r="10.5" fill="${C.red}" ${s}/><path d="M16 9 10.5 6.5l3 4-4 1.3 6.5.7 6.5-.7-4-1.3 3-4z" fill="${C.plant}" stroke="${C.ink}" stroke-width="1.6" stroke-linejoin="round"/><path d="M10 17a5 5 0 0 1 3-4" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/>`,
    dish: `<path d="M5 12.5a11.5 11.5 0 0 0 15.5 11z" fill="${C.white}" ${s}/><path d="M12 18 21.5 8.5M12.5 28h9M17 23v5" ${sf}/><circle cx="22.5" cy="7.5" r="2.6" fill="${C.cyan}" ${s}/>`,
    dust: L("M4 8h20M7.5 14h19M5 20h16M10 26h12", C.mars2, 3.4),
    telescope: `<rect x="5.5" y="8" width="19" height="6.5" rx="2.2" transform="rotate(-24 15 11.25)" fill="${C.navy}" ${s}/><path d="M15 16.5l-5.5 12M15 16.5l5.5 12M15 16.5v12" ${sf}/><circle cx="24.5" cy="6.5" r="1.6" fill="${C.yellow}"/>`,
    crate: `<rect x="4.5" y="8.5" width="23" height="19" rx="2.5" fill="${C.white}" ${s}/><path d="M4.5 15h23" ${sf}/><path d="M4.5 12V11a2.5 2.5 0 0 1 2.5-2.5h3V12zM27.5 12V11A2.5 2.5 0 0 0 25 8.5h-3V12z" fill="${C.mars2}" ${s}/><path d="M13 20.5h6" stroke="${C.navy}" stroke-width="2.6" stroke-linecap="round"/>`,
    undo: L("M9 12.5a9 9 0 1 1 .5 10", C.green, 3) + `<path d="M4.5 8.5 9 14l5.5-3.5z" fill="${C.green}" ${s}/>`,
    bulb: `<path d="M16 3.5a8.5 8.5 0 0 0-5 15.3V23h10v-4.2a8.5 8.5 0 0 0-5-15.3z" fill="${C.yellow}" ${s}/><path d="M11.5 26.5h9M13 29.5h6" ${sf}/><path d="M12.5 10a4 4 0 0 1 3-3" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/>`,
    habitat: `<path d="M3.5 24.5a12.5 12.5 0 0 1 25 0z" fill="${C.white}" ${s}/><path d="M2.5 24.5h27" ${sf}/><circle cx="11.5" cy="18" r="2.2" fill="${C.glass}" stroke="${C.ink}" stroke-width="1.6"/><circle cx="20.5" cy="18" r="2.2" fill="${C.glass}" stroke="${C.ink}" stroke-width="1.6"/><path d="M16 12V7" ${sf}/><circle cx="16" cy="6" r="1.6" fill="${C.red}"/>`,
    rocket: `<path d="M16 2.5c5 4 7.2 10.5 6.2 18.5H9.8C8.8 13 11 6.5 16 2.5z" fill="${C.white}" ${s}/><circle cx="16" cy="12" r="2.8" fill="${C.glass}" stroke="${C.ink}" stroke-width="1.8"/><path d="M10 16.5 5.5 23l4.5 1M22 16.5l4.5 6.5-4.5 1" fill="${C.red}" ${s}/><path d="M12.5 21l3.5 8 3.5-8z" fill="${C.yellow}" ${s}/>`,
    moon: `<path d="M20 3.5a12.5 12.5 0 1 0 8.5 18.8A10 10 0 0 1 20 3.5z" fill="${C.peach}" ${s}/>`,
    moonfull: `<circle cx="16" cy="16" r="12.5" fill="${C.grey}" ${s}/><circle cx="12" cy="12" r="3" fill="${C.grey2}" stroke="${C.ink}" stroke-width="1.5"/><circle cx="20" cy="19" r="2.2" fill="${C.grey2}" stroke="${C.ink}" stroke-width="1.5"/><circle cx="12" cy="21" r="1.4" fill="${C.grey2}"/>`,
    battery: `<rect x="4.5" y="9" width="21" height="14" rx="3" fill="${C.white}" ${s}/><rect x="8" y="12.5" width="11" height="7" rx="1" fill="${C.green}"/><path d="M26 13.5v5" ${sf}/>`,
    tap: `<path d="M4 9.5h14a5 5 0 0 1 5 5v3.5h-5.5v-3H4z" fill="${C.grey}" ${s}/><rect x="8" y="5" width="5" height="4.5" rx="1" fill="${C.red}" ${s}/><path d="M20.3 21.5s-2.6 3.3-2.6 4.6a2.6 2.6 0 0 0 5.2 0c0-1.3-2.6-4.6-2.6-4.6z" fill="${C.water}" stroke="${C.ink}" stroke-width="1.6" stroke-linejoin="round"/>`,
    flame: `<path d="M16 2.5c2 6 9.5 9 9.5 16.5a9.5 9.5 0 0 1-19 0c0-5 4-7.5 4-12.5 3 2 4.5 4 4.5 6.5 2-2.5 2-6.5 1-10.5z" fill="${C.mars2}" ${s}/><path d="M16 29a4.5 4.5 0 0 1-4.5-4.5c0-3 4.5-5 4.5-8.5 2 3 4.5 5.5 4.5 8.5A4.5 4.5 0 0 1 16 29z" fill="${C.yellow}"/>`,
    check: `<circle cx="16" cy="16" r="12.5" fill="${C.green}" ${s}/><path d="m10 16.3 4 4 8-8" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/>`,
    wrench: `<path d="M21.5 3.5a6.5 6.5 0 0 0-6.2 8.6L4.5 22.9l4.6 4.6 10.8-10.8a6.5 6.5 0 0 0 8.6-6.2l-4.2 3-3.7-1-1-3.7z" fill="${C.grey}" ${s}/>`,
    plug: `<rect x="8.5" y="11" width="15" height="12" rx="3.5" fill="${C.yellow}" ${s}/><path d="M13 11V4.5M19 11V4.5" ${sf}/>` + L("M16 23v6", C.yellow, 2.6),
    charcoal: `<path d="M4 22.5l4-8 7 2 4.5-6.5 8 6.5-2 8.5H6z" fill="#3a3533" ${s}/><path d="M10 17.5l3 1M20 14l2 2" stroke="${C.grey3}" stroke-width="2" stroke-linecap="round"/>`,
    hand: `<path d="M9.5 28.5V18L6 13.5l2.2-2.2 4.3 3.4V6a2 2 0 0 1 4 0v8V4.5a2 2 0 0 1 4 0V14V6.5a2 2 0 0 1 4 0v14a8 8 0 0 1-8 8z" fill="${C.white}" ${s}/>`,
    star: `<path d="m16 3 3.8 7.9 8.7 1.2-6.3 6 1.5 8.6L16 22.6l-7.7 4.1 1.5-8.6-6.3-6 8.7-1.2z" fill="${C.yellow}" ${s}/>`,
    arrow: `<path d="M4.5 16h19M17 9.5l7 6.5-7 6.5" fill="none" stroke="${C.ink}" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>`,
    clipboard: `<rect x="6.5" y="5" width="19" height="24" rx="2.5" fill="${C.white}" ${s}/><rect x="11.5" y="2.8" width="9" height="5" rx="1.5" fill="${C.grey}" ${s}/><path d="M11 14h10M11 19h10M11 24h6" stroke="${C.grey2}" stroke-width="2.2" stroke-linecap="round"/>`,
    book: `<path d="M2.5 8c5-2 9-1.5 13.5 2 4.5-3.5 8.5-4 13.5-2v18c-5-2-9-1.5-13.5 2-4.5-3.5-8.5-4-13.5-2z" fill="${C.white}" ${s}/><path d="M16 10v18" ${sf}/><path d="M6 13c2.5-.8 4.5-.5 6.5.5M19.5 13.5c2-1 4-1.3 6.5-.5" stroke="${C.grey2}" stroke-width="1.8" stroke-linecap="round" fill="none"/>`,
    gear: `<circle cx="16" cy="16" r="11" fill="none" stroke="${C.ink}" stroke-width="6.5" stroke-dasharray="4.2 3.3"/><circle cx="16" cy="16" r="11" fill="none" stroke="${C.grey}" stroke-width="3.5" stroke-dasharray="4.2 3.3"/><circle cx="16" cy="16" r="9" fill="${C.grey}" ${s}/><circle cx="16" cy="16" r="3.4" fill="${C.white}" ${s}/>`,
    dot: `<circle cx="16" cy="16" r="8" fill="${C.red}" ${s}/>`,
    speech: `<path d="M4.5 5.5h23v15H14l-6.5 6v-6h-3z" fill="${C.white}" ${s}/><path d="M9.5 11h13M9.5 15.5h8" stroke="${C.grey2}" stroke-width="2" stroke-linecap="round"/>`,
    brush: L("M15 17 5.5 26.5", C.mars2, 3.6) + `<rect x="14.5" y="3.5" width="9" height="13" rx="2" transform="rotate(45 19 10)" fill="${C.yellow}" ${s}/><path d="M17.5 7.5l5 5M15.5 10l5 5" stroke="${C.gold}" stroke-width="1.6" stroke-linecap="round"/>`,
    dial: `<circle cx="16" cy="16" r="12" fill="${C.navy}" ${s}/><circle cx="16" cy="16" r="8" fill="none" stroke="#fff" stroke-width="1.6" opacity=".5"/><path d="M16 16 21.5 8.5" stroke="#fff" stroke-width="3.2" stroke-linecap="round"/><circle cx="16" cy="16" r="2.4" fill="${C.yellow}"/>`,
    map: `<path d="M3.5 7.5l8.5-3 8 3 8.5-3v21l-8.5 3-8-3-8.5 3z" fill="${C.peach}" ${s}/><path d="M12 4.5v21M20 7.5v21" ${sf}/><circle cx="24.5" cy="12.5" r="2.2" fill="${C.red}" stroke="${C.ink}" stroke-width="1.4"/>`,
    cme: L("M16 16.5a3 3 0 1 1 3 3 6.5 6.5 0 1 1-6.5-6.5A10 10 0 1 1 22.5 23", C.mars2, 3),
    galaxy: `<circle cx="16" cy="16" r="13" fill="${C.space}" ${s}/><ellipse cx="16" cy="16" rx="9" ry="4" transform="rotate(-25 16 16)" fill="${C.purple}"/><circle cx="16" cy="16" r="2.4" fill="${C.yellow}"/><circle cx="9" cy="9" r="1" fill="#fff"/><circle cx="23" cy="22" r="1" fill="#fff"/><circle cx="22" cy="8" r=".8" fill="#fff"/>`,
    pick: L("M8 27 21 9", C.mars3, 3.2) + `<path d="M8.5 8.5c5-4 12-4 17 1.5-2.2-.3-5.5-.5-8 .5-3-1.5-6-2.3-9-2z" fill="${C.grey}" ${s}/>`,
    cup: `<path d="M7.5 5.5h17l-2.3 22.5H9.8z" fill="${C.glass}"/><path d="M9.2 12.5h13.6l-1.6 15.5H10.8z" fill="${C.mars3}"/><path d="M7.5 5.5h17l-2.3 22.5H9.8z" ${sf}/>`,
    membrane: `<path d="M3.5 10q6.3-3.5 12.5 0t12.5 0v12q-6.3 3.5-12.5 0t-12.5 0z" fill="${C.white}" ${s}/><g fill="${C.grey2}"><circle cx="9" cy="15" r="1.1"/><circle cx="14" cy="17" r="1.1"/><circle cx="19" cy="15" r="1.1"/><circle cx="24" cy="17" r="1.1"/><circle cx="11" cy="20" r="1.1"/><circle cx="21" cy="20" r="1.1"/></g>`,
    lock: `<path d="M10.5 14.5v-4a5.5 5.5 0 0 1 11 0v4" ${sf}/><rect x="6.5" y="14" width="19" height="14.5" rx="3.5" fill="${C.grey}" ${s}/><circle cx="16" cy="20.5" r="2" fill="${C.ink}"/><path d="M16 21v3.5" stroke="${C.ink}" stroke-width="2" stroke-linecap="round"/>`,
    bandage: `<rect x="3" y="11" width="26" height="10" rx="5" transform="rotate(-35 16 16)" fill="${C.pink}" ${s}/><rect x="11.5" y="11.5" width="9" height="9" rx="1.5" transform="rotate(-35 16 16)" fill="${C.white}" stroke="${C.ink}" stroke-width="1.6"/>`,
    people: `<path d="M2.5 28a8 8 0 0 1 15 0z" fill="${C.green}" ${s}/><path d="M14.5 28a8 8 0 0 1 15 0z" fill="${C.solar}" ${s}/><circle cx="10" cy="11" r="4.5" fill="${C.peach}" ${s}/><circle cx="22" cy="11" r="4.5" fill="${C.peach}" ${s}/>`,
    rover: `<rect x="5.5" y="12" width="21" height="8.5" rx="2.5" fill="${C.white}" ${s}/><path d="M20.5 12V6.5" ${sf}/><rect x="17" y="3" width="8" height="4.5" rx="1.2" fill="${C.solar}" ${s}/><circle cx="9" cy="24" r="3.2" fill="${C.grey3}" ${s}/><circle cx="16" cy="24" r="3.2" fill="${C.grey3}" ${s}/><circle cx="23" cy="24" r="3.2" fill="${C.grey3}" ${s}/>`,
    x: `<circle cx="16" cy="16" r="12.5" fill="${C.red}" ${s}/><path d="M11 11l10 10M21 11 11 21" stroke="#fff" stroke-width="3.4" stroke-linecap="round"/>`,
    sound: `<path d="M4.5 12h5.5l7.5-6.5v21L10 20H4.5z" fill="${C.white}" ${s}/><path d="M21.5 11.5a6.5 6.5 0 0 1 0 9M24.5 7.5a12 12 0 0 1 0 17" ${sf}/>`,
    music: `<path d="M11.5 24V7.5l14.5-3.5v17" ${sf}/><circle cx="8.5" cy="24" r="3.8" fill="${C.purple}" ${s}/><circle cx="22.5" cy="21" r="3.8" fill="${C.purple}" ${s}/>`,
    textsize: `<path d="M2.5 27 9 7l6.5 20M5.3 20.5h7.4" ${sf}/><path d="M17.5 27l5.5-14 5.5 14M19.4 22.5h7.2" ${sf}/>`,
    clock: `<circle cx="16" cy="17" r="11.5" fill="${C.white}" ${s}/><path d="M16 10.5V17l4.5 3" ${sf}/><path d="M7 5.5 4 8.5M25 5.5l3 3" ${sf}/>`,
    recycle: L("M8.5 13a8.5 8.5 0 0 1 14.5-4M23.5 19a8.5 8.5 0 0 1-14.5 4", C.green, 3) + `<path d="M24.5 4.5v6.5h-6.5zM7.5 27.5V21h6.5z" fill="${C.green}" ${s}/>`,
    info: `<circle cx="16" cy="16" r="12.5" fill="${C.navy}" ${s}/><circle cx="16" cy="10" r="2" fill="#fff"/><path d="M16 15v8.5" stroke="#fff" stroke-width="3.2" stroke-linecap="round"/>`,
    move: `<path d="M4 16h24M9 10.5 3.5 16 9 21.5M23 10.5l5.5 5.5-5.5 5.5" fill="none" stroke="${C.ink}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`,
    target: `<circle cx="16" cy="16" r="12.5" fill="${C.red}" ${s}/><circle cx="16" cy="16" r="8" fill="#fff" stroke="${C.ink}" stroke-width="1.8"/><circle cx="16" cy="16" r="3.8" fill="${C.red}" stroke="${C.ink}" stroke-width="1.8"/>`,
    warning: `<path d="M16 3.5 29 27H3z" fill="${C.yellow}" ${s}/><path d="M16 11.5v7.5" stroke="${C.ink}" stroke-width="3.2" stroke-linecap="round"/><circle cx="16" cy="23" r="1.8" fill="${C.ink}"/>`,
    thermo: `<path d="M12.5 19V6a3.5 3.5 0 0 1 7 0v13a6.5 6.5 0 1 1-7 0z" fill="${C.white}" ${s}/><path d="M16 22.5V11" stroke="${C.red}" stroke-width="3" stroke-linecap="round"/><circle cx="16" cy="23.5" r="3.2" fill="${C.red}"/>`,
    steam: L("M10 27c-3-4 3-6 0-10s3-6 0-10M16 27c-3-4 3-6 0-10s3-6 0-10M22 27c-3-4 3-6 0-10s3-6 0-10", "#fff", 2.6),
    mud: `<circle cx="16" cy="16" r="11" fill="${C.mars3}" ${s}/>`,
    up: `<path d="M16 6 27.5 25h-23z" fill="${C.green}" ${s}/>`,
    down: `<path d="M16 26 27.5 7h-23z" fill="${C.red}" ${s}/>`,
    mail: `<rect x="3.5" y="7.5" width="25" height="17.5" rx="2.5" fill="${C.white}" ${s}/><path d="M4 9l12 9 12-9" ${sf}/>`,
    earth: `<circle cx="16" cy="16" r="12.5" fill="${C.water}" ${s}/><path d="M8 8.5c4.5 0 6 3 3.5 5.5s-.5 6 2.5 6.5c1 2-1 4-2.5 4.5M21.5 5.5c-1 3 1.5 4.5 4 3.5M20 26.5c-.5-3 2.5-4.5 5-3.5" fill="${C.plant}" stroke="${C.ink}" stroke-width="1.6" stroke-linejoin="round"/>`,
    planet: `<circle cx="16" cy="16" r="9" fill="${C.mars2}" ${s}/><ellipse cx="16" cy="16" rx="14" ry="4.5" transform="rotate(-18 16 16)" fill="none" stroke="${C.ink}" stroke-width="4.4"/><ellipse cx="16" cy="16" rx="14" ry="4.5" transform="rotate(-18 16 16)" fill="none" stroke="${C.yellow}" stroke-width="2"/>`,
    trophy: `<path d="M10 9H5a5 5 0 0 0 5.5 5.5M22 9h5a5 5 0 0 1-5.5 5.5" ${sf}/><path d="M9.5 4h13v8.5a6.5 6.5 0 0 1-13 0z" fill="${C.gold}" ${s}/><path d="M16 19v4" ${sf}/><path d="M10 28.5h12l-1.5-5.5h-9z" fill="${C.gold}" ${s}/>`,
    printer: `<rect x="9" y="4" width="14" height="8" fill="${C.white}" ${s}/><rect x="4" y="11" width="24" height="11" rx="2.5" fill="${C.grey}" ${s}/><rect x="9" y="18" width="14" height="9" fill="${C.white}" ${s}/><circle cx="24" cy="15" r="1.3" fill="${C.green}"/>`,
    bed: `<path d="M3 25V9.5M3 19h26v6" ${sf}/><rect x="4.5" y="13.5" width="7.5" height="4.5" rx="2" fill="${C.white}" ${s}/><rect x="12" y="12.5" width="17" height="6" rx="1.5" fill="${C.navy}" ${s}/>`,
    camera: `<path d="M11 9.5l2-3h6l2 3" fill="${C.grey}" ${s}/><rect x="3.5" y="9.5" width="25" height="17" rx="3" fill="${C.grey}" ${s}/><circle cx="16" cy="18" r="5.2" fill="${C.glass}" ${s}/>`,
    dna: L("M10 3.5c0 7 12 7 12 12.5S10 21.5 10 28.5", C.pink, 2.6) + L("M22 3.5c0 7-12 7-12 12.5s12 5.5 12 12.5", C.purple, 2.6) + `<path d="M12 8h8M12 24h8" stroke="${C.ink}" stroke-width="1.8" stroke-linecap="round"/>`,
    brick: `<rect x="3" y="7.5" width="12" height="7.5" rx="1.2" fill="${C.mars3}" ${s}/><rect x="17" y="7.5" width="12" height="7.5" rx="1.2" fill="${C.mars2}" ${s}/><rect x="9" y="17" width="14" height="7.5" rx="1.2" fill="${C.mars2}" ${s}/><rect x="3" y="17" width="4" height="7.5" rx="1" fill="${C.mars3}" ${s}/><rect x="25" y="17" width="4" height="7.5" rx="1" fill="${C.mars3}" ${s}/>`
  };

  const MAP = {
    "⚡": "bolt", "💨": "air", "❤": "heart", "🪙": "coin", "💧": "drop", "▶": "play", "◀": "back", "☢": "radiation", "🛡": "shield",
    "☀": "sun", "🌞": "sun", "🔆": "sun", "🧊": "ice", "🌱": "sprout", "🌿": "sprout", "🔬": "microscope", "🪨": "rock", "🥬": "lettuce", "🥗": "lettuce",
    "🥔": "potato", "🍅": "tomato", "📡": "dish", "🛰": "dish", "🧱": "brick", "🌪": "dust", "🔭": "telescope", "📦": "crate", "🧺": "crate",
    "↩": "undo", "↺": "undo", "↻": "undo", "🔄": "undo", "💡": "bulb", "🛖": "habitat", "🏠": "habitat", "🚀": "rocket", "🌑": "moon", "🌙": "moon",
    "🌕": "moonfull", "🔋": "battery", "🚰": "tap", "🚿": "tap", "🔥": "flame", "✅": "check", "👍": "check", "🏗": "wrench", "🛠": "wrench", "🔧": "wrench",
    "🔌": "plug", "⬛": "charcoal", "✋": "hand", "👈": "hand", "✦": "star", "✨": "star", "⭐": "star", "🌟": "star", "➜": "arrow", "→": "arrow",
    "📋": "clipboard", "📖": "book", "⚙": "gear", "●": "dot", "🔴": "dot", "💬": "speech", "🧽": "brush", "🧭": "dial", "🎛": "dial", "🗺": "map",
    "🌀": "cme", "🌌": "galaxy", "⛏": "pick", "💪": "pick", "🥤": "cup", "▫": "membrane", "🧻": "membrane", "🔒": "lock", "🤫": "lock", "🩹": "bandage",
    "🤝": "people", "👫": "people", "👨‍👩‍👧": "people", "🛻": "rover", "🤖": "rover", "✕": "x", "🔊": "sound", "🎵": "music", "🔠": "textsize",
    "⏰": "clock", "⏱": "clock", "⏳": "clock", "♻": "recycle", "ℹ": "info", "↔": "move", "🎯": "target", "⚠": "warning", "🌡": "thermo", "♨": "steam",
    "🟤": "mud", "▲": "up", "▼": "down", "✉": "mail", "🌍": "earth", "🪐": "planet", "🏆": "trophy", "🖨": "printer", "🛏": "bed", "📷": "camera", "🧬": "dna"
  };
  const KEEP = new Set(["©", "®", "™"]);
  const RE = /\p{Extended_Pictographic}(?:️|‍\p{Extended_Pictographic}️?)*|[←-⇿✀-➿■-◿☀-⛿⬀-⯿]️?/gu;
  const keyOf = (e) => e.replace(/️/g, "");
  const nameOf = (e) => MAP[keyOf(e)] || "dot";
  const svgIcon = (name, cls) => `<svg class="ic ic-${name}${cls ? " " + cls : ""}" viewBox="0 0 32 32" aria-hidden="true" focusable="false">${I[name] || I.dot}</svg>`;
  const esc = (t) => t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const SKIP = new Set(["SCRIPT", "STYLE", "TEXTAREA", "OPTION", "TITLE"]);

  function hasEmoji(t) { RE.lastIndex = 0; for (const m of t.matchAll(RE)) if (!KEEP.has(keyOf(m[0]))) return true; return false; }
  function toHTML(t) { return esc(t).replace(RE, (m) => (KEEP.has(keyOf(m)) ? m : svgIcon(nameOf(m)))); }

  function fixSvgText(el) {
    const txt = el.textContent || "";
    if (!hasEmoji(txt)) return;
    const list = [...txt.matchAll(RE)].map((m) => m[0]).filter((m) => !KEEP.has(keyOf(m)));
    const size = parseFloat(el.getAttribute("font-size")) || parseFloat(getComputedStyle(el).fontSize) || 24;
    const x = parseFloat(el.getAttribute("x")) || 0, y = parseFloat(el.getAttribute("y")) || 0;
    const anchor = getComputedStyle(el).textAnchor;
    const total = list.length * size * 1.05;
    let x0 = anchor === "middle" ? x - total / 2 : anchor === "end" ? x - total : x;
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("class", (el.getAttribute("class") || "") + " ic-group");
    if (el.dataset && el.dataset.key) g.setAttribute("data-key", el.dataset.key);
    g.innerHTML = list.map((e, i) => `<svg x="${x0 + i * size * 1.05}" y="${y - size * 0.9}" width="${size}" height="${size}" viewBox="0 0 32 32">${I[nameOf(e)] || I.dot}</svg>`).join("");
    el.replaceWith(g);
  }

  function iconize(root) {
    if (!root) return;
    if (root.nodeType === 3) { root = root.parentNode; if (!root) return; }
    if (root.nodeType !== 1) return;
    if (root.namespaceURI === "http://www.w3.org/2000/svg") {
      if (root.tagName === "text") { fixSvgText(root); return; }
      root.querySelectorAll && root.querySelectorAll("text").forEach(fixSvgText);
      return;
    }
    root.querySelectorAll && root.querySelectorAll("svg text").forEach(fixSvgText);
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(n) {
        const p = n.parentNode;
        if (!p || SKIP.has(p.nodeName) || (p.namespaceURI === "http://www.w3.org/2000/svg") || (p.closest && p.closest("svg"))) return NodeFilter.FILTER_REJECT;
        return hasEmoji(n.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((n) => {
      const t = document.createElement("template");
      t.innerHTML = toHTML(n.nodeValue);
      n.replaceWith(t.content);
    });
  }

  window.noEmoji = (t) => String(t).replace(RE, (m) => (KEEP.has(keyOf(m)) ? m : "")).replace(/\s{2,}/g, " ").trim();
  window.ICONS = { svg: svgIcon, names: Object.keys(I), iconize };

  const start = () => {
    iconize(document.body);
    new MutationObserver((muts) => {
      for (const m of muts) {
        if (m.type === "characterData") iconize(m.target);
        else m.addedNodes.forEach((n) => iconize(n));
      }
    }).observe(document.body, { childList: true, subtree: true, characterData: true });
    document.querySelectorAll("[title]").forEach((el) => (el.title = window.noEmoji(el.title)));
  };
  if (document.body) start(); else document.addEventListener("DOMContentLoaded", start);
})();
