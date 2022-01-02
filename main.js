
// ĐỐI TƯỢNG VALIDATPR
function Validator (options) {
    
    function validate (inputElement, rule) {
      
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        var errorMessage = rule.test(inputElement.value);

        if(errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        }else {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
        }
    }
    
//Lấy emlement của form cần validate
    var formElement = document.querySelector(options.form);
    if (formElement) {
        options.rules.forEach( function (rule) {
            var inputElement = formElement.querySelector(rule.selector);
            
            if (inputElement) {

                //xử lý trường hợp blur khỏi input
                inputElement.onblur = function () {
                   validate(inputElement, rule);
                }
                //xử lý trường hợp mỗi khi người dùng nhập vào ô input
                inputElement.oninput = function () {
                    var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid');
                }
            }
        });
    }
}

//định nghĩa các 
//Nguyên tắc các rule
//1. Khi có lỗi => trả ra message lỗi
//2. Khi hợp lệ => không trả ra cái gì cả
Validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : 'Vui lòng nhập trường này';
        }
    }
}

Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Trường này phải là email';
        }
    }
}