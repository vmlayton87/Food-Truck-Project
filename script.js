// I was able to use research, youtube, and ChatGPT to help build this code until it made sense to me. 

$(document).ready(function() {
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            $(entry.target).animate({
              opacity: 1
            }, 1800, function() {
            });
          }
        });
      });
      $(".scroll-fade").each(function() {
        observer.observe(this);
        });
    });