document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            if(name) {
                alert(`Thank you for your message, ${name}! I will reach out to you shortly.`);
                this.reset();
            }
        });