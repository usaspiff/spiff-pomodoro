$(document).ready(function() {
    var timePause = 2;
    var timeWork = 2;

    //Default starting status
    $("#pauseDisplay").html(timePause);
    $("#workDisplay").html(timeWork);

    //Adjusting Pause time with + and - buttons

    $(".btn-defaultP").on("click", function(pauseTime) {
        if (this.id === "pausePlus") {
            timePause++;
            $("#pauseDisplay").html(timePause);
        } else if (this.id === "pauseMinus" && timePause > 0) {
            timePause--;
            $("#pauseDisplay").html(timePause);
        } else if (this.id === "pauseMinus" && timePause <= 0) {
            console.log("Can't travel back in time yet!");
        }
        console.log("Pause time is " + timePause + " minute(s)");
    });

    //Adjusting Work time with + and - buttons
    $(".btn-defaultW").on("click", function(workTime) {
        if (this.id === "workPlus") {
            timeWork++;
            $("#workDisplay").html(timeWork);
        } else if (this.id === "workMinus" && timeWork > 0) {
            timeWork--;
            $("#workDisplay").html(timeWork);
        } else if (this.id === "workMinus" && timeWork <= 0) {
            console.log("Can't travel back in time yet!");
        }
        console.log("Work time is " + timeWork + " minute(s)");
    });

    //Clock countdown function
    $("#goClock").click(function() {
        var counter = setInterval(workTimer, 1000);
        var count = timeWork * 60;
        var pauseCount = timePause * 60;
        //console.log(count);

        function workTimer() {
            //changes buttons status and display
            $("#settingsP, #settingsW, #goClock").hide();
            $("#mainHeader").html("Work time left:");
            count -= 1;
            if (count === 0) {
                //add buzzer
                clearInterval(counter);

                var pauseCounter = setInterval(pauseTimer, 1000);
            }

            if (count % 60 >= 10) {
                $("#mainDisplayTime").html(Math.floor(count / 60) + ":" + count % 60);
            } else {
                $("#mainDisplayTime").html(Math.floor(count / 60) + ":" + "0" + count % 60);
            }

            function pauseTimer() {
                //console.log(count);
                $("#mainHeader").html("Pause time left:");

                pauseCount -= 1;
                if (pauseCount === 0) {
                    //add buzzer
                    clearInterval(pauseCounter);
                    $("#settingsP, #settingsW, #goClock").show();
                    $("#mainHeader").html("Clock");
                }

                if (pauseCount % 60 >= 10) {
                    $("#mainDisplayTime").html(Math.floor(pauseCount / 60) + ":" + pauseCount % 60);
                } else {
                    $("#mainDisplayTime").html(Math.floor(pauseCount / 60) + ":" + "0" + pauseCount % 60);
                }

            }
        }
    });

});
