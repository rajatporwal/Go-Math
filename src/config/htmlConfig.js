const HTML = [
    {
        heading: "HTML",
        pathname: "/html",
        children: [
            {
                title: "API’s in HTML5",
                keywords: "API’s in HTML5",
                id: "apis_in_html5",
                list: [
                    'Geolocation API',
                    'Drag and Drop API',
                    'Web Storage API',
                    'Web Worker API'
                ]
            },
            {
                title: "Geolocation API",
                keywords: "Geolocation API",
                id: "geolocation_api",
                description: `The Geolocation API is used to get the current location of the user or the page visitor. It will show the user’s location only if the user allows it to do so, as it compromises the security and privacy of the user.
            <br /><br />
            Methods available in Geolocation API:`,
                list: [
                    `<b>getCurrentPosition() Method: The getCurrentPosition() method returns an object with properties such as latitude, longitude, accuracy, altitude etc.`,
                    `<b>watchPosition() Method</b>: This method will return the current position of the user as well as the updated location when the position of the user changes or the user travels from one location to another location.`,
                    `<b>clearWatch() Method</b>: This method will stop the watchPosition() method to not tracing the user anymore.`,
                ],
                code: [
                    {
                        title: '',
                        code: `<script>
    var x = document.getElementById("demo");
    function getLocation() {
        if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }

    function showPosition(position) {
        x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
    }
</script>`,
                    }],
            },
            {
                title: "Drag and Drop API",
                keywords: "Drag and Drop API",
                id: "drag_and_drop_api",
                description: `To use drag and drop first you have to make the element draggable as shown below:`,
                list: [
                    `make an element draggable, set the draggable attribute to true`,
                    'What to Drag - ondragstart and setData()',
                    'Where to Drop - ondragover',
                    'Do the Drop - ondrop'
                ],
                code: [{
                    title: '',
                    code: `<html>
<head>
    <script>
        function allowDrop(ev) {
        ev.preventDefault();
        }

        function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
        }

        function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
        }
    </script>
</head>
<body>
    <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
    <img id="drag1" src="img_logo.gif" draggable="true" ondragstart="drag(event)" width="336" height="69">
</body>
</html>
`
                }]
            },
            {
                title: "Web Storage API",
                keywords: "Web Storage API",
                id: "web_storage_api",
                description: `Early, the data was stored in the form of cookies that can store a small amount of data and can-not transferred further to the server. But, HTML5 introduces us to the Web Storage API that can store large data as compared to cookies and can be transferred to the server. Using this API for storing data is more secure than using cookies.
                <br /><br />
                Web storage API provides us with two objects to work with:`,
                list: [
                    `window.sessionStorage`,
                    `window.localStorage`
                ]
            },
            {
                title: "Web Worker API",
                keywords: "Web Worker API",
                id: "web_worker_api",
                description: `Generally, when the JavaScript is uploading for the page, the page got stuck until uploading gets finished. The Web worker API helps us to upload the JavaScript without affecting the performance of the page. It helps to run JavaScript run in the background independent of other scripts.`,
                code: [{
                    title: '',
                    code: `<body>
    <div id="container">
        <h1>Hey Geek,</h1>
        <h2 id="heading"></h2>
        <div id="btnDiv">
            <button class="btn" onclick="getJS()">
                Start executing JS
            </button>
            <button class="btn" onclick="remJS()">
                Stop executing JS
            </button>
        </div>
    </div>
    
    <script>
        var myWorker;
        var head = document.getElementById('heading');
        function getJS() {
    
            // Below condition will checks for
            // the browser support.
            if (typeof (Worker) !== "undefined") {
                    
                // The condition below will checks for
                // existence of the worker
                if (typeof (myWorker) == "undefined") {
                    myWorker = new Worker("myScript.js");
                    // Above line Will create a worker that will
                    // execute the code of myscript.js file
                }
    
                // onmessage event triggers a function
                // with the data stored in external js file
                myWorker.onmessage = function (props) {
                    head.innerText = props.data;
                }
            }
            else {
                head.innerText =
                    "Your browser does not support web storage API.";
            }
        }
    
        function remJS() {
    
            // Terminate() will terminate the current worker
            myWorker.terminate();
            myWorker = undefined;
        }
    </script>
</body>`
                }]
            }
        ]
    }
];

export default HTML;
