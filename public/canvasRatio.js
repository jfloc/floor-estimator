document.addEventListener("DOMContentLoaded", function () {
  const canvasContainer = document.getElementById("canvasContainer");
  const canvas = document.getElementById("floorCanvas");

  const canvasWidth = parseInt(canvasContainer.clientWidth, 10);
  const canvasHeight = parseInt(canvasContainer.clientHeight, 10);

  const containerAspectRatio = canvas.width / canvas.height;
  const canvasAspectRation = canvas.width / canvas.height;

  if (containerAspectRatio < canvasAspectRation) {
    canvas.height = canvasWidth / canvasAspectRation;
  } else {
    canvas.width = canvasHeight * canvasAspectRation;
  }
});
