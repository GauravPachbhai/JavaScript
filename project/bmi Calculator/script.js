const form = document.querySelector('form');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const text = document.querySelectorAll('#weight-guide')
    let results = document.querySelector('#results');

    console.log(text);

    if (height === '' || height <= 0 || isNaN(height)) {
        results.innerHTML = `Please provide a valid height: ${height}`;
    } else if (weight === '' || weight <= 0 || isNaN(weight)) {
        results.innerHTML = `Please provide a valid weight: ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `Your BMI is: <span>${bmi}</span>`;
        if(bmi < 18.6){
            text.innerHTML = ` <p>Under Weight = Less than 18.6...</p>`
        }else  if(bmi >= 18.6 && bmi < 24.9){
            text.innerHTML = ` <p>Normal Range = 18.6 and 24.9..</p>`
        }else {
            text.innerHTML = ` <p>Overweight = Greater than 24.9..</p>`
        }
    }
});
