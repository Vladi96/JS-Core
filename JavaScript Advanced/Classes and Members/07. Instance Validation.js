class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId
        this.email = email
        this.firstName = firstName
        this.lastName = lastName
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        if (value.length < 3 || value.length>20) {
            if (/^([A-Z]|[a-z]){3,20}$/.test(value)) {
                this._lastName = value;
            }
            else {
                throw new TypeError('Last name must contain only Latin characters')
            }
        }
        else {
            throw  new TypeError ("Last name must be between 3 and 20 characters long")
        }
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        if (value.length < 3 || value.length>20) {
            if (/^([A-Z]|[a-z]){3,20}$/.test(value)) {
                this._firstName = value;
            }
            else {
                throw new TypeError('First name must contain only Latin characters')
            }
        }
        else {
            throw new TypeError("First name must be between 3 and 20 characters long")
        }
    }

    get email() {
        return this._email;
    }

    set email(value) {
        if (/[A-Za-z0-9]+@[A-Za-z.]+/.test(value)) {
            this._email = value;
        }
        else {
            throw new TypeError('Invalid e-mail')
        }
    }

    get clientId() {
        throw new this._clientId;
    }

    set clientId(value) {
        if (/^\d{6}$/.test(value)) {
            this._clientId = value;
        }
        else {
            throw new TypeError('Client ID must be a 6-digit number')
        }

    }
}
