$(function(){
  $('#dropDownMenu').click(function(){
    $('#dropDownContents').slideToggle(500)
  })
})

$(function(){                   //SHOULD THIS BE MOVED TO A CONTROLLER?
  $('.replyButton').click(function(){
    $('.discussionContainer').slideToggle(500)
  })
})

$(function(){
  $('.dropdown').click(function(){
    $('#dropDownContents').slideToggle(500)
  })
})
