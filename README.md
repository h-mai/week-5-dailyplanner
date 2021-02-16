# Daily Planner 

![Daily Planner](https://github.com/h-mai/week5dailyplanner/blob/main/Assets/Work%20Day%20Scheduler.gif)

The Daily Planner will allow the user to plan their day by the hour and to store future plans on the browser. This application employs the use of jQuery to create dynamic HTML, moment.js to call the current date and time, and Bootstrap to style. 

# Deployment Links:

Deployed github IO: https://h-mai.github.io/week5dailyplanner/index.html

GitHub Repository: https://github.com/h-mai/week5dailyplanner.git

# User Story: 

AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

# Functionality and Features: 

On the index page the page will display a header with the current date and time.

The planner's parameters are based on a typical 9am-5pm day. In which there are 9 rows representing each hour for the user to type in an input. 

Depending on on when the user is using this app will determine whether these rows will display as "Past" (grey rows) "Present" (red rows), and "Future" (green rows) prompting the user to plan ahead, either for the present hour or in the future.

When the user clicks onto their chosen hour, they are able to input their plans for that hour. 

Then they are able to save their plans. This will then be saved onto local storage.

When the user refreshes the page, the plan will persist on the local storage and also on the row for present and future plans. Any past plans will be deleted off local storage and the row. The user is also able to overwrite their plans if needed, in which case any existing data stored will be replaced with the user's changes. 





