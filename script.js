let historyList = [];
// Add event to textarea


function addEvent(eventName) {

    let textarea = document.getElementById("events");

    if (textarea.value.trim() === "") {
        textarea.value = eventName;
    } else {
        textarea.value += "\n" + eventName;
    }
}

// Clear textarea
function clearEvents() {

    document.getElementById("events").value = "";

}


// Analyze events
async function analyzeEvents() {

    const events = document.getElementById("events").value;

    if (events.trim() === "") {
        alert("Please enter user events.");
        return;
    }

    // Loading state
    document.getElementById("state").innerHTML = "Analyzing...";
    document.getElementById("evidence").innerHTML = "Please wait...";
    document.getElementById("recommendation").innerHTML = "Please wait...";
    document.getElementById("ai_response").innerHTML = "Generating recommendation...";
    document.getElementById("ai_response").innerHTML="⏳ AI is analyzing...";
    try {

        const response = await fetch("/analyze", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                events: events
            })

        });

        const data = await response.json();

        // Shopper State
        document.getElementById("state").innerHTML = data.state;

        // Confidence
        const confidence = parseInt(data.confidence);

        const bar = document.getElementById("confidenceBar");

        bar.style.width = confidence + "%";
        bar.innerHTML = data.confidence;

        // Change progress bar color
        if (confidence >= 90) {

           if(confidence>=90){

bar.className="progress-bar bg-success";

}

else if(confidence>=70){

bar.className="progress-bar bg-warning";

}

else{

bar.className="progress-bar bg-danger";

}

        } else if (confidence >= 70) {

            bar.className = "progress-bar bg-warning";

        } else {

            bar.className = "progress-bar bg-danger";

        }

        // Change badge color
        const badge = document.getElementById("state");

        if (data.state === "Browser") {

            badge.className = "badge bg-secondary";

        } else if (data.state === "Comparer") {

            badge.className = "badge bg-info";

        } else if (data.state === "Discount Seeker") {

            badge.className = "badge bg-warning text-dark";

        } else if (data.state === "Cart Abandoner") {

            badge.className = "badge bg-danger";

        } else {

            badge.className = "badge bg-success";

        }

        // Results
        document.getElementById("evidence").innerHTML = data.evidence;
        document.getElementById("recommendation").innerHTML = data.recommendation;
        document.getElementById("ai_response").innerHTML = data.ai_response;
        historyList.unshift(data.state);

if(historyList.length>5){

historyList.pop();

}

let html="";

historyList.forEach(function(item){

html+="<li>"+item+"</li>";

});

document.getElementById("history").innerHTML=html;

    }

    catch (error) {

        console.error(error);

        document.getElementById("state").innerHTML = "Error";
        document.getElementById("evidence").innerHTML = "Something went wrong.";
        document.getElementById("recommendation").innerHTML = "-";
        document.getElementById("ai_response").innerHTML = "Unable to contact the server.";

    }

}
function downloadReport(){

let report="";

report+="State : "+document.getElementById("state").innerText+"\n\n";

report+="Confidence : "+document.getElementById("confidenceBar").innerText+"\n\n";

report+="Evidence :\n"+document.getElementById("evidence").innerText+"\n\n";

report+="Recommendation :\n"+document.getElementById("recommendation").innerText+"\n\n";

report+="AI Recommendation :\n"+document.getElementById("ai_response").innerText;

const blob=new Blob([report]);

const link=document.createElement("a");

link.href=URL.createObjectURL(blob);

link.download="Shopper_Report.txt";

link.click();

}