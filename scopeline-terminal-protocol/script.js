document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var panel = document.querySelector('.nav-panel');
  if (toggle && panel) {
    toggle.addEventListener('click', function () {
      var open = panel.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    panel.querySelectorAll('a,button').forEach(function (el) {
      el.addEventListener('click', function () {
        panel.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  var lines = document.querySelectorAll('.tline');
  lines.forEach(function (el, i) {
    el.style.animationDelay = (0.15 * i) + 's';
  });
});
