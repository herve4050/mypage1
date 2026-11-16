// 8×8 격자 칸을 만들고, 각 칸에 순서(--i)와 크기 배율(--s)을 넣어
// 참고 펜의 sibling-index() 효과를 모든 브라우저에서 재현합니다.
(function () {
  var grid = document.getElementById('grid');
  var count = 64;
  for (var i = 1; i <= count; i++) {
    var cell = document.createElement('span');
    cell.style.setProperty('--i', i);
    cell.style.setProperty('--s', (i / count / 1.4).toFixed(4));
    grid.appendChild(cell);
  }

  var toggle = document.getElementById('motion-toggle');
  toggle.addEventListener('click', function () {
    var paused = grid.classList.toggle('is-paused');
    toggle.setAttribute('aria-pressed', paused ? 'true' : 'false');
    toggle.textContent = paused ? '애니메이션 재생' : '애니메이션 멈추기';
  });
})();
