var linkModalSearch = document.querySelector(".search__btn");
var modalSearch = document.querySelector(".modal-search");
    
linkModalSearch.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (modalSearch.classList.contains("modal--show")) {
    modalSearch.classList.remove("modal--show");
  } else {
    modalSearch.classList.add("modal--show");
  }
      
});