function getResponse() {
    document.getElementById("response").innerHTML = getMessage();
    document.getElementById("query").value = "";
}

function getMessage() {
    var message = document.getElementById("chat-bot").elements["query"].value.toLowerCase();
    if (message.includes("broken")) {
        return "Well, you know, all software has some bugs. But our software engineers" +
            "are working very hard to fix them. Please see our contact page for more information " +
            "on how to report a bug";
    }
    if (message.includes("drone")) {
        return "Are you looking to purchase one of our services or have a query about an" +
        "existing contract?";
    }
    if (message.includes("cost") || (message.includes("quote"))) {
        return "We have a range of packages available to suit all business needs" +
            "if you call one of our sales advisors, they will be more than happy to" +
            "assist you. Please see out contact page for more information."
    }
    if (message.includes("expensive")) {
        return "The cost of our product is quite competitive. Have you looked around" +
            "and really compared our features?"
    }
    if (message.includes("help")) {
        return "We are always happy to help. Please see out contact page for more information."
    }
    else{
        return getDefaultResponse();
    }
}

function getDefaultResponse() {
    const responses = ["That sounds odd. Could you describe that problem in more detail?",
        "I need a bit more information on that.",
        "I think you may need to speak to one of our specialist advisors" +
        " Please see our contact page for more details."]
    let randomResponseNumber = Math.floor((Math.random() * responses.length));
    return responses[randomResponseNumber];
}