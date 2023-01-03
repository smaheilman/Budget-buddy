
let redirectAnimation = (link) => {
  let bodyEl = $('body');
  let animationDiv = $('<div>').attr('id', 'animation-div');
  bodyEl.append(animationDiv);
  anime({
    targets: '#animation-div',
    height: '100vh',
    width: '100vw',
    duration: 400,
    endDelay: 200,
    easing: 'easeOutSine',
    update: function (anim) {
      if (anim.progress >= 100) {

        window.location.replace("/." + link);
      }
    }
  });
}
const redirectBtns = document.querySelectorAll('.dir-btn');
redirectBtns.forEach(btn => {
  let link = btn.attributes.href.textContent;
  btn.addEventListener('click', () => {
    redirectAnimation(link);
  })
})
