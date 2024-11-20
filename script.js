// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark mode toggle
const toggleButton = document.createElement('button');
toggleButton.innerText = "Toggle Dark Mode";
document.body.insertBefore(toggleButton, document.body.firstChild);

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Dark mode CSS
const style = document.createElement('style');
style.textContent = `
    .dark-mode {
        background-color: #121212;
        color: #f1f1f1;
    }
    .dark-mode button {
        background-color: #f1f1f1;
        color: #121212;
    }
`;
document.head.append(style);

let btn=document.querySelector("#btn");
btn.addEventListener("click", function (){
    alert("Thank you...Message sent!")
})

