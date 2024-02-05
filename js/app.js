/**
 * 
 * Code fourni
 */
const app = {
    // just a utility var to remember all the colors
    colors: ['red','green', 'blue', 'yellow'],
     // this var will contain the sequence said by Simon
    serquence: [],

    init: function () {
        console.log('init');
        app.drawcells();
    },
    drawcells: function () {
        const playground = document.getElementById('playground')
        console.log(playground);
        for(const color of app.colors) {
            let cell = document.createElement('div');
            cell.className = 'cell';
            cell.id = color,
            cell.style.backgroundColor = color;
            playground.appendChild(cell);
        }
    }
}
console.log(app)
document.addEventListener('DOMContentLoaded', app.init);