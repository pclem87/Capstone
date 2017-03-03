var dog;
var dogData;
var dogArray = [];

function print(dogArray) {
    var outputDiv = document.getElementById('dogInfo');
    outputDiv.innerHTML = dogArray;
}

for (var i = 0; i < dogs.length; i += 1) {
    dog = dogs[i];
    var dogData = '<a href=\"#\"><img src="' + dog.image + '" id=\"dogArrayImage\"></a>';
    dogData += '<p>Name: ' + dog.name + '</p>';
    dogData += '<p>Age: ' + dog.age + '</p>';
    dogData += '<p>Gender: ' + dog.gender + '</p>'
    dogData += '<p>Breed: ' + dog.breed + '</p>';
    dogData += '<p>Weight: ' + dog.weight + '</p>';
    dogData += '<p>' + dog.description + '</p>';
    dogArray.push(dogData);
}

print(dogArray);