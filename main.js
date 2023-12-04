function startClassification()

{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json', 
    modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results)
{

    if(error)
{
    console.error(error);
} else 
{
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'I can hear -' + results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy' + (results[0].confidence*100).toFixed(2);
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+"(";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+"(";
    
    img1 = document.getElementById('cat1');
    img2 = document.getElementById('dog1'); 
}

if (results[0].label == "bark")
{
img1.src = "cat_img.jpg";
img2.src = "dog_gif.gif";

}
else(result[0] == "meow")
{
img1.src = "cat_gif.gif";
img2.src = "dog_img.jpg";
}
}
