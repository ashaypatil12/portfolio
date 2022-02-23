function deleteNote(noteId) {
  fetch("/delete-note", {method: "POST", body: JSON.stringify({ noteId: noteId }),}).then
  (
  (_res) =>
          {
            window.location.href = "/notes";
          }
  );
}
//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


<script type="text/javascript">
  $( function() {
    $( "#cssbar" ).progressbar({
      value: 85
    });
    $( "#htmlbar" ).progressbar({
      value: 67
    });
    $( "#photoshopbar" ).progressbar({
      value: 80
    });
    $( "#wordpressbar" ).progressbar({
      value: 50
    });
    $( "#phpbar" ).progressbar({
      value: 63
    });
  });
</script>