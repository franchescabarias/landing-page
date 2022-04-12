function signUp() {
    let name = prompt('What is your name?');
    let age = prompt('What is your age?');

    if (age >= 16) {
        alert(`Welcome to ArtCanvas ${name}, you are allowed to enter!`);
    } else {
        alert(`Sorry ${name}, you are not allowed to enter!`)
    }
}

let explore = document.querySelector('button');
explore.addEventListener('click', signUp); 