// Widget for user-eye-friendly disabling of Google Analytics

document.addEventListener('DOMContentLoaded', function () {


    var notactive = true;
    document.getElementsByClassName("ga-secra-widget")[0].onclick = function (e) {
        e.preventDefault();
        if (notactive) {
            var text = "";
            //Check if custom text is set
            if (this.hasAttribute("data-text")) {
                text = this.getAttribute("data-text");
            }

            notactive = false;
            //create container elements
            var cont = document.createElement("div");
            cont.className = "ga-secra-widget-cont";
            cont.style.width = "60%";
            cont.style.height = "auto";
            cont.style.position = "fixed";
            cont.style.padding = "20px";
            cont.style.zIndex = "100000";
            cont.style.textAlign = "center";
            cont.style.fontFamily = "Arial";
            cont.style.left = "20%";
            cont.style.top = "20%";

            document.body.appendChild(cont);
            document.onkeydown = function (e) {
                if (e.keyCode == 27) {
                    document.body.removeChild(cont);
                    notactive = true;
                }
            };

            ///////////////////////////////////////////////////
            // TEMPLATES
            var wishtodeactivate = "" +

                "" +
                "<h1>Do you really want to disable Google Analytics?</h1>" +
                "<div>" + text + "</div>" +
                "<br>" +
                "<button class=\"yes_button\" id=\"yes\">Yes</button>" +
                "<button class=\"no_button\" id=\"no\">No</button>" +
                "" +
                "";


            var isDeactivated = "" +
                "" +
                "<h1>Google Analytics has been deactivated!</h1>" +
                "<div></div>" +
                "<br>" +

                "<button class=\"ok_button\" id=\"ok\">OK</button>" +
                "" +
                "";

            var isStillActivated = "" +
                "" +
                "<h1>Google Analytics is still active!</h1>" +
                "<div></div>" +
                "<br>" +

                "<button class=\"ok_button\" id=\"ok\">OK</button>" +
                "" +
                "";

            var alreadyDeactivated = "" +
                "" +
                "<h1>Google Analytics has already been deactivated!</h1>" +
                "<div></div>" +
                "<br>" +

                "<button class=\"ok_button\" id=\"ok\">OK</button>" +
                "" +
                "";
            //////////////////////////////////////////////////////
            //check if Google Analytics disable Cookie is set
            if (document.cookie.search(/\bga-disable\S*=/) < 0) {
                // is not set so show dialog to deactivate
                cont.innerHTML = wishtodeactivate;


                document.getElementById("yes").onclick = function () {
                    cont.className = "ga-secra-widget-cont deactivated";
                    //using the native googl Analytics Optout Function to deactivate
                    gaOptout();
                    //show success dialog
                    cont.innerHTML = isDeactivated;

                    document.getElementById("ok").onclick = function () {

                        document.body.removeChild(cont);
                        notactive = true;
                    };
                };
                document.getElementById("no").onclick = function () {
                    cont.className = "ga-secra-widget-cont activated";
                    //show dialog "still activated"
                    cont.innerHTML = isStillActivated;

                    document.getElementById("ok").onclick = function () {

                        document.body.removeChild(cont);
                        notactive = true;
                    };
                };

            } else {

                // is set so tell the user that it is already deactivated
                cont.className = "ga-secra-widget-cont already";
                cont.innerHTML = alreadyDeactivated;
                document.getElementById("ok").onclick = function () {

                    document.body.removeChild(cont);
                    notactive = true;
                };
            }
        }

    };
});
