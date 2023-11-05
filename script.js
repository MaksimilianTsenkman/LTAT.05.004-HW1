const userPhoto = document.getElementById('user-photo');
const dropdown = document.getElementById('dropdown');

userPhoto.addEventListener('mouseover', function() {
    dropdown.style.display = 'block';
  });
  
  userPhoto.addEventListener('mouseout', function() {
    dropdown.style.display = 'none';
  });