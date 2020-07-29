

// Get modal element
var modal = document.getElementById('in-modal');

// Get open modal button
var modalBtn = document.getElementById('mdl-btn');

// Get close button 
var closeBtn = document.getElementsByClassName('clsbtn')[0];

// Listen for open click
modalBtn.addEventListener('click', openModal);

// Listen for close click
closeBtn.addEventListener('click', closeModal);

// Function to open modal
function openModal() {
    // console.log(123);
    modal.style.display='block';
}

// Function to open modal
function closeModal() {
    // console.log(123);
    modal.style.display='none';
}
