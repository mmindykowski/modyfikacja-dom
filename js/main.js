$(document).ready(function () {
  $(".click-first").click(function () {
    let changeParagraph = $(".list-item").last();
    $(".list-item").first().before(changeParagraph);
  });

  $(".click-back").click(function () {
    let changeParagraph = $(".list-item").first();
    $(".list-item").last().after(changeParagraph);
  });
});
