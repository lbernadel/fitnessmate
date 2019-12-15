// click event for buttons w/ .update to save changes to workouts
// grab the plan's textarea id
// grab activities inside the textarea
// PUT request to save the updated info

$(".update").on("click", () => {
    let getPlan = $(this).attr("data-id");
    let newActivities = $(`#${getPlan}-activities`).val();

    $.put("/api/workouts/:planDate", data => {    
        let newPlan = {
            _id: getPlan,
            activities: newActivities.trim().split(", ")
        };
        
        data = newPlan
        
    });

});