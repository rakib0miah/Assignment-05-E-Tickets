
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


 
const allSeats = document.getElementsByClassName('seat-btn');


for (let seat of allSeats) {
    seat.addEventListener('click', function (e) {
        const restSeats = getElementNumberId('rest-seat');
        const selectedSeatsCount = getElementNumberId('selected-seat-count');
        const seatName = e.target.innerText;


        const newSelectedSeats = selectedSeatsCount + 1;
        setElement('selected-seat-count', newSelectedSeats)

  
        const totalSelectSeat = getElementNumberId('selected-seat-count');
        if (totalSelectSeat > 4) {
            alert('You are able to buy maximum 4 tickets!')
            setElement('selected-seat-count', newSelectedSeats - 1);
            return;
        }



        const newRestSeats = restSeats - 1;
        setElement('rest-seat', newRestSeats);
 
        const selectedBtn = e.target;
        selectedBtn.classList.add('bg-primaryColor');
        selectedBtn.classList.add('text-white');
        selectedBtn.classList.add('pointer-events-none');

        seatDetails(seatName);

        totalPriceCalculation();

    })
}

// calculation 
function totalPriceCalculation() {
    const previousTotalPrice = getElementNumberId('total-price');
    const perSeatPrice = getElementNumberId('per-seat-price');
    const newTotalPrice = previousTotalPrice + perSeatPrice;
    setElement('total-price', newTotalPrice);
    setElement('grand-total', newTotalPrice);
}


//--------- calculation -----

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


function getElementNumberId(id) {
    const element = document.getElementById(id);
    const elementCount = parseInt(element.innerText);
    return elementCount;
}



function setElement(elementId, value) {
    const restSeatsBox = document.getElementById(elementId);
    restSeatsBox.innerText = value;
}