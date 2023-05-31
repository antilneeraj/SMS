function script() {
  const ourContainer = document.querySelector(".tcContainer");
  const ourP = document.querySelector("[something]");

  const resizeP = (e) =>
    (ourP.style.width =
      [...ourContainer.children].reduce(
        (accum, child) => accum - child.getBoundingClientRect().width,
        ourContainer.getBoundingClientRect().width
      ) /
        ourContainer.children.length +
      ourContainer.firstElementChild.getBoundingClientRect().width +
      ourContainer.children[1].getBoundingClientRect().width +
      "px");
  window.addEventListener("resize", resizeP);
  resizeP();

  let coordinates =
    `49.5,0 49.92,-0.00 50.35,-0.00 50.78,0.00 51.21,0.01 51.63,0.02 52.06,0.04 52.49,0.06 52.91,0.08 53.34,0.11 53.77,0.14 54.19,0.18 54.62,0.22 55.05,0.26 55.47,0.31 55.90,0.36 56.32,0.41 56.74,0.47 57.17,0.53 57.59,0.60 58.01,0.67 58.43,0.74 58.85,0.82 59.27,0.90 59.69,0.98 60.11,1.07 60.53,1.16 60.95,1.26 61.36,1.36 61.78,1.46 62.19,1.57 62.61,1.68 63.02,1.79 63.43,1.91 63.84,2.03 64.25,2.16 64.66,2.29 65.07,2.42 65.48,2.56 65.88,2.70 66.28,2.84 66.69,2.99 67.09,3.14 67.49,3.29 67.89,3.45 68.28,3.61 68.68,3.77 69.08,3.94 69.47,4.11 69.86,4.29 70.25,4.47 70.64,4.65 71.03,4.84 71.41,5.03 71.80,5.22 72.18,5.41 72.56,5.61 72.94,5.82 73.31,6.02 73.69,6.23 74.06,6.44 74.43,6.66 74.80,6.88 75.17,7.10 75.54,7.33 75.90,7.56 76.26,7.79 76.62,8.02 76.98,8.26 77.34,8.51 77.69,8.75 78.04,9.00 78.39,9.25 78.74,9.50 79.08,9.76 79.43,10.02 79.77,10.29 80.11,10.55 80.44,10.82 80.78,11.10 81.11,11.37 81.44,11.65 81.76,11.93 82.09,12.22 82.41,12.50 82.73,12.79 83.05,13.09 83.36,13.38 83.67,13.68 83.98,13.98 84.29,14.29 84.59,14.59 84.90,14.90 85.19,15.21 85.49,15.53 85.78,15.85 86.07,16.17 86.36,16.49 86.65,16.81 86.93,17.14 87.21,17.47 87.49,17.81 87.76,18.14 88.03,18.48 88.30,18.82 88.56,19.16 88.83,19.50 89.09,19.85 89.34,20.20 89.60,20.55 89.85,20.91 90.09,21.26 90.34,21.62 90.58,21.98 90.82,22.34 91.05,22.71 91.28,23.08 91.51,23.44 91.74,23.81 91.96,24.19 92.18,24.56 92.40,24.94 92.61,25.32 92.82,25.70 93.02,26.08 93.23,26.46 93.43,26.85 93.62,27.24 93.82,27.63 94.01,28.02 94.19,28.41 94.38,28.81 94.56,29.20 94.73,29.60 94.90,30.00 95.07,30.40 95.24,30.80 95.40,31.20 95.56,31.61 95.72,32.02 95.87,32.42 96.02,32.83 96.16,33.24 96.30,33.66 96.44,34.07 96.58,34.48 96.71,34.90 96.84,35.31 96.96,35.73 97.08,36.15 97.20,36.57 97.31,36.99 97.42,37.41 97.52,37.84 97.63,38.26 97.73,38.68 97.82,39.11 97.91,39.54 98.00,39.96 98.08,40.39 98.16,40.82 98.24,41.25 98.31,41.68 98.38,42.11 98.45,42.54 98.51,42.97 98.57,43.41 98.62,43.84 98.67,44.27 98.72,44.71 98.76,45.14 98.80,45.57 98.84,46.01 98.87,46.44 98.90,46.88 98.93,47.31 98.95,47.75 98.97,48.19 98.98,48.62 98.99,49.06 99,49.5 98.99,49.92 98.98,50.35 98.97,50.78 98.95,51.21 98.93,51.63 98.90,52.06 98.87,52.49 98.84,52.91 98.80,53.34 98.76,53.77 98.72,54.19 98.67,54.62 98.62,55.05 98.57,55.47 98.51,55.90 98.45,56.32 98.38,56.74 98.31,57.17 98.24,57.59 98.16,58.01 98.08,58.43 98.00,58.85 97.91,59.27 97.82,59.69 97.73,60.11 97.63,60.53 97.52,60.95 97.42,61.36 97.31,61.78 97.20,62.19 97.08,62.61 96.96,63.02 96.84,63.43 96.71,63.84 96.58,64.25 96.44,64.66 96.30,65.07 96.16,65.48 96.02,65.88 95.87,66.28 95.72,66.69 95.56,67.09 95.40,67.49 95.24,67.89 95.07,68.28 94.90,68.68 94.73,69.08 94.56,69.47 94.38,69.86 94.19,70.25 94.01,70.64 93.82,71.03 93.62,71.41 93.43,71.80 93.23,72.18 93.02,72.56 92.82,72.94 92.61,73.31 92.40,73.69 92.18,74.06 91.96,74.43 91.74,74.80 91.51,75.17 91.28,75.54 91.05,75.90 90.82,76.26 90.58,76.62 90.34,76.98 90.09,77.34 89.85,77.69 89.60,78.04 89.34,78.39 89.09,78.74 88.83,79.08 88.56,79.43 88.30,79.77 88.03,80.11 87.76,80.44 87.49,80.78 87.21,81.11 86.93,81.44 86.65,81.76 86.36,82.09 86.07,82.41 85.78,82.73 85.49,83.05 85.19,83.36 84.90,83.67 84.59,83.98 84.29,84.29 83.98,84.59 83.67,84.90 83.36,85.19 83.05,85.49 82.73,85.78 82.41,86.07 82.09,86.36 81.76,86.65 81.44,86.93 81.11,87.21 80.78,87.49 80.44,87.76 80.11,88.03 79.77,88.30 79.43,88.56 79.08,88.83 78.74,89.09 78.39,89.34 78.04,89.60 77.69,89.85 77.34,90.09 76.98,90.34 76.62,90.58 76.26,90.82 75.90,91.05 75.54,91.28 75.17,91.51 74.80,91.74 74.43,91.96 74.06,92.18 73.69,92.40 73.31,92.61 72.94,92.82 72.56,93.02 72.18,93.23 71.80,93.43 71.41,93.62 71.03,93.82 70.64,94.01 70.25,94.19 69.86,94.38 69.47,94.56 69.08,94.73 68.68,94.90 68.28,95.07 67.89,95.24 67.49,95.40 67.09,95.56 66.69,95.72 66.28,95.87 65.88,96.02 65.48,96.16 65.07,96.30 64.66,96.44 64.25,96.58 63.84,96.71 63.43,96.84 63.02,96.96 62.61,97.08 62.19,97.20 61.78,97.31 61.36,97.42 60.95,97.52 60.53,97.63 60.11,97.73 59.69,97.82 59.27,97.91 58.85,98.00 58.43,98.08 58.01,98.16 57.59,98.24 57.17,98.31 56.74,98.38 56.32,98.45 55.90,98.51 55.47,98.57 55.05,98.62 54.62,98.67 54.19,98.72 53.77,98.76 53.34,98.80 52.91,98.84 52.49,98.87 52.06,98.90 51.63,98.93 51.21,98.95 50.78,98.97 50.35,98.98 49.92,98.99 49.5,99 49.06,98.99 48.62,98.98 48.19,98.97 47.75,98.95 47.31,98.93 46.88,98.90 46.44,98.87 46.01,98.84 45.57,98.80 45.14,98.76 44.71,98.72 44.27,98.67 43.84,98.62 43.41,98.57 42.97,98.51 42.54,98.45 42.11,98.38 41.68,98.31 41.25,98.24 40.82,98.16 40.39,98.08 39.96,98.00 39.54,97.91 39.11,97.82 38.68,97.73 38.26,97.63 37.84,97.52 37.41,97.42 36.99,97.31 36.57,97.20 36.15,97.08 35.73,96.96 35.31,96.84 34.90,96.71 34.48,96.58 34.07,96.44 33.66,96.30 33.24,96.16 32.83,96.02 32.42,95.87 32.02,95.72 31.61,95.56 31.20,95.40 30.80,95.24 30.40,95.07 30.00,94.90 29.60,94.73 29.20,94.56 28.81,94.38 28.41,94.19 28.02,94.01 27.63,93.82 27.24,93.62 26.85,93.43 26.46,93.23 26.08,93.02 25.70,92.82 25.32,92.61 24.94,92.40 24.56,92.18 24.19,91.96 23.81,91.74 23.44,91.51 23.08,91.28 22.71,91.05 22.34,90.82 21.98,90.58 21.62,90.34 21.26,90.09 20.91,89.85 20.55,89.60 20.20,89.34 19.85,89.09 19.50,88.83 19.16,88.56 18.82,88.30 18.48,88.03 18.14,87.76 17.81,87.49 17.47,87.21 17.14,86.93 16.81,86.65 16.49,86.36 16.17,86.07 15.85,85.78 15.53,85.49 15.21,85.19 14.90,84.90 14.59,84.59 14.29,84.29 13.98,83.98 13.68,83.67 13.38,83.36 13.09,83.05 12.79,82.73 12.50,82.41 12.22,82.09 11.93,81.76 11.65,81.44 11.37,81.11 11.10,80.78 10.82,80.44 10.55,80.11 10.29,79.77 10.02,79.43 9.76,79.08 9.50,78.74 9.25,78.39 9.00,78.04 8.75,77.69 8.51,77.34 8.26,76.98 8.02,76.62 7.79,76.26 7.56,75.90 7.33,75.54 7.10,75.17 6.88,74.80 6.66,74.43 6.44,74.06 6.23,73.69 6.02,73.31 5.82,72.94 5.61,72.56 5.41,72.18 5.22,71.80 5.03,71.41 4.84,71.03 4.65,70.64 4.47,70.25 4.29,69.86 4.11,69.47 3.94,69.08 3.77,68.68 3.61,68.28 3.45,67.89 3.29,67.49 3.14,67.09 2.99,66.69 2.84,66.28 2.70,65.88 2.56,65.48 2.42,65.07 2.29,64.66 2.16,64.25 2.03,63.84 1.91,63.43 1.79,63.02 1.68,62.61 1.57,62.19 1.46,61.78 1.36,61.36 1.26,60.95 1.16,60.53 1.07,60.11 0.98,59.69 0.90,59.27 0.82,58.85 0.74,58.43 0.67,58.01 0.60,57.59 0.53,57.17 0.47,56.74 0.41,56.32 0.36,55.90 0.31,55.47 0.26,55.05 0.22,54.62 0.18,54.19 0.14,53.77 0.11,53.34 0.08,52.91 0.06,52.49 0.04,52.06 0.02,51.63 0.01,51.21 0.00,50.78 -0.00,50.35 -0.00,49.92 2.09,49.5 -0.00,49.06 -0.00,48.62 0.00,48.19 0.01,47.75 0.02,47.31 0.04,46.88 0.06,46.44 0.08,46.01 0.11,45.57 0.14,45.14 0.18,44.71 0.22,44.27 0.26,43.84 0.31,43.41 0.36,42.97 0.41,42.54 0.47,42.11 0.53,41.68 0.60,41.25 0.67,40.82 0.74,40.39 0.82,39.96 0.90,39.54 0.98,39.11 1.07,38.68 1.16,38.26 1.26,37.84 1.36,37.41 1.46,36.99 1.57,36.57 1.68,36.15 1.79,35.73 1.91,35.31 2.03,34.90 2.16,34.48 2.29,34.07 2.42,33.66 2.56,33.24 2.70,32.83 2.84,32.42 2.99,32.02 3.14,31.61 3.29,31.20 3.45,30.80 3.61,30.40 3.77,30.00 3.94,29.60 4.11,29.20 4.29,28.81 4.47,28.41 4.65,28.02 4.84,27.63 5.03,27.24 5.22,26.85 5.41,26.46 5.61,26.08 5.82,25.70 6.02,25.32 6.23,24.94 6.44,24.56 6.66,24.19 6.88,23.81 7.10,23.44 7.33,23.08 7.56,22.71 7.79,22.34 8.02,21.98 8.26,21.62 8.51,21.26 8.75,20.91 9.00,20.55 9.25,20.20 9.50,19.85 9.76,19.50 10.02,19.16 10.29,18.82 10.55,18.48 10.82,18.14 11.10,17.81 11.37,17.47 11.65,17.14 11.93,16.81 12.22,16.49 12.50,16.17 12.79,15.85 13.09,15.53 13.38,15.21 13.68,14.90 13.98,14.59 14.29,14.29 14.59,13.98 14.90,13.68 15.21,13.38 15.53,13.09 15.85,12.79 16.17,12.50 16.49,12.22 16.81,11.93 17.14,11.65 17.47,11.37 17.81,11.10 18.14,10.82 18.48,10.55 18.82,10.29 19.16,10.02 19.50,9.76 19.85,9.50 20.20,9.25 20.55,9.00 20.91,8.75 21.26,8.51 21.62,8.26 21.98,8.02 22.34,7.79 22.71,7.56 23.08,7.33 23.44,7.10 23.81,6.88 24.19,6.66 24.56,6.44 24.94,6.23 25.32,6.02 25.70,5.82 26.08,5.61 26.46,5.41 26.85,5.22 27.24,5.03 27.63,4.84 28.02,4.65 28.41,4.47 28.81,4.29 29.20,4.11 29.60,3.94 30.00,3.77 30.40,3.61 30.80,3.45 31.20,3.29 31.61,3.14 32.02,2.99 32.42,2.84 32.83,2.70 33.24,2.56 33.66,2.42 34.07,2.29 34.48,2.16 34.90,2.03 35.31,1.91 35.73,1.79 36.15,1.68 36.57,1.57 36.99,1.46 37.41,1.36 37.84,1.26 38.26,1.16 38.68,1.07 39.11,0.98 39.54,0.90 39.96,0.82 40.39,0.74 40.82,0.67 41.25,0.60 41.68,0.53 42.11,0.47 42.54,0.41 42.97,0.36 43.41,0.31 43.84,0.26 44.27,0.22 44.71,0.18 45.14,0.14 45.57,0.11 46.01,0.08 46.44,0.06 46.88,0.04 47.31,0.02 47.75,0.01 48.19,0.00 48.62,-0.00 49.06,-0.00 49.5,-1.00 49.5,0`.split(
      " "
    );

  // coordinates = coordinates.filter((coordinate, index) => String(index).slice(String(index).length-2, String(index).length)%4===0?true:false);      // <-- thoda fast karne ke liye use thoda chota kar diya
  const polyline = document.querySelector("polyline");
  polyline.setAttribute(
    "style",
    `
        fill: none;
        stroke: #fff;
        stroke-width: 7px;
        /* yaha par line end ko smooth karne wali property aayegi, mai uska naam bhul gaya. aur vscode bhi suggest nhi kar rha */
    `
  );

  const text = document.querySelector("text");
  const alignText = (e) =>
    text.setAttribute("x", `${50 - text.getBoundingClientRect().width / 2}px`);
  text.setAttribute("y", `55px`);

  // Ye hai progress ko get karne ke liye, server se. [:down-arrow]

  let progressNum; // <--- ise comment mat kariyo warna infinite loop mei fas jayega...
  // fetch('requestURL').then(data => data.json()).then(json => progressNum=Math.floor(JSON.parse(json)))   //  <-- progress ki matra hetu server ko request

  let count = 0;
  const circInterval = setInterval((e) => {
    const coordinate = coordinates[count++];
    polyline.setAttribute(
      "points",
      `${polyline.getAttribute("points")} ${coordinate}`
    );
    text.innerHTML = `${Math.floor((count / coordinates.length) * 100)}%`;
    alignText();
    count += 6;
    if (Math.floor(count / coordinates.length) * 100 >= (progressNum || 100)) {
      clearInterval(circInterval);
      text.innerHTMl = "100%";
    }
  }, 25);
}

