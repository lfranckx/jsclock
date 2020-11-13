const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    // When the hand resets to 90 is when the glitch happens 
    // so that’s where I want to change the transition.
    // side note: secondHand.style.transition = '' 
    // resets the inline style by removing it so the element 
    // can revert back to the stylesheet.

    if (secondsDegrees === 90) {
        secondHand.style.transition = 'none';
    } else {
        secondHand.style.transition = '';
    }

    console.log("sec deg:", secondsDegrees);
    console.log("sec:", seconds);
    console.log("min deg", minutesDegrees);
    console.log("min:", minutes);
    // console.log("hour:", hours);


}

setInterval(setDate, 1000);