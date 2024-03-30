window.addEventListener('scroll', function() {
    var nav1 = document.getElementById('nav1');
  
    if (window.scrollY > 80) {
      nav1.classList.add('violet-bg');
    } else {
      nav1.classList.remove('violet-bg');
    }
    
  });
  
  var navItems = document.querySelectorAll('nav ul li a');
  
  navItems.forEach(function(item) {
    item.addEventListener('mouseenter', function() {
      document.getElementById('nav1').classList.add('cir-bg');
    });
  
    item.addEventListener('mouseleave', function() {
      document.getElementById('nav1').classList.remove('cir-bg');
    });
  });
  