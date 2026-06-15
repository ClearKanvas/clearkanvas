/* ClearKanvas — shared behavior: nav shadow, scroll reveals, animated orb field */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Nav shadow on scroll */
  var nav = document.querySelector('header.nav');
  if (nav) {
    var onScroll = function () {
      if (window.scrollY > 12) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    var toggle = document.getElementById('navToggle');
    if (toggle) toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('menu-open');
      toggle.textContent = open ? 'Close' : 'Menu';
    });
  }

  /* Scroll reveals */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal').forEach(function (n) { io.observe(n); });
  document.querySelectorAll('[data-stagger]').forEach(function (group) {
    Array.prototype.slice.call(group.children).forEach(function (k, idx) {
      k.style.transitionDelay = (idx * 90) + 'ms';
    });
    io.observe(group);
  });

  /* Animated gradient orb field */
  window.orbField = function (canvas, orbs, blend) {
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var w = 0, h = 0, dpr = 1, raf = null;
    function resize() {
      var r = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.width = Math.max(1, Math.round(r.width * dpr));
      h = canvas.height = Math.max(1, Math.round(r.height * dpr));
    }
    function frame(t) {
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = blend || 'source-over';
      var time = t / 1000;
      for (var i = 0; i < orbs.length; i++) {
        var o = orbs[i];
        var x = (o.bx * w) + Math.sin(time * o.sx + o.ph) * o.ax * dpr;
        var y = (o.by * h) + Math.cos(time * o.sy + o.ph) * o.ay * dpr;
        var rad = o.r * dpr;
        var g = ctx.createRadialGradient(x, y, 0, x, y, rad);
        g.addColorStop(0, 'rgba(' + o.c + ',' + o.a + ')');
        g.addColorStop(1, 'rgba(' + o.c + ',0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, rad, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(frame);
    }
    resize();
    window.addEventListener('resize', function () {
      resize();
      if (reduce) { cancelAnimationFrame(raf); frame(0); }
    }, { passive: true });
    if (reduce) { frame(0); } else { raf = requestAnimationFrame(frame); }
  };
})();
