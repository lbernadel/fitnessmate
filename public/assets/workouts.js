// click event for buttons w/ .update to save changes to workouts
// grab the plan's textarea id
// grab activities inside the textarea
// PUT request to save the updated info

$(document).on("click", ".update", function() {
    let getPlan = $(this).attr("data-id");
    let newActivities = $(`#${getPlan}-activities`).val();
    const planDate = $(`#${getPlan}-date`).attr("data-date")

    $.ajax({
        url: "/api/workouts/" + planDate,
        method: "PUT",
        data: {
            _id: getPlan,
            date: planDate,
            activities: newActivities
        },
        success: window.location.href = "/workouts?success=workout saved"
    });
});