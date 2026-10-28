document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const formAlert = document.getElementById('formAlert');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            event.stopPropagation();

            let isValid = true;

            const fullName = document.getElementById('fullName');
            const email = document.getElementById('email');
            const phone = document.getElementById('phone');
            const password = document.getElementById('password');
            const gender = document.getElementById('gender');
            const message = document.getElementById('message');

            if (fullName.value.trim() === '') {
                fullName.classList.add('is-invalid');
                isValid = false;
            } else {
                fullName.classList.remove('is-invalid');
                fullName.classList.add('is-valid');
            }

            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value.trim())) {
                email.classList.add('is-invalid');
                isValid = false;
            } else {
                email.classList.remove('is-invalid');
                email.classList.add('is-valid');
            }

            
            if (phone.value.trim().length < 8) {
                phone.classList.add('is-invalid');
                isValid = false;
            } else {
                phone.classList.remove('is-invalid');
                phone.classList.add('is-valid');
            }

            
            if (password.value.length < 6) {
                password.classList.add('is-invalid');
                isValid = false;
            } else {
                password.classList.remove('is-invalid');
                password.classList.add('is-valid');
            }

            
            if (gender.value === '') {
                gender.classList.add('is-invalid');
                isValid = false;
            } else {
                gender.classList.remove('is-invalid');
                gender.classList.add('is-valid');
            }
            if (message.value.trim() === '') {
                message.classList.add('is-invalid');
                isValid = false;
            } else {
                message.classList.remove('is-invalid');
                message.classList.add('is-valid');
            }

            formAlert.classList.remove('d-none', 'alert-success', 'alert-danger');
            if (isValid) {
                formAlert.classList.add('alert-success');
                formAlert.textContent = 'Registration/Booking submitted successfully! Thank you for exploring Lesotho.';
                contactForm.reset();
                document.querySelectorAll('.is-valid').forEach(el => el.classList.remove('is-valid'));
            } else {
                formAlert.classList.add('alert-danger');
                formAlert.textContent = 'Please fix the highlighted errors in the form before submitting.';
            }
        });
    }
});