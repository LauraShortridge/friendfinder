//You should save your application's data as an array of objects. Each of these objects should roughly follow the format below.

var friendArray = [
    {
        "name": "Laura",
        "picture": "https://drive.google.com/file/d/1bTFxagnK1Raeb5atn_a_BZDioBX1HUxD/view?usp=sharing",
        "scores": [
            1,
            1,
            5,
            5,
            3,
            5,
            4,
            1,
            5,
            5
        ]
    },
    {
        "name": "Daryl",
        "picture": "https://media.comicbook.com/2018/05/the-walking-dead-daryl-dixon-norman-reedus-huge-paycheck-1112642-1280x0.jpeg",
        "scores": [
            3,
            3,
            3,
            5,
            4,
            3,
            3,
            3,
            5,
            4
        ]
    }

];

module.exports = friendArray;

// var totalDifference = "";

// for (i = 0; i < friendArray.length; i ++) {
//     // console.log(friendArray[i].scores, "First");

//     for (j = 0; j < friendArray[i].scores.length; j ++) {
//         console.log(friendArray[i].scores[j], "Second");
//     }
// }