/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

    AFRAME.registerComponent('navigate-on-click', {
        schema: {
          url: {
            default: ''
          }
        },
        init: function () {
          console.log("hello")
          console.log(this.el)
          var data = this.data;
          var el = this.el;
          el.addEventListener('click', function () {
            //window.location.href = data.url;
            window.open(data.url, '_blank');
          });
        }
      });
     



var url ='https://joaosilgo.github.io/API/API/api.json';
var req = new XMLHttpRequest();
req.responseType = 'json';
req.open('GET', url, true);
req.onload = function () {
    var jsonResponse = req.response;
    console.log(jsonResponse);
    // do something with jsonResponse
};
req.send(null);