// load-layout.js

// Load header
fetch('header.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
  });

// Load footer
fetch('footer.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;

    // Nếu có plugin Facebook
    if (typeof FB !== "undefined") {
      FB.XFBML.parse();
    }
  });


