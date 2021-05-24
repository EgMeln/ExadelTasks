let skipCounter = postArray.getPage(0, 2, filterClass).length;

addPostArray(postArray.getPage());

let moreButton = document.getElementById("more_button")
let filterButton = document.getElementById("filter_button")
let filterForm = document.forms.filter;


function handleMorePosts() {
    addPostArray(postArray.getPage(skipCounter, 2,filterClass));
    skipCounter += 2;
    if (postArray.getPage(skipCounter, 1,filterClass).length === 0) {
        moreButton.style.display = "none";
    }
}
moreButton.addEventListener('click', handleMorePosts);

function handleFilterSubmit(event) { 
    let redraw = filterForm.filter_hashtags_checkbox.checked ||
        filterForm.filter_date_checkbox.checked;

    if (filterForm.filter_date_checkbox.checked) {
        filterClass.date = new Date(filterForm.filter_date_text.value);
        alert("date checked " + filterClass.date);
    } else {
        filterClass.date = null;
    }
    if (filterForm.filter_hashtags_checkbox.checked) {
        filterClass.hashtags = filterForm.filter_hashtags_text.value;
        alert("hash checked");
    } else {
        filterClass.hashtags = "";
    }

    redrawFilterPostFeed();
    let tempArray = postArray.getPage(0, 2, filterClass);
    skipCounter = tempArray.length;
    if (postArray.getPage(skipCounter, 1, filterClass).length !== 0) {
        moreButton.style.display = "flex";
    }
    addPostArray(tempArray);
}

filterButton.addEventListener('click', handleFilterSubmit);
