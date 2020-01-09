// ACTIVE DROPDOWN: for updating 'div.active-dropdown' innerText

var dropdownMenu = document.getElementsByClassName('dropdown-item');
// looping through filter buttons and applying a 'click' event to each
for (var i = 0; i < dropdownMenu.length; i++) {
    var button = dropdownMenu[i];
    button.addEventListener('click', inProgress);
}

function inProgress(event) {
    // updating the innerText
    var clickedDropdownItem = event.target;
    var activeDropdown = document.getElementsByClassName('active-dropdown')[0];
    activeDropdown.innerText = clickedDropdownItem.innerText;
    // updating the color according to the clicked item color
    var clickedItemColor = clickedDropdownItem.classList[1];
    if(clickedItemColor === 'bg-primary'){
        activeDropdown.style.background = 'blue';
        activeDropdown.style.color = 'white';
    } else if(clickedItemColor === 'bg-success'){
        activeDropdown.style.background = 'green';
        activeDropdown.style.fontColor = 'white';
    } else if(clickedItemColor === 'bg-danger'){
        activeDropdown.style.background = 'red';
        activeDropdown.style.color = 'white';
    } else {
        activeDropdown.style.background = '';
        activeDropdown.style.color = '';
    }
    // console.log(activeDropdown.innerText);
    // console.log(clickedItembackground);
}

// -------------------------------------------------------------------------- //


// ACTIVE CLASS: for styling the active sort option

$(document).on('click', '.sort div', function() {
    $(this).addClass('active-sort').siblings().removeClass('active-sort')
});


// -------------------------------------------------------------------------- //
