// Dependency Inversion Principle (DIP)
// High-level modules should not depend on low-level modules. Both should depend on abstractions.

// what is abstraction?
// abstraction is a way to hide the implementation details of a module

// what is high level module and low level module?
// high level module is the module that contains the business logic
// example: UserAuthentication, PaymentProcessing, ReportGenerator (The "Policy" or "Strategy")


// low level module is the module that contains the implementation details
// example: MySQLConnection, StripeAdapter, FileSystemReader (The "Mechanism" or "Utility")


class MySQLDatabase {
    save(data) {
        console.log(`Saving ${data} to MySQL`);
    }
}

class UserService {
    constructor() {
        // High-level module depends on low-level module
        this.db = new MySQLDatabase();
    }

    register(user) {
        this.db.save(user);
    }
}

const userService = new UserService();
userService.register('Alice');

// Problem: We are tightly coupled to MySQL. If we want to switch to MongoDB,
// -----------------------------------------------------------------------------
// Good Example (Adhering to DIP)
// -----------------------------------------------------------------------------

// Abstraction (Interface)
class Database {
    save(data) {
        throw new Error('Method "save" must be implemented.');
    }
}

// Low-level module implementing the abstraction
class MySQLDatabaseGood extends Database {
    save(data) {
        console.log(`Saving ${data} to MySQL`);
    }
}

class MongoDBDatabaseGood extends Database {
    save(data) {
        console.log(`Saving ${data} to MongoDB`);
    }
}

// High-level module depends on abstraction, not implementation
class UserServiceGood {
    constructor(db) {
        // Dependency is injected from outside
        this.db = db;
    }

    register(user) {
        this.db.save(user);
    }
}

// Now we can easily switch databases
const mysqlDb = new MySQLDatabaseGood();
const mongoDb = new MongoDBDatabaseGood();

const userServiceMysql = new UserServiceGood(mysqlDb);
const userServiceMongo = new UserServiceGood(mongoDb);

userServiceMysql.register('Alice');
userServiceMongo.register('Bob');

// -----------------------------------------------------------------------------
// React Example
// -----------------------------------------------------------------------------

// Bad Example: Component depends on a specific API implementation
const WeatherBad = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Tightly coupled to OpenWeatherMap
        fetch('https://api.openweathermap.org/data/2.5/weather?q=London')
            .then(res => res.json())
            .then(setData);
    }, []);

    return <div>{data?.main?.temp}</div>;
}

// Good Example: Component depends on an abstraction (props)
const WeatherGood = ({ data }) => {
    return <div>{data?.main?.temp}</div>;
}

// The parent component handles the dependency (the API call)
const ParentComponent = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Dependency is managed here
        fetch('https://api.openweathermap.org/data/2.5/weather?q=London')
            .then(res => res.json())
            .then(setData);
    }, []);

    // WeatherGood is now independent of the API implementation
    return <WeatherGood data={data} />;
}

// The parent component handles the dependency (the API call)
const Dhaka = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Dependency is managed here
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Dhaka')
            .then(res => res.json())
            .then(setData);
    }, []);

    // WeatherGood is now independent of the API implementation
    return <WeatherGood data={data} />;
}