const birthday = {
  year: 1999,
  month: 3,
  date: 7,
};

$(function () {

  // Page scroll
  var navHeight = $(".header").outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position, }, 300, "swing");
    return false;
  });

  // Page-top
  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0, }, 300);
    return false;
  });

  // Calculate age
  var today = new Date();
  var thisYearsBirthday = new Date(today.getFullYear(), birthday.month - 1, birthday.date);
  var age_value = today.getFullYear() - birthday.year;
  if (today < thisYearsBirthday) age_value--;
  var age = document.getElementById("age")
  age.textContent = age_value;
  age.style.color = '#333';
});
