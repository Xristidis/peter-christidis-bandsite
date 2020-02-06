
// I wrote in capitals to  make it easier to read. 
// Thanks!

let showContent = [
  {
    date: "Mon Dec 17 2018",
    venue: "Ronald Lane",
    location: "San Francisco, CA"
  },
  {
    date: "Tue Jul 18 2019",
    venue: "Pier 3 East",
    location: "San Francisco, CA"
  },
  {
    date: "Fri Jul 22 2019",
    venue: "View Lounge",
    location: "San Francisco, CA"
  },
  {
    date: "Sat Aug 12 2019",
    venue: "Hyatt Agency",
    location: "San Francisco, CA"
  },
  {
    date: "Fri Sep 05 2019",
    venue: "Moscow Center",
    location: "San Francisco, CA"
  },
  {
    date: "Wed Aug 11 2019",
    venue: "Pres Club",
    location: "San Francisco, CA"
  }
];

const loadShows = () => {
  // TOUR PARENT ELEMENT
  const tourParent = document.querySelector(".tour");
  // TOUR TABLE
  let tourTable = document.createElement("div");
  tourTable.classList.add("tour__table");
  tourParent.appendChild(tourTable);
  // TOUR HEADING
  let tourHeading = document.createElement("H2");
  tourHeading.classList.add("tour__heading");
  tourTable.appendChild(tourHeading);
  tourHeading.innerText = "Shows";
  // UPON PAGE LOAD, JAVASCRIPT WILL LOAD THE FOLLOWING ABOVE

  // BELOW, THE FOREACH LOOP WILL KEEP CREATING NEW ELEMENTS UNTIL THE ARRAY OF OBJECTS ENDS. 
  showContent.forEach(showContentObj => {
    // TOUR WRAPPER
  let tourWrapper = document.createElement("div");
  tourWrapper.classList.add("tour__wrapper");
  tourWrapper.classList.add("main__tour");
  tourTable.appendChild(tourWrapper);

    let tourSectionDate = document.createElement("div");
    tourSectionDate.classList.add("tour__section");
    tourSectionDate.classList.add("tour__date");
    tourWrapper.appendChild(tourSectionDate);
    // TOUR DATE
    let tourDate = document.createElement("div");
    tourDate.classList.add("date__input");
    tourDate.classList.add("main__date");
    tourSectionDate.appendChild(tourDate);
    tourDate.innerText = "DATE";

    // TOUR DATE TITLE
    let tourDateInfo = document.createElement("div");
    tourDateInfo.classList.add("date__title");
    tourSectionDate.appendChild(tourDateInfo);
    tourDateInfo.innerText = showContentObj.date;

    let tourSectionVenue = document.createElement("div");
    tourSectionVenue.classList.add("tour__section");
    tourSectionVenue.classList.add("tour__venue");
    tourWrapper.appendChild(tourSectionVenue);

    let tourVenue = document.createElement("div");
    tourVenue.classList.add("venue__input");
    tourVenue.classList.add("main__venue");
    tourSectionVenue.appendChild(tourVenue);
    tourVenue.innerText = "VENUE";

    // TOUR VENUE TITLE
    let tourVenueInfo = document.createElement("div");
    tourVenueInfo.classList.add("venue__title");
    tourSectionVenue.appendChild(tourVenueInfo);
    tourVenueInfo.innerText = showContentObj.venue;

    let tourSectionLocation = document.createElement("div");
    tourSectionLocation.classList.add("tour__section");
    tourSectionLocation.classList.add("tour__location");
    tourWrapper.appendChild(tourSectionLocation);

    let tourLocation = document.createElement("div");
    tourLocation.classList.add("location__input");
    tourLocation.classList.add("main__location");
    tourSectionLocation.appendChild(tourLocation);
    tourLocation.innerText = "LOCATION";

    let tourLocationInfo = document.createElement("div");
    tourLocationInfo.classList.add("venue__title");
    tourSectionLocation.appendChild(tourLocationInfo);
    tourLocationInfo.innerText = showContentObj.location;

    let tourButton = document.createElement("div");
    tourButton.classList.add("tour__button");
    tourWrapper.appendChild(tourButton);
    tourButton.innerText = "BUY TICKETS";
  });
};

window.onload = () => {
  loadShows();
};
// CALLS THE FUNCTION TO LOAD THE ELEMENTS WHEN THE WINDOW LOADS, 

// I know that the headings are in every block. My priority was making sure I implemented the javascript correctly. I realised that my element headings were in my block too late on and had no time to remove them.