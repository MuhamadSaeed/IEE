document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    let isValid = true;
    const form = e.target;
  
    // Validation
    form.querySelectorAll(".error-message").forEach(msg => (msg.style.display = "none"));
  
    if (!form["first-name"].value.trim()) {
      isValid = false;
      document.getElementById("first-name-error").style.display = "block";
    }
  
    if (!form["last-name"].value.trim()) {
      isValid = false;
      document.getElementById("last-name-error").style.display = "block";
    }
  
    const email = form["email"].value.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      isValid = false;
      document.getElementById("email-error").style.display = "block";
    }
  
    if (!form["query-type"].value) {
      isValid = false;
      document.getElementById("query-type-error").style.display = "block";
    }
  
    if (!form["message"].value.trim()) {
      isValid = false;
      document.getElementById("message-error").style.display = "block";
    }
  
    if (!form["consent"].checked) {
      isValid = false;
      document.getElementById("consent-error").style.display = "block";
    }
  
    // Success Message
    if (isValid) {
      const toast = document.getElementById("success-toast");
      toast.style.display = "block";
      setTimeout(() => (toast.style.display = "none"), 3000);
      form.reset();
    }
  });
  