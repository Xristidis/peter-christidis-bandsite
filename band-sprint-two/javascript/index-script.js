let commContent = [
    {
        name: "Michael Lyons",
        date: Date.parse('12/18/2018'),
        // PARSED THE DATE STRING INTO A FUNCTION THAT TURNED IT INTO MILSECONDS 
        content: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
    },
    {
        name: "Gary Wong",
        date: Date.parse('12/12/2018'),
        content: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
    },
    {
        name: "Theodore Duncan",
        date: Date.parse('11/15/2018'),
        
        content: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"
    }
];
// https://stackoverflow.com/questions/3177836/how-to-format-time-since-xxx-e-g-4-minutes-ago-similar-to-stack-exchange-site

// USED THIS FUNCTION RETRIEVED FROM ABOVE TO HELP ME CONVERT MY JAVASCRIPT TIME FORMAT INTO READABLE TIME FORMAT.
function timeSince(date) {

    var seconds = Math.floor((new Date() - date) / 1000);
  
    var interval = Math.floor(seconds / 31536000);
  
    if (interval > 1) {
      return interval + " years ago";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + " months ago";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + " days ago";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + " hours ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
  }
  var aDay = 24*60*60*1000;
  console.log(timeSince(new Date(Date.now()-aDay)));
  console.log(timeSince(new Date(Date.now()-aDay*2)));
/// COMMENTS SECTION
// COMMENTS HEADER
// COMMENTS WRAPPER
    // COMMENTS FORM
    // COMMENTS__PAST-WRAPPER
    const loadComments = () => {
    const commPastParent = document.querySelector(".comments__past-wrapper");

    commContent.forEach(commContentObj => {
        // COMMENTS PAST SHELL
      
        let commPast = document.createElement('div');
        commPast.classList.add("comments__past");
        commPastParent.appendChild(commPast);
            // COMMENTS PAST PHOTO
            let commPastPhoto = document.createElement('div');
            commPastPhoto.classList.add("comments__past-photo");
            commPast.appendChild(commPastPhoto);
            // COMMENTS INFO 
            let commInfo = document.createElement('div');
            commInfo.classList.add("comments__info");
            commPast.appendChild(commInfo);
                // COMMENTS NAME
                let commName = document.createElement('div');
                commName.classList.add("comments__name");
                commInfo.appendChild(commName);
                commName.innerText = commContentObj.name;
                // COMMENTS DATE
                let commDate = document.createElement('div');
                commDate.classList.add("comments__date");
                commInfo.appendChild(commDate);
                commDate.innerText = timeSince(commContentObj.date);
                // COMMENTS CONTENT
                let commContent = document.createElement('div');
                commContent.classList.add("comments__past-comment");
                commInfo.appendChild(commContent);
                commContent.innerText = commContentObj.content;
            });
        };
        
        window.onload = () => {
        loadComments();
        };
        
        const form = document.querySelector('form');
        // SETS 'FORM' AS THE ELEMENT FOR THE LISTENER
        form.addEventListener('submit', (eventObj) => {
            eventObj.preventDefault();
            let newCommObject = {};
            newCommObject.name = eventObj.target.name.value;
            // CREATES A TIME STAMP VALUE FOR WHEN THE SUBMIT BUTTON IS PRESSED
            newCommObject.date = Date.now();
            newCommObject.content = eventObj.target.comment.value;
            
            commContent.unshift(newCommObject);
            console.log(commContent);
            clearAll();
            loadComments();
        });

        function clearAll() {
            //CREATED A PARENT
            const newparent = document.querySelector(".comments__past-wrapper");
            // CREATED A CHILD
            let child = newparent.getElementsByClassName("comments__past");
            // RAN A LOOP THE LENGTH OF ALL THE CURRENT COMMENTS. ON EACH ITERATION OF THE LOOP IT WOULD REMOVE THE CHILD ELEMENT (COMMENT).
            for (let i = child.length; i > 0; i--) {
                newparent.removeChild(child[i - 1]);
                }
            };
            // RAN OUT OF TIME AND COULD NOT SEEM TO TURN MY FOR LOOP HERE INTO A FOREACH FUNCTION TO DELETE EACH COMMENT IN MY COMMENT SECTION. 
        
        // CLEARS AND RESETS INPUT 
        clearAll();





// function removeElement(elementId) {
//     // Removes an element from the document
//     var element = document.getElementById(elementId);
//     element.parentNode.removeChild(element);
// }

// var list = document.getElementById("myList");   
// // Get the <ul> element with id="myList"

// list.removeChild(list.childNodes[0]);           
// // Remove <ul>'s first child node (index 0)