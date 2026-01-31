// Liskov Substitution Principle
// Subtypes must be substitutable for their base types.
// If S is a subtype of T, then objects of type T may be replaced with objects of type S without altering the correctness of the program.

// -----------------------------------------------------------------------------
// Bad Example (Violating LSP)
// -----------------------------------------------------------------------------

class Bird {
    fly() {
        console.log('I can fly');
    }
}

class Duck extends Bird {
    quack() {
        console.log('Quack');
    }
}

class Penguin extends Bird {
    fly() {
        // Penguin cannot fly!
        throw new Error('Cannot fly');
    }

    swim() {
        console.log('I can swim');
    }
}

function makeBirdFly(bird) {
    bird.fly();
}

const duck = new Duck();
const penguin = new Penguin();

// Works fine
makeBirdFly(duck);

// Crashes the program - Violation of LSP
// makeBirdFly(penguin); 


// -----------------------------------------------------------------------------
// Good Example (Adhering to LSP)
// -----------------------------------------------------------------------------

class BirdBase {
    // Shared bird stuff
    eat() {
        console.log('I can eat');
    }
}

class FlyingBird extends BirdBase {
    fly() {
        console.log('I can fly');
    }
}

class SwimmingBird extends BirdBase {
    swim() {
        console.log('I can swim');
    }
}

class Eagle extends FlyingBird {
    hunt() {
        console.log('I am hunting');
    }
}

class PenguinGood extends SwimmingBird {
    // ...
}

function feedBird(bird) {
    bird.eat();
}

const eagle = new Eagle();
const penguinGood = new PenguinGood();

// Works fine
feedBird(eagle);
feedBird(penguinGood);

// PenguinGood is not a FlyingBird, so we can't pass it here.
// We don't assume all Birds can fly.


// -----------------------------------------------------------------------------
// React Example
// -----------------------------------------------------------------------------

// Bad Example: Breaking the Interface
const TurboButton = () => {
    return (
        <button style={{ background: 'red' }}>
            TURBO MODE
        </button>
    )
}

// Good Example: Adhering to Interface
const BetterTurboButton = (props) => {
    return (
        <button {...props} style={{ background: 'red', ...props.style }}>
            TURBO MODE
        </button>
    )
}

// <BetterTurboButton onClick={handleClick} /> works just like <button onClick={handleClick} />

