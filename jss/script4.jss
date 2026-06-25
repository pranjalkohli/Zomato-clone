// ============================
// Zomato-style Sign Up Page JS
// ============================

document.addEventListener('DOMContentLoaded', () => {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const termsCheckbox = document.getElementById('terms');
  const createBtn = document.querySelector('.create_acc .button');
  const createAcc = document.querySelector('.create_acc');

  // ---- Insert an error message area right above the Create Account button ----
  const errorMsg = document.createElement('div');
  errorMsg.className = 'error-msg';
  errorMsg.setAttribute('aria-live', 'polite');
  createAcc.insertBefore(errorMsg, createBtn);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function clearErrors() {
    errorMsg.textContent = '';
    nameInput.classList.remove('invalid');
    emailInput.classList.remove('invalid');
  }

  function showError(message, field) {
    errorMsg.textContent = message;
    if (field) field.classList.add('invalid');
  }

  // Clear the invalid state as soon as the person edits a field
  [nameInput, emailInput].forEach((input) => {
    input.addEventListener('input', () => {
      input.classList.remove('invalid');
      errorMsg.textContent = '';
    });
  });

  termsCheckbox.addEventListener('change', () => {
    errorMsg.textContent = '';
  });

  // ---- "Create Account" click handler (the button is a styled <div>, not a real <button>) ----
  createBtn.addEventListener('click', () => {
    if (createBtn.classList.contains('disabled')) return;
    clearErrors();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (!name) {
      showError('Please enter your name.', nameInput);
      nameInput.focus();
      return;
    }

    if (!email) {
      showError('Please enter your email.', emailInput);
      emailInput.focus();
      return;
    }

    if (!emailRegex.test(email)) {
      showError('Enter a valid email address.', emailInput);
      emailInput.focus();
      return;
    }

    if (!termsCheckbox.checked) {
      showError('You must agree to the Terms & Conditions to continue.');
      return;
    }

    // All checks passed — simulate account creation
    createBtn.classList.add('disabled');
    const originalText = createBtn.textContent;
    createBtn.textContent = 'Creating account...';

    setTimeout(() => {
      // Replace this block with an actual fetch()/API call when a backend exists
      createBtn.classList.remove('disabled');
      createBtn.textContent = originalText;
      alert(`Account created for ${name} (${email})`);
    }, 1200);
  });

  // ---- Allow pressing Enter in either text field to submit ----
  [nameInput, emailInput].forEach((input) => {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        createBtn.click();
      }
    });
  });
});