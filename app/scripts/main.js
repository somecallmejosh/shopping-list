var $itemEntry = $('.item-entry'),
    $itemSubmit = $('.item-submit'),
    $listGroup = $('.list-group');
    $listGroupButton = $('.list-group-item');
    $clearList = $('.clear-list');
    // Set the template for the new list item.
    $newItemContent = '<button type="button" class="list-group-item">' +
        '<i class="glyphicon glyphicon-ok"></i> ' +
        '<span class="item"> %data% </span>' +
        '<a class="btn btn-xs btn-default pull-right remove">' +
          '<i class="glyphicon glyphicon-remove"></i>' +
        '</a>' +
      '</button>';
// When the page loads
  // Set focus on input form
  $itemEntry.focus();

// When the user clicks the submit button
  // capture the form data
  $itemSubmit.on("click", function(e){
    // prevent the form button from refreshing the page on click
    e.preventDefault();
    // capture the form input content and 
    // assign it variable that will be appended to 
    // the list group
    var newItem = $itemEntry.val();
    // replace the %data% placeholder the the string from the input element
    var newItemHTML = $newItemContent.replace('%data%', newItem);
    // append the data to the list-group container
    $(newItemHTML).appendTo($listGroup);
    // clear the input form
    $itemEntry.val("");
    // reset the focus to the input element
    $itemEntry.focus();
  });
  
// When the user clicks on the "x" button
  // Remove the item from the list
  $(document).on("click", ".remove", function(e){
    e.preventDefault();
    $(this).closest("button").fadeOut();
  });

// When the user clicks on an item in the list
  // Toggle Class of "list-group-item-success"
  $(document).on("click", "span", function(e){
    e.preventDefault();
    $(this).closest("button").toggleClass("list-group-item-info");
  });

  // CSS will set "visible" and "hidden" classes on the checkmark icon in the markup

// When the user clicks on the "Clear List" button
  // Remove All Items from the list
  $clearList.on("click", function(){
    $listGroup.find(".list-group-item").fadeOut();
  });