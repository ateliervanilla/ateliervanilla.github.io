// Modal - JS


function openModal(clicked_id) {

  document.getElementById("modalTitle").innerHTML = clicked_id + "&nbsp;" + "Series";
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}