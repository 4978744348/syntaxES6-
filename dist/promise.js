'use strict';

function applyForVisa(documents) {
    console.log('handling apply...');
    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            Math.random() > .0 ? resolve({}) : reject('visa rejected: exception in documents');
        }, 2000);
    });
    return promise;
}

function getVisa(visa) {
    console.info('visa geted');
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            return resolve(visa);
        }, 2000);
    });
}

function bookHotel(visa) {
    console.log(visa);
    console.log('booking the hotel');
    return Promise.resolve(visa);
    // reject('no places');
}

function buTickets(booking) {
    console.log('buy tikets');
    console.log('booking ', booking);
}

applyForVisa({}).then(getVisa).then(bookHotel).then(buTickets).catch(function (error) {
    return console.error(error);
}).then(function () {
    return console.log('try later');
}); // fynally