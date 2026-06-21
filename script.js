document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            if(name) {
                alert(`Data stream synchronized! Connection handshake successful with node: ${name}.`);
                this.reset();
            }
        });