function openModal() {var modal = document.getElementById("myModal");
    modal.style.display = "block";
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

window.onclick = function(event) {var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}