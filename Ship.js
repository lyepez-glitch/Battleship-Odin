class Ship {
    constructor(length) {
        this.length = length;
        this.hits = 0;
        this.isSunk = false;
    }
    hit() {
        this.hits++;
    }
    isSunk() {
        if (this.hits >= this.length) {
            return true;
        } else {
            return false;
        }
    }
}
module.exports = Ship;