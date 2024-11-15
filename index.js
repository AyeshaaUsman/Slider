var images = [
    'https://t3.ftcdn.net/jpg/08/10/66/92/360_F_810669226_J0JeFjIBh1N3n3q63EVZ1yqdRWMrKXCd.jpg',
    'https://t3.ftcdn.net/jpg/08/13/44/54/360_F_813445490_DLfLChPrF6CHCHJOCOZ5nvn398fQ6Vee.jpg',
    'https://t4.ftcdn.net/jpg/09/14/68/03/360_F_914680337_IeCyjL8nuTdJexn0vXAsb2v54K9El7hg.jpg',
    'https://t3.ftcdn.net/jpg/07/28/90/52/360_F_728905276_PPWXGiFQL6oE4bWKe6UijLLvjS7aaipT.jpg'
  ];
  
  var currentIndex = 0;
  
  function changeSlide(direction) {
    currentIndex += direction;
  
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
      currentIndex = 0;
    }
  
    document.getElementById('current-image').src = images[currentIndex];
  }
  
  function setImage(index) {
    currentIndex = index;
    document.getElementById('current-image').src = images[currentIndex];
  }
  