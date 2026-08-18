const typingText = [
    "Frontend Developer",
    "Web Developer",
    "JavaScript Developer"
]

let textIndex = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing");
    
    function typeEffect() {
        
        if(charIndex < typingText[textIndex].length){
            typingElement.textContent += typingText[textIndex].charAt(charIndex);
            charIndex++;
            
            setTimeout(typeEffect, 120);
        } else {
            setTimeout(deleteEffect, 1500);
        }
    }

    function deleteEffect() {
        
        if(charIndex > 0){
            typingElement.textContent = typingText[textIndex].substring(0, charIndex - 1);
            charIndex--;

            setTimeout(deleteEffect, 70)
        } else {
            textIndex++;
            
            if(textIndex >= typingText.length) {
                textIndex = 0;
            }

            setTimeout(typeEffect, 300)
        }
    }

    typeEffect();


    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop -150;
            const sectionHeight = section.offsetHeight;

            if(window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {

                currentSection = section.getAttribute("id");
            }
        })

        navLinks.forEach(navLink => {
        navLink.classList.remove("active");

        if(navLink.getAttribute("href") === "#" + currentSection) {
            navLink.classList.add("active")
        }
    })

    });

    let topBtn = document.getElementById("topBtn");

    window.addEventListener("scroll", () => {
        if(window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    });

    topBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });


    const form = document.getElementById("contactForm");

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const subjectInput = document.getElementById("subject");
    const messageInput = document.getElementById("message");

    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const subject = subjectInput.value.trim();
        const message = messageInput.value.trim();
        
        successMessage.textContent = "Message sent successfully!";

        setTimeout( function(){
            successMessage.textContent = "";
        }, 3000);

        form.reset();
    });
