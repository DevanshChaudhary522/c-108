function startClassification() {
     navigator.mediaDevices.getUserMedia({audio:true});
     classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Bm28_a4MH/model.json',modelReady);

}
function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error,results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        random_r=Math.floor(Math.random()* 255) +1 ;
        random_g=Math.floor(Math.random()*255) +1;
        random_b=Math.floor(Math.random()*255) +1;
        document.getElementById("result_label").innerHTML='i can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML='accuracy -' + (results[0].confidence*100).toFixed(2); 
        img1=document.getElementById('alien1');
        img2=document.getElementById('alien2');
        img3=document.getElementById('alien3');
        img4=document.getElementById('alien4');
        if (results[0].label== "clapping"){
            img1.src='aliens-1.gif';
            img2.src='aliens-2.png';
            img3.src='aliens-3.png';
            img4.src='aliens-4.png';
        }
        else if (results[0].label== "snapping"){
            img1.src='aliens-1.png';
            img2.src='aliens-2.gif';
            img3.src='aliens-3.png';
            img4.src='aliens-4.png';
        }
        else if (results[0].label== "bell"){
            img1.src='aliens-1.png';
            img2.src='aliens-2.png';
            img3.src='aliens-3.gif';
            img4.src='aliens-4.png';
        }
        else {
            img1.src='aliens-1.png';
            img2.src='aliens-2.png';
            img3.src='aliens-3.png';
            img4.src='aliens-4.gif';
        }
    }



}