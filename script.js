window.addEventListener("load", function() { 
  const canvas = document.getElementById("canvas")
  const ctx = canvas.getContext("2d")

  // array of normal distributed values
  const data = [1,2,4,6,5]
  let i = 1

  ctx.clearRect(0, 0, canvas.width, canvas.height)
  var newItem = Math.random()*10
  data.push(newItem)
  const x = canvas.width / (data.length - 1);
  const y = canvas.height / (Math.max(...data));
  ctx.beginPath();
  ctx.moveTo(0, canvas.height - data[0] * y);
  for (let i = 1; i < data.length; i++) {
    ctx.lineTo(i * x, canvas.height - data[i] * y);
  }
  ctx.stroke();

  ctx.lineWidth = 4
  ctx.font = "10px Arial"
  ctx.fillStyle = "black"
  ctx.fillText("X...........", canvas.width - 40, canvas.height - 10)
  ctx.fillText("Y...........", 10, 10)
})


