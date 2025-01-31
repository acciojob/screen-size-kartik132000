//your JS code here. If required.
  document.addEventListener("DOMContentLoaded", function () {
            const sizeInfo = document.getElementById("sizeInfo");
            const h1 = document.createElement("h1");
            sizeInfo.appendChild(h1);

            function updateSize() {
                h1.textContent = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
            }

            updateSize(); // Initial size update
            window.addEventListener("resize", updateSize);
        });