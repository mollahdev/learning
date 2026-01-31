// Open/Closed Principle
// A class/function should be open for extension, but closed for modification

// Bad example
const User = (name, email, password, type) => {
    return {
        name,
        email,
        password,
        type,
        save() {
            if (this.type === 'db') {
                // save to database
            } else if (this.type === 'file') {
                // save to file
            }
        }
    }
}

// Good example
const UserGood = (name, email, password, storage) => {
    return {
        name,
        email,
        password,
        save() {
            storage.save(this)
        }
    }
}

const dbStorage = {
    save(user) {
        // save to database
        console.log('Saved to DB', user.name)
    }
}

const fileStorage = {
    save(user) {
        // save to file
        console.log('Saved to File', user.name)
    }
}

const user = UserGood('John', 'john@example.com', 'password', dbStorage)
user.save()

const user2 = UserGood('Jane', 'jane@example.com', 'password', fileStorage)
user2.save()

// React Bad Example
// logic is coupled inside the component
const ButtonBad = ({ type, onClick }) => {
    return (
        <button onClick={onClick}>
            {type === 'save' && <span>💾 Save</span>}
            {type === 'delete' && <span>🗑️ Delete</span>}
            {type === 'edit' && <span>✏️ Edit</span>}
        </button>
    )
}

// React Good Example
// logic is injected via props (children or specific prop)
const ButtonGood = ({ icon, children, onClick }) => {
    return (
        <button onClick={onClick}>
            {icon} {children}
        </button>
    )
}

// Usage (Extension without modification)
const SaveButton = (props) => <ButtonGood icon="💾" {...props}>Save</ButtonGood>
const DeleteButton = (props) => <ButtonGood icon="🗑️" {...props}>Delete</ButtonGood>

