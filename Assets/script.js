var currentHour = moment().hours();
var currentDayShortForm = moment().format("DDMMYY");

console.log(currentDayShortForm);

var storedPlan = JSON.parse(localStorage.getItem(`dailyPlanner-${currentDayShortForm}`) || "{}");

console.log(storedPlan);

var mySchedule = [

    { hour: 09, meridian: "am", note: storedPlan["9"] || "" },
    { hour: 10, meridian: "am", note: storedPlan["10"] || "" },
    { hour: 11, meridian: "am", note: storedPlan["11"] || "" },
    { hour: 12, meridian: "pm", note: storedPlan["12"] || "" },
    { hour: 13, meridian: "pm", note: storedPlan["13"] || "" },
    { hour: 14, meridian: "pm", note: storedPlan["14"] || "" },
    { hour: 15, meridian: "pm", note: storedPlan["15"] || "" },
    { hour: 16, meridian: "pm", note: storedPlan["16"] || "" },
    { hour: 17, meridian: "pm", note: storedPlan["17"] || "" },

]

console.log(mySchedule);

function displayDate() {
    var currentDate = moment().format('dddd, MMMM Do');
    $("#currentDay").text(currentDate);

}

displayDate();

function getTextAreaClass(hour) {

    if (hour === currentHour) {
        return "present";
    }
    if (hour > currentHour) {
        return "future";
    }

    if (hour < currentHour) {
        return "past";
    }

};

function displayPlanner() {

    mySchedule.forEach((schedule) => {

        var hourRow = $("<div>").attr({
            "class": "row time-block",
            "id": `${schedule.hour}-hour`
        });
        var hourBlock = $("<div>").attr({
            "class": "col-md-1 hour"
        })
        hourBlock.text(`${moment().hour(schedule.hour).format("h")}${schedule.meridian}`)
        hourRow.append(hourBlock);

        var textArea = $("<textarea>").attr({
            "class": `col-md-10 description ${getTextAreaClass(schedule.hour)}`
        });
        
        textArea.val(schedule.note)

        hourRow.append(textArea);

        var saveButton = $("<button>").attr({
            "class": "btn col-md-1 saveBtn"
        })

        hourRow.append(saveButton)

        var icon = $("<i>").attr({
            "class": "fas fa-save"
        })

        saveButton.append(icon)

        $(".container").append(hourRow);

        saveButton.on("click", function () {

            let storedPlan = localStorage.getItem(currentDayShortForm) || {};

            if (storedPlan) {
            
            storedPlan[schedule.hour] = textArea.val();

            localStorage.setItem(`dailyPlanner-${currentDayShortForm}`, JSON.stringify(storedPlan));

            }

        });
        

        
           
        
    });
};

displayPlanner();
