const page1 = document.querySelector('.container1');
const page2 = document.querySelector('.container2');
const page3 = document.querySelector('.container3');
const page1Btn = document.querySelector('.page1-btn');
const page2Btn = document.querySelector('.page2-btn');

// ** -----------------------------page3 message--------------------**//
const message = document.querySelector('.input-message');
const sendIcon = document.querySelector('.send-icon');
const microphone = document.querySelector('.win3-right-bottom-items');
const page3Msg = document.querySelector('.msg-background');

page1Btn.addEventListener('click', () => {
	page1.classList.add('hidden');
	page2.classList.remove('hidden');
});
page2Btn.addEventListener('click', () => {
	page2.classList.add('hidden');
	page3.classList.remove('hidden');
});

message.addEventListener('keypress', () => {
	sendIcon.classList.remove('hidden');
	microphone.classList.add('hidden');
});

sendIcon.addEventListener('click', () => {
	sendIcon.classList.add('hidden');
	microphone.classList.remove('hidden');
	msg();
	message.value = '';
});

function msg() {
	// **-------------------------------------time-----------------**//
	const date = new Date();
	const h = date.getHours();
	let m = date.getMinutes();
	if (m < 10) {
		m = '0' + m;
	}
	const time = h + ':' + m;
	// **-------------------------------------time-----------------**//
	const p = document.createElement('p');

	p.classList.add('message-box');
	p.innerHTML = message.value + ' ' + time;
	page3Msg.append(p);
}

message.addEventListener('keyup', function (press) {
	if (press.key === 'Enter') {
		if (message.value == '') {
			p.textContent = '';
		}
		sendIcon.classList.add('hidden');
		microphone.classList.remove('hidden');
		msg();
		message.value = '';
	}
});
