document.addEventListener('DOMContentLoaded', function() {
    const inputBox = document.querySelector('.inputBox');
    const buttons = document.querySelectorAll('.calculator .button .btn');
    let string = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent;

            if (buttonText === '=') {
                string = evaluateExpression(string);
                inputBox.value = string;
            } else if (buttonText === 'AC') {
                string = '';
                inputBox.value = '';
            } else if (buttonText === 'DE') {
                string = string.slice(0, -1);
                inputBox.value = string;
            } else {
                string += buttonText;
                inputBox.value = string;
            }
        });
    });

    function evaluateExpression(expression) {
        try {
            return eval(expression);
        } catch (error) {
            return 'Error';
        }
    }
});