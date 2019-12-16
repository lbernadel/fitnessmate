// click event for buttons w/ .update to save changes to workouts
// grab the plan's textarea id
// grab activities inside the textarea
// PUT request to save the updated info

$(".update").on("click", (event) => {
    const plan = event.target;
    let getPlan = $(plan).attr("data-id");
    let newActivities = $(plan).attr(`#${getPlan}-activities`);
    const planDate = $(plan).attr("data-date")

    $.ajax({
        url: "/api/workouts/" + planDate,
        method: "PUT",
        data: {
            _id: getPlan,
            date: planDate,
            activities: newActivities
        }
    }).then(info => {
        console.log(info)
    });
});