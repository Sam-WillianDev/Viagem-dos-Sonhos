function includeHTML() {
    var elements, i, xhttp;
    /* Loop through a collection of all HTML elements: */
    elements = document.querySelectorAll('[include-html]');
    for (i = 0; i < elements.length; i++) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          for (var j = 0; j < elements.length; j++) {
            if (elements[j].getAttribute('include-html') == this._url) {
              elements[j].innerHTML = this.responseText;
            }
          }
        }
      };
      xhttp._url = elements[i].getAttribute('include-html');
      xhttp.open('GET', xhttp._url, true);
      xhttp.send();
    }
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (rolagem) {
        rolagem.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});