function convertTemperature() {
    const tempInput = document.getElementById('temperature').value;
    const unit = document.querySelector('input[name="unit"]:checked').value;
    const temperature = parseFloat(tempInput);
    if (isNaN(temperature)) {
        document.getElementById('result').innerText = 'Please enter a valid number.';
        return;
    }

    let result = '';
    switch (unit) {
        case 'Celsius':
            result = `Fahrenheit: ${(temperature * 9/5) + 32} °F\nKelvin: ${temperature + 273.15} K`;
            break;
        case 'Fahrenheit':
            result = `Celsius: ${(temperature - 32) * 5/9} °C\nKelvin: ${(temperature - 32) * 5/9 + 273.15} K`;
            break;
        case 'Kelvin':
            result = `Celsius: ${temperature - 273.15} °C\nFahrenheit: ${(temperature - 273.15) * 9/5 + 32} °F`;
            break;
    }

    // Display the result
    document.getElementById('result').innerText = result;
}
