/* global data */
/*https://github.com/Learning-Fuze/week-planner-instructions */
var $entryButton = document.querySelector('.entry-button');
var $mainScreen = document.querySelector('.container');
var $addEntryModal = document.querySelector('.hidden-container');
var $form = document.querySelector('form');

// hides main screen and shows entry modal
$entryButton.addEventListener('click', function (e) {
  $mainScreen.className += ' hidden';
  $addEntryModal.className = 'hidden-container';
});

// hides modal and stores entry data into data model
$form.addEventListener('submit', function (e) {
  e.preventDefault();
  $mainScreen.className = 'container';
  $addEntryModal.className = 'hidden-container hidden';

  data.entries.day = $form.elements['day-of-week'].value;
  data.entries.time = $form.elements.time.value;
  // console.log('data time: ', data.entries.time);
  data.entries.task = $form.elements.description.value;
  // console.log(data.entries.task);
  data.storage.push(data.entries);

  $form.reset();
});

var previousDataJson = localStorage.getItem('week-planner');
if (previousDataJson) {
  data = JSON.parse(previousDataJson);
}

window.addEventListener('beforeunload', function (e) {
  var dataJson = JSON.stringify(data);
  localStorage.setItem('week-planner', dataJson);
});

var dayButton = document.querySelectorAll('.day-buttons');
for (var i = 0; i <= dayButton.length - 1; i++) {

  dayButton[i].addEventListener('click', function (e) {

    var $tbody = document.createElement('tbody');
    var trTask;
    var td;
    var td2;
    for (var x = 0; x <= data.storage.length - 1; x++) {
      if (dayButton[i].textContent === data.storage[x].day) {
        trTask = document.createElement('tr');
        td = document.createElement('td');
        td2 = document.createElement('td');
      }
    }
  });
}

/*
          <div class="row">
            <table>
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>sdfsdaf</td>
                  <td>sdfsdaf</td>
                </tr>
                <tr>
                  <td>sdfsdaf</td>
                  <td>sdfsdaf</td>
                </tr>
                <tr>
                  <td>sdfsdaf</td>
                  <td>sdfsdaf</td>
                </tr>
                <tr>
                  <td>sdfsdaf</td>
                  <td>sdfsdaf</td>
                </tr>
              </tbody>
            </table>
          </div> */
