var i = document.getElementById('input');
var e = document.getElementById('eye');
var visible = false;

function display()
{
  switch (visible) {
    case true:
      makeInvisible();
      break;
    default:
      makeVisible();
      break;
  }

  function makeVisible() {
    i.type = 'text';
    e.className = 'fas fa-eye';
    e.style.color = '#0091FF';
    visible = true;
  }

  function makeInvisible() {
    i.type = 'password';
    e.className = 'fas fa-eye-slash';
    e.style.color = '#A15CDC';
    visible = false;
  }
}