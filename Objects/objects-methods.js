let resturant = {
    name: 'Skosh',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function (partySize) {
        this.guestCount = this.guestCount + newArrivals
    },
    removeParty: function (partySize) {
        this.guestCount = this.guestCount - departing
    }
}

resturant.seatParty(72)
console.log(resturant.checkAvailability(4))
resturant.removeParty(5)
console.log(resturant.checkAvailability(4))