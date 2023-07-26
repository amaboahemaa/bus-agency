let origin, destination;

const bookings = [
    {
        origin: {
            place: origin,
            time: '10:40am',
        },
        destination: {
            place: destination,
            time: '11:30am',
        },
        date: '23/04/23',
        stc: '150',
        vip: '130'
    },
    {
        origin: {
            place: origin,
            time: '10:40am',
        },
        destination: {
            place: destination,
            time: '11:30am',
        },
        date: '23/04/23',
        stc: '150',
        vip: '130'
    },
    {
        origin: {
            place: origin,
            time: '10:40am',
        },
        destination: {
            place: destination,
            time: '11:30am',
        },
        date: '23/04/23',
        stc: '150',
        vip: '130'
    },
    {
        origin: {
            place: origin,
            time: '10:40am',
        },
        destination: {
            place: destination,
            time: '11:30am',
        },
        date: '23/04/23',
        stc: '150',
        vip: '130'
    },
]

const getRoutes = () => {
    origin = document.getElementById("origin").value;
    destination = document.getElementById("destination").value;
    departure = document.getElementById("form-date").value;
    localStorage.setItem("city1", origin);
    localStorage.setItem("city2", destination);
    localStorage.setItem("date", departure);
}

document.addEventListener("click", (e) => {
    if (e.target.id === "form-submit-btn") {
        getRoutes();
    }
})

document.addEventListener("click", (e) => {
    if (e.target.id === "search-btn") {
        origin = localStorage.getItem("city1");
        destination = localStorage.getItem("city2");

        const routes = bookings.map((route) => ({
            origin: {
                place: origin,
                time: '10:40am'
            },
            destination: {
                place: destination,
                time: '11.30am'
            },
            date: '23/03/22',
            stc: '150',
            vip: '130'
        }))
        console.log(routes)

        const routeNumber = document.getElementById('no-of-routes');

        routeNumber.innerHTML = `Number of Routes: ${routes.length}`;

        routes.forEach((route) => {
            document.getElementById('buses').innerHTML += `
                <div class="route-info-container">
                    <div class="bus-info-container">
                        <div class="origin-container">
                            <p>${route.origin.time}</p>
                            <p>${route.origin.place}</p>
                            <p>${route.date}</p>
                            <p>flight info</p>
                        </div>
                        <div class="distance-container">
                            <i class="fa fa-bus" aria-hidden="true"></i>
                            ----------------------
                            <i class="fa fa-bus" aria-hidden="true"></i>
                        </div>
                        <div class="destination-container">
                            <p>${route.origin.time}</p>
                            <p>${route.destination.place}</p>
                            <p>${route.date}</p>
                        </div>
                    </div>
                    <div class="VIP-container">
                        ${route.vip}
                    </div>
                    <div class="STC-container">
                        ${route.stc}
                    </div>
                </div>
            `
        })
    }
})