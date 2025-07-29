let image = new Image();

document.getElementById('imageUpload').addEventListener('change', function(e) {
  const reader = new FileReader();
  reader.onload = function(event) {
    image.onload = () => drawImage();
    image.src = event.target.result;
  };
  reader.readAsDataURL(e.target.files[0]);
});

function drawImage() {
  const canvas = document.getElementById('memeCanvas');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
}

function generateMeme() {
  const canvas = document.getElementById('memeCanvas');
  const ctx = canvas.getContext('2d');
  const caption = document.getElementById('caption').value;
  const font = document.getElementById('fontSelect').value;
  drawImage();
  ctx.font = `40px ${font}`;
  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 2;
  ctx.textAlign = 'center';
  ctx.fillText(caption, canvas.width / 2, 50);
  ctx.strokeText(caption, canvas.width / 2, 50);
}

function downloadMeme() {
  const canvas = document.getElementById('memeCanvas');
  const link = document.createElement('a');
  link.download = 'meme.png';
  link.href = canvas.toDataURL();
  link.click();
}
