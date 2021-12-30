
// ĐỐI TƯỢNG VALIDATPR
function Validator (options) {
    var formElement = document.querySelector(options.form)
    console.log(options.rules);
}

//định nghĩa các rulés
Validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function () {

        }
    }
}

Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function () {

        }
    }
}