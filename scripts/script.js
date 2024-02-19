// buy tickets btn navigation 
document.getElementById('buy-ticket-btn').addEventListener('click', function () {
    const paribahan = document.getElementById('paribahan');
    paribahan.scrollIntoView({ 
        
     });
})

document.getElementById('buyBus-ticket-btn').addEventListener('click', function(){
    const ticket = document.getElementById('ticket');
    ticket.scrollIntoView({ 
        
    })
})


// seats click function 
const allSeats = document.getElementsByClassName('seat-btn');


for (let seat of allSeats) {
    seat.addEventListener('click', function (e) {
        const restSeats = getElementNumberId('rest-seat');
        const selectedSeatsCount = getElementNumberId('selected-seat-count');
        const seatName = e.target.innerText;


        // set selected total seats 
        const newSelectedSeats = selectedSeatsCount + 1;
        setElement('selected-seat-count', newSelectedSeats)

        // maximum seat control control 
        const totalSelectSeat = getElementNumberId('selected-seat-count');
        if (totalSelectSeat > 4) {
            alert('You are able to buy maximum 4 tickets!')
            setElement('selected-seat-count', newSelectedSeats - 1);
            return;
        }



        // set rest seats
        const newRestSeats = restSeats - 1;
        setElement('rest-seat', newRestSeats);

        // set selected-Bg-color 
        const selectedBtn = e.target;
        selectedBtn.classList.add('bg-primaryColor');
        selectedBtn.classList.add('text-white');
        selectedBtn.classList.add('pointer-events-none');

        // seat details set and create function call
        seatDetails(seatName);

        // total price calculation
        totalPriceCalculation();

    })
}

// total price calculation 
function totalPriceCalculation() {
    const previousTotalPrice = getElementNumberId('total-price');
    const perSeatPrice = getElementNumberId('per-seat-price');
    const newTotalPrice = previousTotalPrice + perSeatPrice;
    setElement('total-price', newTotalPrice);
    setElement('grand-total', newTotalPrice);
}


// coupon calculation -----

document.getElementById('coupon-btn').addEventListener('click', function () {
    const discountContainer = document.getElementById('discount-total');
    const couponCodeFieldContainer = document.getElementById('coupon-container');
    const couponField = document.getElementById('coupon-field');
    const couponCode = couponField.value;
    const totalPrice = getElementNumberId('total-price');

    if (couponCode === 'NEW15') {
        const discount = totalPrice * 15 / 100;
        const grandPrice = totalPrice - discount;
        setElement('grand-total', grandPrice);
        discountContainer.innerHTML = `
                     <p>Discount</p>
                     <p>BDT <span>${discount}</span></p>
            `
        couponCodeFieldContainer.classList.add('hidden');
    }
    else if (couponCode === 'Couple 20') {
        const discount = totalPrice * 20 / 100;
        const grandPrice = totalPrice - discount;
        setElement('grand-total', grandPrice);
        discountContainer.innerHTML = `
                     <p>Discount Total</p>
                     <p>BDT <span>${discount}</span></p>
            `
        couponCodeFieldContainer.classList.add('hidden');

    }
    else {
        alert('Invalid Coupon !')
    }
})


// seat details create function
function seatDetails(seatName) {
    const seatDetailsContainer = document.getElementById('seat-details-container');
    const div = document.createElement('div');
    div.classList.add('flex');
    div.classList.add('justify-between');
    div.classList.add('items-center');

    div.innerHTML = `
            <p>${seatName}</p>
            <p>Economy</p>
            <p>550</p>         
        `
    seatDetailsContainer.appendChild(div);
}



// if i want a element with convert in number 
function getElementNumberId(id) {
    const element = document.getElementById(id);
    const elementCount = parseInt(element.innerText);
    return elementCount;
}


// set element 
function setElement(elementId, value) {
    const restSeatsBox = document.getElementById(elementId);
    restSeatsBox.innerText = value;
}