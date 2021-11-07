// ** -----------------------------All pages--------------------**//
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
const smile = document.querySelector('.smile-icon');

// ** -----------------------------page1 Start button--------------------**//
page1Btn.addEventListener('click', () => {
	page1.classList.add('hidden');
	page2.classList.remove('hidden');
});
// ** -----------------------------page2 Start button--------------------**//
page2Btn.addEventListener('click', () => {
	page2.classList.add('hidden');
	page3.classList.remove('hidden');
	tel();
});
// **-------------------------------------User tel number --------------------------------------**//

const Page2_number = document.querySelector('.tel_number');
const Page2_code = document.querySelector('.tel_code');
const user_number = document.querySelector('.user_tel_number');

function tel() {
	user_number.innerHTML = '+ ' + Page2_code.value + Page2_number.value;
}

// ** -----------------------------page2 press input message--------------------**//
message.addEventListener('keypress', () => {
	sendIcon.classList.remove('hidden');
	microphone.classList.add('hidden');
});
sendIcon.addEventListener('click', () => {
	sendIcon.classList.add('hidden');
	microphone.classList.remove('hidden');
	if (message.value == '') {
		p.textContent = '';
	}
	msg();
	message.value = '';
});

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

smile.addEventListener('click', () => {
	sendIcon.classList.remove('hidden');
	microphone.classList.add('hidden');
});

// ** -----------------------------page2 sellect country--------------------**//

// const country_sellect = document.querySelector('.select_key');
// country_sellect.addEventListener('click', () => {
// 	if (country_sellect.value === 'Uzbekistan') {
// 		Page2_code.value === '999';
// 	}
// });

// **------------------------------------Smile btn --------------------------------------**//
const smile_btn = document.querySelectorAll('.smile_btn');

smile_btn.forEach(btn => {
	btn.addEventListener('click', () => {
		message.value = message.value + btn.innerHTML;
	});
});

function msg() {
	// **----------------------Message time-----------------**//
	const date = new Date();
	const h = date.getHours();
	let m = date.getMinutes();
	if (m < 10) {
		m = '0' + m;
	}
	const time = h + ':' + m;

	// **----------------------send Message -----------------**//
	const p = document.createElement('p');
	p.classList.add('message-box');

	p.innerHTML = message.value + ' ' + time;
	page3Msg.append(p);

	// **----------------------Delete Message -----------------**//
	p.addEventListener('contextmenu', e => {
		e.preventDefault();
		menu_delete.style.top = `${e.clientY}px`;
		menu_delete.style.left = `${e.clientX}px`;
		menu_delete.classList.add('active-delete');

		menu_delete.addEventListener('click', () => {
			menu_delete.classList.remove('active-delete');
			// p.classList.remove('message-box');
			p.remove();
		});
	});
}

// **----------------------------Context Menu------------------------------------**//

const close_window = document.querySelector('.row');
const menu_delete = document.querySelector('.delete');
const message_box = document.querySelector('.msg-background');

close_window.addEventListener('click', () => {
	menu_delete.classList.remove('active-delete');
});

message_box.addEventListener('click', () => {
	menu_delete.classList.remove('active-delete');
});

// **------------------------------message attachment-----------------**//

const label = document.querySelector('.input_label');

label.addEventListener('click', () => {
	sendIcon.classList.remove('hidden');
	microphone.classList.add('hidden');
});

// **------------------------------ page3 Create new group -----------------**//

const group_p = document.querySelector('.group_p');
const new_group_input = document.querySelector('.new_group_input');
const create_new_group = document.querySelector('.create_new_group');
const new_group_background = document.querySelector('.new_group_background');
const offcanvas = document.querySelector('.offcanvas');
const cancel_btn = document.querySelector('.cancel_btn');
const new_group = document.querySelector('.new_group');

cancel_btn.addEventListener('click', () => {
	new_group_background.classList.add('hidden');
	offcanvas.classList.remove('hidden');
	new_group.classList.add('hidden');
});

