document.addEventListener('DOMContentLoaded', function() {
    const eventForm = document.getElementById('eventForm');

    if (eventForm) {
        eventForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const eventName = document.getElementById('eventName').value;
            const organizerName = document.getElementById('organizerName').value;
            const eventDate = document.getElementById('eventDate').value;
            const venue = document.getElementById('venue').value;
            const eventTime = document.getElementById('eventTime').value;
            const registrationEnd = document.getElementById('registrationEnd').value;
            const registrationLink = document.getElementById('registrationLink').value;

            let events = JSON.parse(localStorage.getItem('events')) || [];
            events.push({
                eventName,
                organizerName,
                eventDate,
                venue,
                eventTime,
                registrationEnd,
                registrationLink
            });
            localStorage.setItem('events', JSON.stringify(events));

            eventForm.reset();

            window.location.href = 'events.html';
        });
    }

    const eventsList = document.getElementById('eventsList');
    if (eventsList) {
        let events = JSON.parse(localStorage.getItem('events')) || [];

        events.forEach(function(event) {
            const eventDiv = document.createElement('div');
            eventDiv.className = 'event-item';
            eventDiv.innerHTML = `
                <h2>${event.eventName}</h2>
                <p><strong>Organizer:</strong> ${event.organizerName}</p>
                <p><strong>Date:</strong> ${event.eventDate}</p>
                <p><strong>Venue:</strong> ${event.venue}</p>
                <p><strong>Time:</strong> ${event.eventTime}</p>
                <p><strong>Registration Ends:</strong> ${event.registrationEnd}</p>
                <p><strong>Registration Link:</strong> <a href="${event.registrationLink}" target="_blank">Register Here</a></p>
            `;
            eventsList.appendChild(eventDiv);
        });
    }

    function openTab(evt, tabName) {
        var i, tabcontent, tablinks;

        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
    }

    document.getElementsByClassName("tablinks")[0].click();

    
});
