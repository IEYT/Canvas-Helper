export function drawer(fillstyle, ...fill) {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = fillstyle;
  ctx.fillRect(...fill);
}

export function drawImageBulk(
  Mode,
  Times,
  Delay,
  ShifterY,
  ShifterX,
  ImgSrc,
  X,
  Y,
  W,
  H
) {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  let img = new Image();
  img.src = ImgSrc;
  if (Mode === "Custom") {
    // Checking if mode is = to custom;
    setTimeout(() => {
      ctx.drawImage(img, X, Y, W, H);
      count++;
      console.log(count);
    }, Delay);
  } else if (Mode === "Default") {
    img.onload = () => {
      ctx.drawImage(img, X, Y, W, H);
    };
  }
  let count = 0;
  if (Mode === "Custom") {
    setTimeout(() => {
      const intervalId = setInterval(() => {
        X += ShifterX;
        Y += ShifterY;
        count++;
        console.log(count);
        ctx.drawImage(img, X, Y, W, H);
        if (count === Times) {
          clearInterval(intervalId);
          console.log("Draw Image Bulk Order Complete.");
        }
      }, Delay);
    }, Delay);
  } else {
    for (let i = 0; i < Times; i++) {
      X += ShifterX;
      Y += ShifterY;
      ctx.drawImage(img, X, Y, W, H);
    }
  }
}
