// メニュー開閉
(function(){
  var btn=document.getElementById('menuBtn'),nav=document.getElementById('gnav');
  if(btn&&nav){btn.addEventListener('click',function(){
    var open=nav.classList.toggle('open');btn.setAttribute('aria-expanded',open?'true':'false');btn.textContent=open?'CLOSE':'MENU';
  });}
})();
// 施工前・施工後の切り替え(タップでもボタンでも)
document.querySelectorAll('.work').forEach(function(w){
  var ba=w.querySelector('[data-ba]'),label=w.querySelector('.ba-label'),btns=w.querySelectorAll('.ba-switch button');
  function set(on){
    ba.classList.toggle('on',on);label.textContent=on?'施工後':'施工前';
    btns.forEach(function(b){b.setAttribute('aria-pressed',(b.dataset.v==='1')===on?'true':'false');});
  }
  ba.addEventListener('click',function(){set(!ba.classList.contains('on'));});
  btns.forEach(function(b){b.addEventListener('click',function(){set(b.dataset.v==='1');});});
});
