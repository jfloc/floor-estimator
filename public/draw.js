document.addEventListener("DOMContentLoaded", function () {
  const inputLength = document.getElementById("inputLength");
  const inputWidth = document.getElementById("inputWidth");

  inputLength.addEventListener("input ", updateCanvas);
  inputLength.addEventListener("change", updateCanvas);
  inputWidth.addEventListener("input", updateCanvas);
  inputWidth.addEventListener("change", updateCanvas);

  function updateCanvas() {
    const canvasContainer = document.getElementById("canvasContainer");
    const canvas = document.getElementById("floorCanvas");
    const canvasStyle = window.getComputedStyle(canvasContainer);

    let lengthValue = parseFloat(inputLength.value) || 0;
    let widthValue = parseFloat(inputWidth.value) || 0;

    //
    let canvasWidth = parseInt(canvasStyle.width, 10);
    let canvasHeight = parseInt(canvasStyle.height, 10);
    let size = Math.min(canvasWidth, canvasHeight);
    console.log("width of canvas before ", canvasWidth);
    console.log("length of canvas before ", canvasHeight);

    canvas.width = size;
    canvas.height = size;

    const ctx = canvas.getContext("2d");

    console.log("width of canvas is ", canvas.width);
    console.log("length of canvas is ", canvas.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    startX = canvas.width / 2;
    startY = canvas.height / 2;

    xOffset = Math.floor(widthValue / 2);
    yOffset = Math.floor(lengthValue / 2);

    if (canvasWidth > canvasHeight) {
      aspectRatioValue = canvasHeight / canvasWidth;
      widthValue = Math.floor(widthValue * aspectRatioValue);
      xOffset = Math.floor(xOffset * aspectRatioValue);
    } else if (canvasHeight > canvasWidth) {
      aspectRatioValue = canvasWidth / canvasHeight;
      lengthValue = Math.floor(lengthValue * (canvasWidth / canvasHeight));
      yOffset = Math.floor(yOffset * aspectRatioValue);
    }

    xValue = startX - xOffset;
    yValue = startY - yOffset;
    console.log("xValue is ", xValue);
    console.log("yValue is ", yValue);
    console.log("Updating canvas...");
    console.log("values of input:");
    console.log("length: ", lengthValue);
    console.log("width:", widthValue);

    if (lengthValue !== 0 && widthValue !== 0) {
      ctx.fillStyle = "black";
      ctx.fillRect(xValue, yValue, widthValue, lengthValue);
    }
  }

  // Draw a blue square
});
