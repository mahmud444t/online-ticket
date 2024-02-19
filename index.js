const seats = document.querySelectorAll('.seat');
let totalPrice = 0;
let seatIncrease = 0;
let discount = 0;
let arr = [];
arrIndex = 0;
const number = document.getElementById('number');


for (const seat of seats) {
    seat.addEventListener("click", function (event) {
        const seatCounts = document.getElementById('seat-count');
        let count = parseInt(seatCounts.innerText);

        const ticketType = document.getElementById("ticket-type");

        const topdiv = document.createElement("div");



        // if seat is selected
        if (event.target.style.backgroundColor === 'rgb(29, 209, 0)') {
            // Change background color back to original (or any other color you prefer)
            event.target.style.backgroundColor = '#f7f8f8';
            event.target.style.color = '#03071280';
            count++;
            seatIncrease--;
            document.getElementById('seat-increase').innerText = seatIncrease;
            seatCounts.innerText = count;
            totalPrice -= 550;
            document.getElementById('total-price').innerText = totalPrice;
            document.getElementById('element').innerHTML = "";
            const ticketType = document.getElementById("ticket-type");
            const eventTargetText = event.target.innerText;

            //removing ticket type information
            for (const value of ticketType.querySelectorAll(".topdiv")) {
                const seatposition = value.querySelector("h3");
                if (seatposition.textContent === eventTargetText) {
                    value.remove();
                    break; // Break the loop after removing the first matching topdiv
                }
            }

            if (seatIncrease <= 4) {
                document.getElementById('coupon-div').classList.remove('hidden');

            }
            if (seatIncrease < 4) {
                document.getElementById('coupon-apply').setAttribute('disabled', true);
                document.getElementById('coupon').value = '';

            }
            document.getElementById('grand-price').innerText = totalPrice;

        }
        // if seat is not selected
        else {

            event.target.style.backgroundColor = '#1dd100';
            event.target.style.color = '#fff';
            count--;
            seatIncrease++;
            document.getElementById('seat-increase').innerText = seatIncrease;
            seatCounts.innerText = count;
            totalPrice = seatIncrease * 550;
            document.getElementById('total-price').innerText = totalPrice;

            if (seatIncrease <= 4) {
                topdiv.classList.add("p-4", "flex", "justify-between", "topdiv");
                const seatposition = document.createElement("h3");
                const type = document.createElement("h3");
                const seatPrice = document.createElement("h3");
                seatposition.textContent = event.target.innerText;
                type.textContent = "Economy";
                seatPrice.textContent = "550";
                ticketType.append(topdiv);
                topdiv.append(seatposition, type, seatPrice);
                let el = event.target.id;
                arr.push(el);

            }

            if (seatIncrease == 4) {
                document.getElementById('coupon-apply').removeAttribute('disabled');

            }

            else if (seatIncrease > 4) {
                alert("You cant select more than 4");
                event.target.style.backgroundColor = '#f7f8f8';
                event.target.style.color = '#03071280';
                seatIncrease--;
                document.getElementById('seat-increase').innerText = seatIncrease;
                totalPrice -= 550;
                document.getElementById('total-price').innerText = totalPrice;
                count++;
                seatCounts.innerText = count;
                document.getElementById('coupon').value = '';
            }
            document.getElementById('grand-price').innerText = totalPrice;


        }


    })
}

number.addEventListener('keyup', function () {
    if (seatIncrease > 0 && number.value.trim() !== "") {
        document.getElementById('next-button').removeAttribute('disabled');
    }
    else {
        document.getElementById('next-button').setAttribute('disabled', true);
    }
});

// next button
document.getElementById('next-button').addEventListener('click', function () {
    document.getElementById('head').classList.add('hidden');
    document.getElementById('main').classList.add('hidden');
    document.getElementById('foot').classList.add('hidden');
    my_modal_4.showModal();
})




// COUPON SECTION
document.getElementById('coupon-apply').addEventListener('click', function (event) {
    if (document.getElementById('coupon').value === 'NEW15') {
        document.getElementById('grand-price').innerText = totalPrice * 0.85;
        document.getElementById('element').innerHTML = `
        <h3>Discount Price</h3>
        <h3>BDT <span id="dis-price">0</span></h3>
        ` ;
        document.getElementById('dis-price').innerText = totalPrice * 0.15;
        document.getElementById('coupon-div').classList.add('hidden');
    }
    else if (document.getElementById('coupon').value === 'Couple 20') {

        document.getElementById('element').innerHTML = `
        <h3>Discount Price</h3>
        <h3>BDT <span id="dis-price">0</span></h3>
        ` ;
        document.getElementById('dis-price').innerText = totalPrice * 0.20;
        document.getElementById('grand-price').innerText = totalPrice * 0.80;
        document.getElementById('coupon-div').classList.add('hidden');

    }
    else {
        document.getElementById('grand-price').innerText = totalPrice;
    }
})

//Continue button

document.getElementById('Continue').addEventListener('click', function () {
    document.getElementById('head').classList.remove('hidden');
    document.getElementById('main').classList.remove('hidden');
    document.getElementById('foot').classList.remove('hidden');
    document.getElementById('coupon-div').classList.remove('hidden');
    document.getElementById('ticket-type').innerHTML = '';
    document.getElementById('grand-price').innerText = 0;
    document.getElementById('total-price').innerText = 0;
    document.getElementById('element').innerHTML = '';
    document.getElementById('coupon').value = '';
    document.getElementById('number').value = '';
    document.getElementById('coupon-apply').setAttribute('disabled', false);
    document.getElementById('next-button').setAttribute('disabled', true);
    document.getElementById('seat-increase').innerText = 0;
    document.getElementById('seat-count').innerText = 40;
    seatIncrease = 0;
    for (const element of arr) {
        const normal = document.getElementById(element);
        normal.style.backgroundColor = '#f7f8f8';
        normal.style.color = '#03071280';
    }
})