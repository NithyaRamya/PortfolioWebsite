
    const toggle = document.getElementById('darkToggle');

    // On load, apply saved preference
    if (localStorage.getItem("darkMode") === "true") {
      document.body.classList.add('dark-mode');
      toggle.checked = true;
    }

    // Toggle switch event
    toggle.addEventListener('change', () => {
      const isDark = toggle.checked;
      document.body.classList.toggle('dark-mode', isDark);
      localStorage.setItem("darkMode", isDark);
    });
