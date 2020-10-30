/* global data */

var $entryButton = document.querySelector('.entry-button');
var $mainScreen = document.querySelector('.container');
var $addEntryModal = document.querySelector('.hidden-container');
var $form = document.querySelector('form');

// hides main screen and shows entry modal
$entryButton.addEventListener('click', function (e) {
  $mainScreen.className += ' hidden';
  $addEntryModal.className = 'hidden-container';
});

var $submitEntryButton = document.querySelector('.submit-entry-button');

// hides modal and stores entry data into data model
$submitEntryButton.addEventListener('click', function (e) {
  $mainScreen.className = 'container';
  $addEntryModal.className = 'hidden-container hidden';

  data.entries.day = $form.elements['day-of-week'].value;
  console.log(data.entries.day);
});