// Sometimes browser runs another script when one script takes time, and therefore, this leads to some errors or unwanted behaviour. To prevent this we can use window.addEventListener('load', function) to run the function only when the page is fully loaded.

window.addEventListener("load", script);

// calendar

const daysTag = document.querySelector(".days");
const currentDate = document.querySelector(".current-date");
const prevNextIcon = [...document.querySelectorAll(".icons span")];

let currYear = new Date().getFullYear();
let currMonth = new Date().getMonth();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const renderCalendar = () => {
  const date = new Date(currYear, currMonth, 1);
  let firstDayofMonth = date.getDay();
  let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
  let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
  let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();

  let liTag = "";

  for (let i = firstDayofMonth; i > 0; i--) {
    liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
  }

  for (let i = 1; i <= lastDateofMonth; i++) {
    let isToday =
      i === new Date().getDate() &&
      currMonth === new Date().getMonth() &&
      currYear === new Date().getFullYear()
        ? "active"
        : "";
    liTag += `<li class="${isToday}">${i}</li>`;
  }

  for (let i = lastDayofMonth; i < 6; i++) {
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
  }

  currentDate.innerText = `${months[currMonth]} ${currYear}`;
  daysTag.innerHTML = liTag;
};

renderCalendar();

prevNextIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

    if (currMonth < 0 || currMonth > 11) {
      currYear = icon.id === "prev" ? currYear - 1 : currYear + 1;
      currMonth = currMonth < 0 ? 11 : 0;
    }

    renderCalendar();
  });
});