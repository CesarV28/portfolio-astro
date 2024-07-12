document.addEventListener('astro:page-load', () => {
    for (const element of document.querySelectorAll('#fade-image')) {
        element.classList.remove('scale-90');
    }
});


document.addEventListener('astro:page-load', () => {
    const wrapper = document.querySelector('[data-tech-wrapper]');
    // ================== Slider ==================
    let copy = document.querySelector('.tech-card')?.cloneNode(true);
    if (copy && wrapper) {
        wrapper.appendChild(copy);
    }

    // ================== Modal ==================
    const modal = document.querySelector('[data-tech-modal]');
    const h2Tech = document.querySelector('[data-tech-h2]');
    const stopSlide = document.querySelector('[data-tech-stop]');

    if (modal && h2Tech && stopSlide) {
        h2Tech.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.toggle('hidden');
            modal.classList.toggle('flex');
        });
    }

    if (wrapper && modal) {
        wrapper.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.toggle('hidden');
            modal.classList.add('flex');
        });
    }

    if (modal && stopSlide) {
        modal.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.toggle('hidden');
            modal.classList.remove('flex');
        });
    }

    if (stopSlide && modal) {
        stopSlide.addEventListener('click', (e) => e.stopPropagation());
    }

    addEventListener('keydown', (e) => {
        if (modal && e.key === 'Escape') {
            modal.classList.toggle('hidden');
            modal.classList.remove('flex');
        }
    });
});


// ================== Email Form ==================
const emailForm = document.querySelector<HTMLFormElement>('[data-email-form]');
const formMessage = document.getElementById('form-message');
const btnSubmit = document.querySelector<HTMLButtonElement>('.btn-submit');

function createFormData(form: HTMLFormElement): FormData | null {
    const formData = new FormData(form);

    // Check if all required fields have values
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !message) {
        return null;
    }

    return formData;
}

if (emailForm) {
    emailForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        formMessage?.classList.add('hidden');
        formMessage!.textContent = '';
        btnSubmit!.value = 'Sending...';

        const form = e.target as HTMLFormElement;
        const formData = createFormData(form);   

        if (!formData) {
            formMessage!.textContent = 'Please fill in all required fields.';
            formMessage?.classList.remove('hidden');
            return;
        }

        const url = 'https://api.example.com/send-email';

        try {
            const response = await fetch(url, {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                formMessage!.textContent = 'Message sent successfully!';
                formMessage?.classList.remove('hidden');
                formMessage?.classList.remove('text-red-500');
                formMessage?.classList.add('text-green-500');
                form.reset();
            } else {
                formMessage!.textContent = 'Message failed to send. Please try again.';
                formMessage?.classList.remove('hidden');
            }
        } catch (error) {
            formMessage!.textContent = 'An error occurred. Please try again.';
            formMessage?.classList.remove('hidden');
        } finally {
            btnSubmit!.value = 'Send';
        }
    });
}

