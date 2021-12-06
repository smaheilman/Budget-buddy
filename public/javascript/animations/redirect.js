let animateDiv = document.querySelector('#animation-div')
let redirectAnimation = (link) => {
  anime({
    targets: animateDiv,
    height: '100vh',
    width: '100vw',
    duration: 400,
    endDelay: 200,
    easing: 'easeOutSine',
    update: function(anim) {
      if(anim.progress >= 100) {
        window.location.replace("." + link);
      }
    }
  });
}
const redirectBtns = document.querySelectorAll('.dir-btn');
console.log(redirectBtns);
redirectBtns.forEach(btn => {
  let link =  btn.attributes.href.textContent;
  console.log(link)
  btn.addEventListener('click', () => {
    redirectAnimation(link);
  })
})
