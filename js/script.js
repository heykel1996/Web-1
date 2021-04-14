const txtElement = ["Muhammad Heykel"];
let count = 0;
let txtIndex = 0;
let currentTxt = "";
let words = "";

(function ngetik() {
  "body"
    .on("input propertychange", ".floating-label-form-group", function (e) {
      $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    })
    .on("focus", ".floating-label-form-group", function () {
      $(this).addClass("floating-label-form-group-with-focus");
    })
    .on("blur", ".floating-label-form-group", function () {
      $(this).removeClass("floating-label-form-group-with-focus");

      if (count == txtElement.length) {
        count == 0;
      }
    });

  currentTxt = txtElement[count];

  words = currentTxt.slice(0, ++txtIndex);
  document.querySelector(".efek-ngetik").textContent = words;

  if (words.length == currentTxt.length) {
    count++;
    txtIndex = 0;
  }

  setTimeout(ngetik, 500);
})();
