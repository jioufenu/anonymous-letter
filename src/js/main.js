document.addEventListener('DOMContentLoaded', function() {
  var letterText = localStorage.getItem('response-q1');
  if (letterText !== '') {
    $('#input-q1').val(letterText);
  }
  $('#input-q1').on('change', function() {
    localStorage.setItem('response-q1', $('#input-q1').val());
  });

  $('#input-form').one('submit', function() {
    var inputq1 = encodeURIComponent($('#input-q1').val());
    var q1ID = "entry.1678652128";
    var baseURL = 'https://docs.google.com/forms/d/e/1FAIpQLScQvFt5kxc2zqNYqFJVtBcU3wMWVxEORzIPssgUTQdirEtt-A/formResponse?';
    var submitRef = '&submit=Submit';
    var submitURL = (baseURL + q1ID + "=" + inputq1 + submitRef);
    console.log(submitURL);
    $(this)[0].action = submitURL;
    $('.pending-anim').addClass('is-active');
    $('#input-q1').attr('readonly', true)
    setTimeout(function() {
      $('.pending-anim').removeClass('is-active')
      $('#form-submit').text('匿名信已寄出');
    }, 2000);
  });
});
