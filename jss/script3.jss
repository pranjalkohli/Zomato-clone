// ============================
// Zomato-style Login Page JS
// ============================

document.addEventListener('DOMContentLoaded', () => {
  const emailInput = document.getElementById('email');
  const pswdInput = document.getElementById('pswd');
  const card = document.querySelector('.card');
  const loginBtn = document.querySelector('.card .button');

  // ---- Insert an error message area right above the Login button ----
  const errorMsg = document.createElement('div');
  errorMsg.className = 'error-msg';
  errorMsg.setAttribute('aria-live', 'polite');
  card.insertBefore(errorMsg, loginBtn);

  // ---- Validation helpers ----
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobileRegex = /^[6-9]\d{9}$/; // simple 10-digit Indian mobile pattern

  function isValidIdentifier(value) {
    return emailRegex.test(value) || mobileRegex.test(value);
  }

  function clearError() {
    errorMsg.textContent = '';
    emailInput.classList.remove('invalid');
    pswdInput.classList.remove('invalid');
  }

  function showError(message, field) {
    errorMsg.textContent = message;
    if (field) field.classList.add('invalid');
  }

  // ---- Live validation as the user types ----
  emailInput.addEventListener('input', () => {
    emailInput.classList.remove('invalid');
    errorMsg.textContent = '';
  });

  pswdInput.addEventListener('input', () => {
    pswdInput.classList.remove('invalid');
    errorMsg.textContent = '';
  });

  // ---- Login button click handler (it's a styled <div>, not a real <button>) ----
  loginBtn.addEventListener('click', () => {
    if (loginBtn.classList.contains('disabled')) return;
    clearError();

    const identifier = emailInput.value.trim();
    const password = pswdInput.value.trim();

    if (!identifier) {
      showError('Please enter your mobile number or email.', emailInput);
      emailInput.focus();
      return;
    }

    if (!isValidIdentifier(identifier)) {
      showError('Enter a valid email address or 10-digit mobile number.', emailInput);
      emailInput.focus();
      return;
    }

    if (!password) {
      showError('Please enter your password.', pswdInput);
      pswdInput.focus();
      return;
    }

    if (password.length < 6) {
      showError('Password must be at least 6 characters long.', pswdInput);
      pswdInput.focus();
      return;
    }

    // All checks passed — simulate a login request
    loginBtn.classList.add('disabled');
    const originalText = loginBtn.textContent;
    loginBtn.textContent = 'Logging in...';

    setTimeout(() => {
      // Replace this block with an actual fetch()/API call when a backend exists
      loginBtn.classList.remove('disabled');
      loginBtn.textContent = originalText;
      alert(`Welcome! Logging in with: ${identifier}`);
    }, 1200);
  });

  // ---- Allow pressing Enter in either field to submit ----
  [emailInput, pswdInput].forEach((input) => {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        loginBtn.click();
      }
    });
  });
});