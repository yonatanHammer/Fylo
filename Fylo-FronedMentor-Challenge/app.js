

let prog = 0;
let maxSize = 1000;
let sizeUnit = ' GB';


let spaceLeft = document.getElementById('usage-left'); // floating msg
let used = document.getElementById('usedStorage'); // 815GB
let progressBar = document.getElementById('progress-bar-color');
let circleProgress = document.getElementById('circle');
let fUpload = document.getElementById('file-uploads');


let progPrecentage = prog / maxSize * 10000;

fUpload.addEventListener('change', () => {
  let file = fUpload.value;
  let size = fUpload.files[0].size/1000000;
  prog += size;
  let validation = (/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i).test(file);
  if(validation){
    progressBar.style.width = prog+'%';
    spaceLeft.innerHTML = (1000-prog).toFixed(1);
    used.innerHTML = (prog).toFixed(1);
    return;

  }else{
    alert("Only image's available ");
    return;
  }
});



