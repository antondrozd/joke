class Blick {
	constructor(element, speed, styleToBlick = 'color') {
		this.element = element;
		this.speed = speed;
		this.styleToBlick = styleToBlick;
		this._defaultCSS = this.element.style;
		this.isRunning = false;
		this.colors = [
			'red',
			'yellow',
			'green',
			'orange',
			'blue',
			'tomato',
			'black',
			'grey',
			'pink',
			'brown'
		];
		this.currentColorIndex = 0;
	}

	_blick() {
		this.element.style[this.styleToBlick] = this.colors[
			this.currentColorIndex
		];
		if (this.currentColorIndex < this.colors.length - 1) {
			this.currentColorIndex++;
		} else {
			this.currentColorIndex = 0;
		}
	}

	start() {
		Object.assign(this._defaultCSS, {
			fontSize: '100px',
			fontWeight: 'bold'
		});

		this._interval = setInterval(this._blick.bind(this), this.speed);
		this.isRunning = true;
	}

	stop() {
		clearInterval(this._interval);
		this.isRunning = false;
	}

	reset() {
		this.stop();
		this.element.style = this._defaultCSS;
	}

	changeSpeedTo(speed) {
		this.speed = speed;

		if (this.isRunning) {
			clearInterval(this._interval);
			this._interval = setInterval(this._blick.bind(this), this.speed);
		}
	}

	addColor(color) {
		this.colors.push(color);
	}
}

const blick = new Blick(document.body, 10, 'backgroundColor');
const hblick = new Blick(hello, 100);

// alert('Подтвердите загрузку вируса.');
blick.start();
hello.textContent = 'You are crashed!!!';
hblick.start();

// window.onclose = function(event) {
// 	event.preventDefault();
// 	alert('Do you really want to close?');
// };
