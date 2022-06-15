// $(document).ready(function() {
//     const myTimeOut = setTimeout(preload, 3000);

//    function preload() {
//     $('#load').remove('.load');
//    }
// });

$(document).ready(function() {
    const myTimeOut = setTimeout(preload, 3000);

   function preload() {
    const load = document.getElementById('container');
    load.style.display = 'none';
   }
});