// feetToMile
function feetToMile(feet) {
    var mile;
    if (feet < 0) {
        mile = 'Feet value should be positive number';
    } else {
        mile = feet / 5280;
    }
    return mile;
}
// var result = feetToMile(10000);
// console.log(result);


// woodCalculator
function woodCalculator(chair, table, bed) {
    var totalWood;
    if (chair < 0 || table < 0 || bed < 0 ) {
        totalWood = 'Input value should be positive number';
    } else {
        var woodForChair = chair * 1;
        var woodForTable = table * 3;
        var woodForBed = bed * 5;
        totalWood = woodForChair + woodForTable + woodForBed;
    }
    return totalWood;
}
// var woodAmount = woodCalculator(3,2,2);
// console.log(woodAmount);


// brickCalculator
function brickCalculator(floor) {
    var totalBrick;
    if (floor < 0) {
        totalBrick = 'Floor value should be positive number';
    }
    else if (floor <= 10) {
        totalBrick = floor * 15 * 1000;
    }
    else if (floor > 10 && floor <= 20) {
        var upTenFloors = floor - 10;
        var totalBrickUpTenFloors = upTenFloors * 12 * 1000;
        totalBrick = 150000 + totalBrickUpTenFloors;
    }
    else {
        var upTwentyFloors = floor - 20;
        var totalBrickUpTwentyFloors = upTwentyFloors * 10 * 1000;
        totalBrick = 270000 + totalBrickUpTwentyFloors;
    }
    return totalBrick;
}
// var brickAmount = brickCalculator(50);
// console.log(brickAmount);


// tinyFriend
function tinyFriend(friendsName) {
    var tinyName;
    if (friendsName == undefined || friendsName.length <= 1) {
        tinyName = 'Enter minimum two friends name';
    } else {
        tinyName = friendsName[0];
        for (var i = 0; i < friendsName.length; i++) {
            var element = friendsName[i];
            if (element.length < tinyName.length) {
                tinyName = element;
            }
        }
    }
    return tinyName;
}
// var friends=['Shuvo', 'Shakira', 'Sia', 'Messi', 'Ronaldo', 'Sia'];
// var result = tinyFriend(friends);
// console.log(result);
