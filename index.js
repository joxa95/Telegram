const page1 = document.querySelector('.container1');
const page2 = document.querySelector('.container2');
const page3 = document.querySelector('.container3');
const page1Btn = document.querySelector('.page1-btn');
const page2Btn = document.querySelector('.page2-btn');

page1Btn.addEventListener('click', () => {
	page1.classList.add('hidden');
	page2.classList.remove('hidden');
});
page2Btn.addEventListener('click', () => {
	page2.classList.add('hidden');
	page3.classList.remove('hidden');
});