new_group_background.addEventListener('click', () => {
	new_group_background.classList.add('hidden');
	offcanvas.classList.remove('hidden');
	new_group.classList.add('hidden');
});
create_new_group.addEventListener('click', () => {
	new_group_background.classList.remove('hidden');
	new_group.classList.remove('hidden');
	offcanvas.classList.add('hidden');
});

new_group_input.addEventListener('click', () => {
	group_p.classList.add('new_group_p_active');
	new_group_input.classList.add('new_group_input_active');
});

// **------------------------------ page3 Night mode -----------------**//

const night_mode_on = document.querySelector('.night_mode_on');
const left_background = document.querySelector('.users_menu');
const nightMode = document.querySelector('.form-check-input');
const canvas_body = document.querySelector('.canvas_body');
const canvas_body_p = document.querySelectorAll('.canvas_body_p');
const canvas_icon = document.querySelectorAll('.canvas_icon');
const window3_message = document.querySelector('.window3-message');
const group_background = document.querySelectorAll('.group_background');
const input_message = document.querySelector('.input-message');
const send_icon = document.querySelector('.send-icon');
const window3_nav = document.querySelector('.window3-nav');
const first_item = document.querySelector('.first-item');
const search = document.querySelector('.search');
const text_night_mode_color = document.querySelectorAll(
	'.text_night_mode_color'
);
const dropup_menu = document.querySelector('.dropup-menu');
// const smile_btn = document.querySelectorAll('.smile_btn');

night_mode_on.addEventListener('click', () => {
	left_background.classList.toggle('night_mode_background_on');
	first_item.classList.toggle('night_mode_background');
	search.classList.toggle('night_mode_search');
	canvas_body.classList.toggle('night_mode_background_on');
	window3_message.classList.toggle('night_mode_background_on');
	input_message.classList.toggle('night_mode_background_on');
	send_icon.classList.toggle('night_mode_background_on');
	window3_nav.classList.toggle('night_mode_background_on');

	dropup_menu.classList.toggle('dropup-menu_night_mode');

	smile_btn.forEach(smile => {
		smile.classList.toggle('smile_btn_night_mode');
	});

	text_night_mode_color.forEach(text => {
		text.classList.toggle('text_night_mode_color_white');
	});

	group_background.forEach(e => {
		e.classList.toggle('night_mode_background_on');
	});

	canvas_icon.forEach(e => {
		e.classList.toggle('canvas_icon_color');
	});

	canvas_body_p.forEach(e => {
		e.classList.toggle('canvas_p_color');
	});
});
// **----------------------------------page3 add users, groups, channels...---------------------------------------**//
const next_btn = document.querySelector('.next_btn');

const Group_And_Username = document.querySelectorAll('.Group_And_Username');
const username_nav = document.querySelector('.username_nav');

next_btn.addEventListener('click', () => {
	new_group_background.classList.add('hidden');
	offcanvas.classList.remove('hidden');
	new_group.classList.add('hidden');

	Group_And_Username.forEach(name => {
		name.textContent = new_group_input.value;
	});
	new_group_input.value = '';
});

group_background.forEach(background => {
	background.addEventListener('click', () => {
		// username_nav.textContent = Group_And_Username.textContent;

		Group_And_Username.forEach(name => {
			username_nav.textContent = name.textContent;
		});
	});
	// Group_And_Username.forEach(name => {
	// 	name.textContent = new_group_input.value;
	// });
});

function addGroup() {
	const markup = `
	    	<a
	            class="list-group-item list-group-item-action group_background"
	            id="list-profile-list"
	            data-bs-toggle="list"
	            href="#list-profile"
                role="tab"
                aria-controls="list-profile"
            >
                <div class="ava "></div>
                <span class="username">
                	<bold class="Group_And_Username"><i class="fas fa-user-friends"></i> </bold>
                	<span class="time">messages</span>
                </span>
            </a>`;

	left_background.insertAdjacentHTML('beforeend', markup);
}

//
next_btn.addEventListener('click', () => {
	addGroup();
});
