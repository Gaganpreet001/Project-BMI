document.getElementById('calculateBtn').addEventListener('click', function() {
    const weight = parseFloat(document.getElementById('weight').value);
    const weightUnit = document.getElementById('weightUnit').value;
    const heightUnit = document.getElementById('heightUnit').value;
    let height = parseFloat(document.getElementById('height').value);
    if (isNaN(weight) || isNaN(height)) {
        alert("Please enter valid weight and height.");
        return;
    }


    if (heightUnit === 'feet') {
        height *= 0.3048;
    } else if (heightUnit === 'inch') {
        height *= 0.0254;
    }

    let weightInKg = weight;
    if (weightUnit === 'pounds') {
        weightInKg = weight * 0.453592;
    }

    const bmi = weightInKg / (height * height);

    let bmiCategory = '';
    if (bmi < 18.5) {
        bmiCategory = 'Underweight';
    } else if (bmi < 24.9) {
        bmiCategory = 'Normal weight';
    } else if (bmi < 29.9) {
        bmiCategory = 'Overweight';
    } else {
        bmiCategory = 'Obese';
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Your BMI: ${bmi.toFixed(2)}<br>Category: ${bmiCategory}`;
});