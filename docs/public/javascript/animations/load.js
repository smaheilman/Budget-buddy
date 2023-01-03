let loadAnimation = () => {
  let bodyEl = $('body');
  let animationDiv = $('#animation-div')
  animationDiv.css('width', '100vw');
  animationDiv.css('height', '100vh');
  bodyEl.append(animationDiv);
  anime({
    targets: '#animation-div',
    opacity: 0,
    duration: 800,
    easing: 'linear',
    update: function(anim) {
      if(anim.progress >= 100) {
        animationDiv.remove();
      }
    }
  });
}
loadAnimation();