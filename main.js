
const checkbox = document.getElementById('check');
const navLinks = document.querySelector('.navLinks');

checkbox.addEventListener('change', function () {
    if (this.checked) {
        navLinks.style.display = 'block';
    } else {
        navLinks.style.display = 'none';
    }
});

const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.querySelector('input[name="name"]').value;
    const number = document.querySelector('input[name="number"]').value;
    const guests = document.querySelector('input[name="guests"]').value;

    alert(`Name: ${name}\nNumber: ${number}\nGuests: ${guests}`);
}); 