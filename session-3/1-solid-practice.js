// class PaymentProcessor {
//     screat = 1234
//     isVerified = false

//     constructor(phone) {
//         this.phone = phone
//     }

//     setAmount(amount) {
//         this.amount = amount
//     }

//     verify(input) {
//         if (input === this.screat) {
//             this.isVerified = true
//         }
//     }

//     pay() {
//         if (!this.isVerified) {
//             console.log('Payment failed');
//             return;
//         }

//         console.log('Payment successful');
//     }

//     generateOTP() {
//         this.screat = Math.floor(1000 + Math.random() * 9000);
//     }

//     sendOTP() {
//         this.generateOTP();
//         console.log(`OTP sent ${this.screat}`);
//     }
// }


// const trx1 = new PaymentProcessor('01711111111');
// trx1.setAmount(100);
// trx1.verify(1234);
// trx1.pay();


// const trx2 = new PaymentProcessor('01711111111');
// trx2.setAmount(100);
// trx2.sendOTP();
// trx2.verify(1234);
// trx2.pay();


class MessageProviderInterface {
    send(phone, message) {
        throw new Error('Method "send" must be implemented.');
    }
}

class SMSProvider extends MessageProviderInterface {
    constructor(client) {
        this.client = client

        // implement SMSAPI
    }

    send(phone, message) {
        this.client.send(phone, message)
    }
}

class EmailProvider extends MessageProviderInterface {
    constructor(client) {
        this.client = client
        // implement EmailAPI // SMTP
    }

    send(email, message) {
        this.client.send(email, message)
    }
}

class AuthStrategyInterface {
    challenge() {
        // start defferent challenge
    }

    verify() {
        // verify
    }
}

class PINAuth extends AuthStrategyInterface {
    challenge() {
        // restore pin from DB
        this.screat = 1234
    }

    verify(input) {
        return input === this.screat;
    }
}

class OTPAuth extends AuthStrategyInterface {
    constructor(messageProvider) {
        this.messageProvider = messageProvider
    }

    challenge() {
        // generate otp
        this.screat = Math.floor(1000 + Math.random() * 9000);
        this.messageProvider.send(this.phone, this.screat);
    }

    verify(input) {
        return input === this.screat;
    }
}

class FingerprintAuth extends AuthStrategyInterface {
    challenge() {
        // restore fingerprint from DB
        this.screat = 'fingerprint';
    }

    verify(input) {
        return input === this.screat;
    }
}

class PaymentProcessor {
    isVerified = false;
    constructor(phone, auth) {
        this.phone = phone;
        this.auth = auth;
    }

    setAmount(amount) {
        this.amount = amount;
    }

    challenge() {
        this.auth.challenge();
    }

    verify(input) {
        this.isVerified = this.auth.verify(input);
    }

    pay() {
        if (!this.isVerified) {
            // throw error
            throw new Error('Payment failed');
        }

        console.log('Payment successful');
    }
}

const smsProvider = new SMSProvider();
const emailProvider = new EmailProvider();
const phone = '01711111111';
const pinAuth = new PINAuth();
const otpWithSMS = new OTPAuth(smsProvider);
const otpWithEmail = new OTPAuth(emailProvider);
const fingerprintAuth = new FingerprintAuth();

// trx with PIN
const trx1 = new PaymentProcessor(phone, pinAuth);
trx1.setAmount(100);
trx1.challenge();
trx1.verify(1223)
trx1.pay()


// trx with OTP
const trx2 = new PaymentProcessor(phone, otpWithSMS);
trx2.setAmount(100);
trx2.challenge();
trx2.verify(1223)
trx2.pay()