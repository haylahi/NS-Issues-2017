"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FormValidationService = (function () {
    function FormValidationService() {
    }
    // Username validator
    FormValidationService.prototype.usernameValidator = function (username) {
        if (username !== undefined) {
            if (username.match(/^[0-9a-zA-Z\s\r\n@!#\$\^%&*()+=\-\[\]\\\';,\.\/\{\}\|\":<>\?]+$/)) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    };
    // Email id pattern match validator
    FormValidationService.prototype.emailMatchValidator = function (mailid) {
        if (mailid !== undefined) {
            if (mailid === "") {
                return true;
            }
            else {
                // /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                if (mailid.match(/([a-z0-9][-a-z0-9_\+\.]*[a-z0-9])@([a-z0-9][-a-z0-9\.]*[a-z0-9]\.(org|com|edu)$)/)) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
        else {
            return true;
        }
    };
    // Email id filled check
    FormValidationService.prototype.emailFilledValidator = function (mailid) {
        if (mailid === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    // Password pattern match validator
    FormValidationService.prototype.passwordPatternValidator = function (pwd) {
        if (pwd !== undefined) {
            if (pwd === "") {
                return true;
            }
            else {
                if (pwd.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{7,100}$/)) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
        else {
            return true;
        }
    };
    // Password  filled check
    FormValidationService.prototype.passwordFilledValidator = function (pwd) {
        if (pwd === undefined || pwd === "") {
            return false;
        }
        else {
            return false;
        }
    };
    // Mobile Number Validator
    FormValidationService.prototype.mobileNumberValidator = function (mblno) {
        if (mblno !== undefined) {
            if (mblno === "") {
                return true;
            }
            else {
                if (mblno.length === 10 && (mblno.match(/^\d+$/))) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
        else {
            return true;
        }
    };
    // Mobile no  filled check
    FormValidationService.prototype.mobileNumberFilledValidator = function (mblno) {
        if (mblno === undefined || mblno === "") {
            return false;
        }
        else
            return true;
    };
    // SSN Number Validator
    FormValidationService.prototype.snnNumberValidator = function (ssnno) {
        if (ssnno !== undefined && ssnno !== "") {
            if (ssnno.length === 9) {
                if (ssnno.match(/^\d+$/)) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    };
    FormValidationService.prototype.fieldFilledValidator = function (arg) {
        if (arg === undefined || arg === "") {
            return false;
        }
        else {
            return true;
        }
    };
    FormValidationService.prototype.onlyDigitsValidator = function (arg) {
        if (arg !== undefined && arg !== "") {
            if (arg.match(/^\d+$/)) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    };
    FormValidationService.prototype.onlyAlphabetsValidator = function (arg) {
        if (arg !== undefined) {
            if (arg !== "") {
                if (arg.match(/^[a-zA-Z '-]{0,150}$/)) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else
                return true;
        }
        else {
            return true;
        }
    };
    FormValidationService.prototype.memberIdValidator = function (arg) {
        if (arg !== undefined && arg !== "") {
            if (arg.length === 14) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    };
    FormValidationService.prototype.debitCardNoValidator = function (arg) {
        if (arg !== undefined) {
            if (arg.length === 16) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    };
    // Date validation starts here
    FormValidationService.prototype.dateValidator = function (arg) {
        if (arg !== undefined) {
            if (arg === "") {
                return true;
            }
            else {
                var inputDate = new Date(arg);
                var todaysDate = new Date();
                var year = arg.substr(arg.length - 4);
                var date = arg.substring(3, 5);
                var month = arg.substring(0, 2);
                var pattern = "^(1[0-2]|0?[1-9])/(3[01]|[12][0-9]|0?[1-9])/(?:[0-9]{2})?[0-9]{2}$";
                if (arg.match(pattern)) {
                    if (inputDate.setHours(0, 0, 0, 0) <= todaysDate.setHours(0, 0, 0, 0) && year >= 1900) {
                        // to check whether greater than current date
                        if ((date === "31") &&
                            (month === "4" || month === "6" || month === "9" || month === "11" || month === "04" || month === "06" || month === "09")) {
                            return false; // only 1,3,5,7,8,10,12 has 31 days
                        }
                        else if (month === "2" || month === "02") {
                            // leap year
                            if (year % 4 === 0) {
                                if (date === "30" || date === "31") {
                                    return false;
                                }
                                else {
                                    return true;
                                }
                            }
                            else {
                                if (date === "29" || date === "30" || date === "31") {
                                    return false;
                                }
                                else {
                                    return true;
                                }
                            }
                        }
                        else {
                            return true;
                        }
                    }
                }
                else {
                    return false;
                }
            }
        }
        else {
            return true;
        }
    };
    // Date validation ends here
    FormValidationService.prototype.getAge = function (birthDateString) {
        var today = new Date();
        var birthDate = new Date(birthDateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };
    //Age validation for 18 years and above 
    FormValidationService.prototype.minimumAgeValidator = function (arg) {
        if (arg !== "" && arg !== undefined) {
            if (this.getAge(arg) >= 18) {
                return true;
            }
            else
                return false;
        }
        else
            return true;
    };
    //Alphanumeric validator
    FormValidationService.prototype.alphaNumericValidator = function (arg) {
        if (arg !== undefined) {
            if (arg === "") {
                return true;
            }
            else {
                if (arg.match(/^[0-9a-zA-Z]+$/)) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
        else {
            return true;
        }
    };
    // Alpha memid with first 3 charactyers and rest digits
    FormValidationService.prototype.alphaNumericMemValidator = function (arg) {
        if (arg !== undefined) {
            if (arg === "") {
                return true;
            }
            else {
                if (arg.match(/^[a-zA-Z]{3}[0-9]{11}$/)) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
        else {
            return true;
        }
    };
    return FormValidationService;
}());
FormValidationService = __decorate([
    core_1.Injectable()
], FormValidationService);
exports.FormValidationService = FormValidationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybVZhbGlkYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZvcm1WYWxpZGF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFJM0MsSUFBYSxxQkFBcUI7SUFBbEM7SUF3UkEsQ0FBQztJQWxSRyxxQkFBcUI7SUFDckIsaURBQWlCLEdBQWpCLFVBQWtCLFFBQVE7UUFDdEIsRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDekIsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxpRUFBaUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEYsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNoQixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNqQixDQUFDO1FBQ0wsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO0lBQ0wsQ0FBQztJQUNELG1DQUFtQztJQUVuQyxtREFBbUIsR0FBbkIsVUFBb0IsTUFBTTtRQUN0QixFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN2QixFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNoQixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ1IseUVBQXlFO2dCQUN6RSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGtGQUFrRixDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMvRixNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNoQixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNKLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQ2pCLENBQUM7WUFDTCxDQUFD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Q0QsSUFBSSxDQUFDLENBQUM7WUFDRixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7SUFDTCxDQUFDO0lBQ0wsNEJBQUM7QUFBRCxDQUFDLEFBeFJELElBd1JDO0FBeFJZLHFCQUFxQjtJQUZqQyxpQkFBVSxFQUFFO0dBRUEscUJBQXFCLENBd1JqQztBQXhSWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQEluamVjdGFibGUoKVxuXG5leHBvcnQgY2xhc3MgRm9ybVZhbGlkYXRpb25TZXJ2aWNlIHtcbiAgICBwdWJsaWMgdG9kYXlEYXRlOiBzdHJpbmc7XG4gICAgcHVibGljIHRvZGF5TW9udGg6IHN0cmluZztcbiAgICBwdWJsaWMgdG9kYXlZZWFyOiBzdHJpbmc7XG4gICAgcHVibGljIGZ1bGxEYXRlOiBzdHJpbmc7XG5cbiAgICAvLyBVc2VybmFtZSB2YWxpZGF0b3JcbiAgICB1c2VybmFtZVZhbGlkYXRvcih1c2VybmFtZSkge1xuICAgICAgICBpZiAodXNlcm5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKHVzZXJuYW1lLm1hdGNoKC9eWzAtOWEtekEtWlxcc1xcclxcbkAhI1xcJFxcXiUmKigpKz1cXC1cXFtcXF1cXFxcXFwnOyxcXC5cXC9cXHtcXH1cXHxcXFwiOjw+XFw/XSskLykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gRW1haWwgaWQgcGF0dGVybiBtYXRjaCB2YWxpZGF0b3JcblxuICAgIGVtYWlsTWF0Y2hWYWxpZGF0b3IobWFpbGlkKSB7XG4gICAgICAgIGlmIChtYWlsaWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKG1haWxpZCA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIC9eW2EtekEtWjAtOS4hIyQlJuKAmSorLz0/Xl9ge3x9fi1dK0BbYS16QS1aMC05LV0rKD86XFwuW2EtekEtWjAtOS1dKykqJC9cbiAgICAgICAgICAgIGlmIChtYWlsaWQubWF0Y2goLyhbYS16MC05XVstYS16MC05X1xcK1xcLl0qW2EtejAtOV0pQChbYS16MC05XVstYS16MC05XFwuXSpbYS16MC05XVxcLihvcmd8Y29tfGVkdSkkKS8pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBFbWFpbCBpZCBmaWxsZWQgY2hlY2tcbiAgICBlbWFpbEZpbGxlZFZhbGlkYXRvcihtYWlsaWQpIHtcbiAgICAgICAgaWYgKG1haWxpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBQYXNzd29yZCBwYXR0ZXJuIG1hdGNoIHZhbGlkYXRvclxuICAgIHBhc3N3b3JkUGF0dGVyblZhbGlkYXRvcihwd2QpIHtcbiAgICAgICAgaWYgKHB3ZCAhPT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgaWYgKHB3ZCA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAocHdkLm1hdGNoKC9eKD89LipbMC05XSlbYS16QS1aMC05IUAjJCVeJipdezcsMTAwfSQvKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gUGFzc3dvcmQgIGZpbGxlZCBjaGVja1xuICAgIHBhc3N3b3JkRmlsbGVkVmFsaWRhdG9yKHB3ZCkge1xuICAgICAgICBpZiAocHdkID09PSB1bmRlZmluZWQgfHwgcHdkID09PSBcIlwiKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gTW9iaWxlIE51bWJlciBWYWxpZGF0b3JcbiAgICBtb2JpbGVOdW1iZXJWYWxpZGF0b3IobWJsbm8pIHtcbiAgICAgICAgaWYgKG1ibG5vICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChtYmxubyA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAobWJsbm8ubGVuZ3RoID09PSAxMCAmJiAgKG1ibG5vLm1hdGNoKC9eXFxkKyQvKSkgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBNb2JpbGUgbm8gIGZpbGxlZCBjaGVja1xuICAgIG1vYmlsZU51bWJlckZpbGxlZFZhbGlkYXRvcihtYmxubykge1xuICAgICAgICBpZiAobWJsbm8gPT09IHVuZGVmaW5lZCB8fCBtYmxubyA9PT0gXCJcIiApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLy8gU1NOIE51bWJlciBWYWxpZGF0b3JcbiAgICBzbm5OdW1iZXJWYWxpZGF0b3Ioc3Nubm8pIHtcbiAgICAgICAgaWYgKHNzbm5vICE9PSB1bmRlZmluZWQgJiYgc3Nubm8hPT1cIlwiKSB7XG4gICAgICAgICAgICBpZiAoc3Nubm8ubGVuZ3RoID09PSA5KSB7XG4gICAgICAgICAgICAgICAgIGlmIChzc25uby5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpZWxkRmlsbGVkVmFsaWRhdG9yKGFyZykge1xuICAgICAgICBpZiAoYXJnID09PSB1bmRlZmluZWQgfHwgYXJnID09PSBcIlwiICkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbmx5RGlnaXRzVmFsaWRhdG9yKGFyZykge1xuICAgICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQgJiYgYXJnICE9PSBcIlwiKSB7XG4gICAgICAgICAgICBpZiAoYXJnLm1hdGNoKC9eXFxkKyQvKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICBvbmx5QWxwaGFiZXRzVmFsaWRhdG9yKGFyZykge1xuICAgICAgIFxuICAgICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChhcmcgIT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXJnLm1hdGNoKC9eW2EtekEtWiAnLV17MCwxNTB9JC8pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWVtYmVySWRWYWxpZGF0b3IoYXJnKSB7XG4gICAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCAmJiBhcmchPT1cIlwiKSB7XG4gICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChhcmcubGVuZ3RoID09PSAxNCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICB9XG4gICAgZGViaXRDYXJkTm9WYWxpZGF0b3IoYXJnKSB7XG4gICAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKGFyZy5sZW5ndGggPT09IDE2KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgLy8gRGF0ZSB2YWxpZGF0aW9uIHN0YXJ0cyBoZXJlXG4gICAgZGF0ZVZhbGlkYXRvcihhcmcpIHtcbiAgICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgaWYgKGFyZyA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5wdXREYXRlID0gbmV3IERhdGUoYXJnKTtcbiAgICAgICAgICAgICAgICBsZXQgdG9kYXlzRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgbGV0IHllYXIgPSBhcmcuc3Vic3RyKGFyZy5sZW5ndGggLSA0KTtcbiAgICAgICAgICAgICAgICBsZXQgZGF0ZSA9IGFyZy5zdWJzdHJpbmcoMywgNSk7XG4gICAgICAgICAgICAgICAgbGV0IG1vbnRoID0gYXJnLnN1YnN0cmluZygwLCAyKTtcbiAgICAgICAgICAgICAgICBsZXQgcGF0dGVybiA9IFwiXigxWzAtMl18MD9bMS05XSkvKDNbMDFdfFsxMl1bMC05XXwwP1sxLTldKS8oPzpbMC05XXsyfSk/WzAtOV17Mn0kXCI7XG4gICAgICAgICAgICAgICAgaWYgKGFyZy5tYXRjaChwYXR0ZXJuKSkge1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dERhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCkgPD0gdG9kYXlzRGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKSAmJiB5ZWFyID49IDE5MDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGNoZWNrIHdoZXRoZXIgZ3JlYXRlciB0aGFuIGN1cnJlbnQgZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChkYXRlID09PSBcIjMxXCIpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKG1vbnRoID09PSBcIjRcIiB8fCBtb250aCA9PT0gXCI2XCIgfHwgbW9udGggPT09IFwiOVwiIHx8IG1vbnRoID09PSBcIjExXCIgfHwgbW9udGggPT09IFwiMDRcIiB8fCBtb250aCA9PT0gXCIwNlwiIHx8IG1vbnRoID09PSBcIjA5XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBvbmx5IDEsMyw1LDcsOCwxMCwxMiBoYXMgMzEgZGF5c1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtb250aCA9PT0gXCIyXCIgfHwgbW9udGggPT09IFwiMDJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxlYXAgeWVhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh5ZWFyICUgNCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0ZSA9PT0gXCIzMFwiIHx8IGRhdGUgPT09IFwiMzFcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Ugey8vIG5vdCBhIGxlYXAgeWVhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0ZSA9PT0gXCIyOVwiIHx8IGRhdGUgPT09IFwiMzBcIiB8fCBkYXRlID09PSBcIjMxXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7Ly8gcGF0dGVybiBtYXRjaGluZyBlbmRzIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIERhdGUgdmFsaWRhdGlvbiBlbmRzIGhlcmVcbiAgICBnZXRBZ2UoYmlydGhEYXRlU3RyaW5nKSB7XG4gICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICB2YXIgYmlydGhEYXRlID0gbmV3IERhdGUoYmlydGhEYXRlU3RyaW5nKTtcbiAgICB2YXIgYWdlID0gdG9kYXkuZ2V0RnVsbFllYXIoKSAtIGJpcnRoRGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIHZhciBtID0gdG9kYXkuZ2V0TW9udGgoKSAtIGJpcnRoRGF0ZS5nZXRNb250aCgpO1xuICAgIGlmIChtIDwgMCB8fCAobSA9PT0gMCAmJiB0b2RheS5nZXREYXRlKCkgPCBiaXJ0aERhdGUuZ2V0RGF0ZSgpKSkge1xuICAgICAgICBhZ2UtLTtcbiAgICB9XG4gICAgcmV0dXJuIGFnZTtcbiAgICAgfVxuICAgIC8vQWdlIHZhbGlkYXRpb24gZm9yIDE4IHllYXJzIGFuZCBhYm92ZSBcbiAgICBtaW5pbXVtQWdlVmFsaWRhdG9yKGFyZyl7XG4gICAgICAgIGlmKGFyZyE9PVwiXCIgJiYgYXJnIT09dW5kZWZpbmVkKXtcbiAgICAgICAgICAgICBpZih0aGlzLmdldEFnZShhcmcpID49IDE4KSB7ICAgICAgICAgIFxuICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHJldHVybiB0cnVlO1xuICAgICAgICBcbiAgICB9XG4gICAgLy9BbHBoYW51bWVyaWMgdmFsaWRhdG9yXG4gICAgIGFscGhhTnVtZXJpY1ZhbGlkYXRvcihhcmcpIHtcbiAgICAgXG4gICAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCAgKSB7ICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChhcmcgPT09IFwiXCIgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgeyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoYXJnLm1hdGNoKC9eWzAtOWEtekEtWl0rJC8pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHsgICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEFscGhhIG1lbWlkIHdpdGggZmlyc3QgMyBjaGFyYWN0eWVycyBhbmQgcmVzdCBkaWdpdHNcbiAgYWxwaGFOdW1lcmljTWVtVmFsaWRhdG9yKGFyZykge1xuICAgICBcbiAgICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkICApIHsgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGFyZyA9PT0gXCJcIiApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChhcmcubWF0Y2goL15bYS16QS1aXXszfVswLTldezExfSQvKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7ICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=