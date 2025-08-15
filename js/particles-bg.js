// NeoTech Glow: fondo animado de partículas (líneas y puntos)
// Usa Canvas para animar líneas y puntos sutiles en el fondo
(function(){
  const canvas = document.createElement('canvas');
  canvas.id = 'particles-bg';
  canvas.style.position = 'fixed';
  canvas.style.top = 0;
  canvas.style.left = 0;
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.zIndex = 0;
  canvas.style.pointerEvents = 'none';
  document.body.prepend(canvas);
  const ctx = canvas.getContext('2d');
  let w, h, dpr;
  function resize() {
    dpr = window.devicePixelRatio || 1;
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w+'px';
    canvas.style.height = h+'px';
    ctx.setTransform(1,0,0,1,0,0);
    ctx.scale(dpr,dpr);
  }
  window.addEventListener('resize', resize);
  resize();
  // Partículas
  const particles = Array.from({length: 60},()=>({
    x: Math.random()*w,
    y: Math.random()*h,
    vx: (Math.random()-0.5)*0.3,
    vy: (Math.random()-0.5)*0.3,
    r: 1.2+Math.random()*1.8
  }));
  function draw() {
    ctx.clearRect(0,0,w,h);
    // Líneas
    for(let i=0;i<particles.length;i++){
      for(let j=i+1;j<particles.length;j++){
        const a=particles[i],b=particles[j];
        const dist = Math.hypot(a.x-b.x,a.y-b.y);
        if(dist<120){
          ctx.strokeStyle = 'rgba(0,246,255,0.08)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x,a.y);
          ctx.lineTo(b.x,b.y);
          ctx.stroke();
        }
      }
    }
    // Puntos
    for(const p of particles){
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,2*Math.PI);
      ctx.fillStyle = 'rgba(157,0,255,0.18)';
      ctx.shadowColor = '#9D00FF';
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }
  function animate(){
    for(const p of particles){
      p.x += p.vx;
      p.y += p.vy;
      if(p.x<0||p.x>w) p.vx*=-1;
      if(p.y<0||p.y>h) p.vy*=-1;
    }
    draw();
    requestAnimationFrame(animate);
  }
  animate();
})();
