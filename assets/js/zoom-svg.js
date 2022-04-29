let windowWidth = window.innerWidth;
let zoomSVG = 1920/windowWidth + 0.1;

if (windowWidth < 1151) {
  zoomSVG = 1.1;
}

if (windowWidth < 601) {
  zoomSVG = 600/windowWidth + 0.5 ;
}

// panzoom.zoom(zoomSVG);

window.onresize = reportWindowSize;

function reportWindowSize() {
  windowWidth = window.innerWidth;
  zoomSVG = 1920/windowWidth + 0.1;

  if (windowWidth < 1151) {
    zoomSVG = 1.1;
  }

  if (windowWidth < 601) {
    zoomSVG = 600/windowWidth + 0.5 ;
  }

  // panzoom.zoom(zoomSVG);

  // console.log(1920/windowWidth);
}
