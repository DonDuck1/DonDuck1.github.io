window.onload = function() {
  const ECCount = 0;
  document.getElementById("NBSAText").innerHTML = `Current exact progress: ${ECCount} / 60`;
  const ECPercentage = (ECCount / 60) * 100;
  if (ECPercentage > 0) {
    document.getElementById('NBSABarFill').style.display = "inline-block";
    let NBSAFillWidth = ECPercentage % 1;
    while (NBSAFillWidth < ECPercentage) {
      NBSAFillWidth++;
      task(NBSAFillWidth);
    }
    function task(NBSAFillWidth) {
      setTimeout(function() {
        document.getElementById('NBSABarFill').style.width = `${NBSAFillWidth}%`;
      }, 40 * NBSAFillWidth);
    }
    if (NBSAFillWidth == 100) {
      setTimeout(function () {
        document.getElementById('NBSABarFill').style.borderTopRightRadius = `20px`;
        document.getElementById('NBSABarFill').style.borderBottomRightRadius = `20px`;
      }, 4000);
    }
  }
};