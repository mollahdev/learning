// Single Responsibility Principle
// A class/function should have only one reason to change

// Bad example
const User = (name, email, password) => {
    return {
        name,
        email,
        password,
        save() {
            // save user to database
        },
        sendEmail() {
            // send email to user
        }
    }
}

// Good example
const UserRepository = (name, email, password) => {
    return {
        name,
        email,
        password,
        save() {
            // save user to database
        }
    }
}

const EmailService = (name, email, password) => {
    return {
        name,
        email,
        password,
        sendEmail() {
            // send email to user
        }
    }
}

// reactJs bad example with component
const UserComponentBad = ({ name, email, password }) => {
    // validation logic (Responsibility 1)
    if (!email.includes('@')) {
        return <div>Invalid email</div>
    }

    // data persistence logic (Responsibility 2)
    const saveUser = () => {
        // save to db
    }

    // render logic (Responsibility 3)
    return (
        <div>
            <h1>{name}</h1>
            <p>{email}</p>
            <p>{password}</p>
            <button onClick={saveUser}>Save</button>
        </div>
    )
}

// reactJs good example with component
const UserComponentGood = ({ name, email, password }) => {
    return (
        <div>
            <h1>{name}</h1>
            <p>{email}</p>
            <p>{password}</p>
        </div>
    )
}