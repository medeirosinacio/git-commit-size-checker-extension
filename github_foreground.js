// Define uma função que realiza a validação do input de forma genérica
const validateInput = (inputElement, maxLength) => {

    // Remove espaços duplicados e Atualiza o valor do input com a sanitização
    inputElement.value = inputElement.value.replace(/  +/g, ' ');

    const errorMessage = inputElement.nextElementSibling;
    const summaryLength = inputElement.value.length;
    const submitButton = inputElement.closest('form').querySelector('button[type="submit"], input[name="commit"], button[name="commit"]');

    if (summaryLength > maxLength) {
        inputElement.style.border = '1px solid red';
        if (!errorMessage || errorMessage.tagName !== 'P') {
            const newErrorMessage = document.createElement('p');
            newErrorMessage.innerHTML = `<b>⚠ The commit title must be ${maxLength} characters or less.</b>`;
            newErrorMessage.style.color = 'red';
            inputElement.insertAdjacentElement('afterend', newErrorMessage);
        }
        submitButton.disabled = true;
    } else {
        inputElement.style.border = 'none';
        if (errorMessage && errorMessage.tagName === 'P') {
            errorMessage.remove();
        }
        submitButton.disabled = false;
    }
};

// Define uma função que verifica a existência do input e o valida
const checkInput = () => {
    const mergeTitleFieldInput = document.querySelector('#commit-summary-input, #merge_title_field');

    if (mergeTitleFieldInput) {
        clearInterval(checkForMergeTitleField);

        // Registra a validação do input no evento input
        mergeTitleFieldInput.addEventListener('input', () => validateInput(mergeTitleFieldInput, 72));

        // Executa a validação do input assim que o script é carregado
        validateInput(mergeTitleFieldInput, 72);
    }
};

// Inicia um intervalo que verifica a existência do input
const checkForMergeTitleField = setInterval(checkInput, 500);
