const searchBtn = document.getElementById('search-btn');

const bookings = [
    {
        origin: {
            place: 'Accra',
            time: '10:40am',
        },
        destination: {
            place: 'Kumasi',
            time: '11:30am',
        },
        date: '23/04/23',
        stc: '150',
        vip: '130'
    },
    {
        origin: {
            place: 'Accra',
            time: '10:40am',
        },
        destination: {
            place: 'Kumasi',
            time: '11:30am',
        },
        date: '23/04/23',
        stc: '150',
        vip: '130'
    },
    {
        origin: {
            place: 'Accra',
            time: '10:40am',
        },
        destination: {
            place: 'Kumasi',
            time: '11:30am',
        },
        date: '23/04/23',
        stc: '150',
        vip: '130'
    },
    {
        origin: {
            place: 'Accra',
            time: '10:40am',
        },
        destination: {
            place: 'Kumasi',
            time: '11:30am',
        },
        date: '23/04/23',
        stc: '150',
        vip: '130'
    },
];

origin = localStorage.getItem("city1");
destination = localStorage.getItem("city2");
departure = localStorage.getItem("date");

localStorage.removeItem('city1');
localStorage.removeItem('city2');

const routes = bookings.map((route) => ({
    origin: {
        place: origin,
        time: '10:40am',
    },
    destination: {
        place: destination,
        time: '14.30pm',
    },
    date: departure,
    stc: '150',
    vip: '130'
}))

const routeNumber = document.getElementById('no-of-routes');
routeNumber.innerHTML = `Number of Routes: ${routes.length}`;

routes.forEach((route) => {
    document.getElementById('buses').innerHTML += `
        <div class="booking-info-container">
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
                    <p>${route.destination.time}</p>
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

const renderSeats = (i) => {
    document.getElementById("seats-container").innerHTML += `
        <div class="row-container">
            <div class="seat-img window">
                <img src="../img/seat.png" />
            </div>
            <div class="seat-img window">
                <img src="../img/seat.png" />
            </div>
            <div>${i}</div>
            <div class="seat-img window">
                <img src="../img/seat.png" />
            </div>
            <div class="seat-img window">
                <img src="../img/seat.png" />
            </div>
        </div>
    `
}

const renderSeatInfo = () => {
    document.getElementById("seats-info").innerHTML = `
        <p>Seat Information</p>
        <div>
            <div>
                <div class="price-container">
                    <img src="../img/seat.png" />
                    <div>
                        <p>Window Side Seats</p>
                        <span id="price-text">5.00 GHS</span>
                    </div>
                </div>
                <button type="button" id="continue-btn">Reserve</button>
            </div>
        </div>
    `
}

const generateCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    const length = 5;
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      code += characters.charAt(randomIndex);
    }
  
    return code;
}

const renderSignUpForm = () => {
    const code = generateCode();
    document.getElementById("signup-modal").innerHTML += `
        <div class="sign-up">
            <h1>Reserve Your Spot</h1>
            <h4>It only takes a few minutes</h4>
            <form
                action="https://formspree.io/f/mqkvaobj"
                method="POST"
            >
                <label>
                    Your name:
                    <input type="text" name="name">
                </label>
                <label>
                    Your email:
                    <input type="email" name="email">
                </label>
                <label>
                    Your code:
                    <input type="text" name="code" id="code-input" >
                </label>
                <button type="submit" id="comfirm-reservation-btn">Confirm</button>
            </form>
            <div class="warning-text">
                <p>
                    Please keep the code and arrive 10 minutes before departure time!
                </p>
            </div>
        </div>
    `
    document.getElementById("code-input").value = code;
}

document.addEventListener("click", (e) => {
    if (e.target.className === "VIP-container" || e.target.className === "STC-container") {
        document.getElementById("modal").style.display = "block";
        document.getElementById("overlay").style.display = "block";
        for (let i=1; i<=8; i++) {
        if (document.getElementById("seats-info").children.length === 0) {
            renderSeats(i);
        }
        }
        renderSeatInfo();
    }
});

document.addEventListener("click", (e) => {
    if (e.target.id === "modal-close-btn") {
        document.getElementById("overlay").style.display = "none";
        document.getElementById("modal").style.display = "none";
    }
})

document.addEventListener("click", (e) => {
    if (e.target.className === "seat-img") {
        localStorage.setItem("window-price", 5);
    }
})

document.addEventListener("click", (e) => {
    if (e.target.id === "continue-btn") {
        document.getElementById("modal").style.display = "none";
        document.getElementById("signup-modal").style.display = "block";
        renderSignUpForm()
    }
})

document.addEventListener("click", (e) => {
    if (e.target.id === "signup-close-btn") {
        document.getElementById("overlay").style.display = "none";
        document.getElementById("signup-modal").style.display = "none";
    }
})