
const timeframes = document.querySelectorAll('.timeframe');
const previousTexts = document.querySelectorAll('.previous');

// Def the labels 
const labels = {
  Daily: 'Yesterday',
  Weekly: 'Last Week',
  Monthly: 'Last Month',
};

timeframes.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class
    timeframes.forEach(btn => btn.classList.remove('active'));

    // Add active class 
    button.classList.add('active');


    const timeframe = button.textContent;

    // Update the prev period txt
    previousTexts.forEach((text) => {
      // Reset the prev txt content
      text.textContent = `${labels[timeframe]} - ${text.textContent.split(' - ')[1]}`;
    });
  });
});
//switch btw dark/light theme
const toggle = document.getElementById('modeToggle');
const modeLabel = document.getElementById('modeLabel');

toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
  modeLabel.textContent = toggle.checked ? 'Light Mode' : 'Dark Mode';
});
