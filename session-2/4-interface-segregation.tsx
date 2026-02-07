//@ts-nocheck

// Interface Segregation Principle (ISP)
// Clients should not be forced to depend on interfaces they do not use

// -----------------------------------------------------------------------------
// Bad Example: A "Fat" interface forcing implementation of unused methods
// -----------------------------------------------------------------------------

interface Worker {
    work(): void;
    eat(): void;
}

class Human implements Worker {
    work() {
        console.log('Human is working');
    }

    eat() {
        console.log('Human is eating');
    }
}

class Robot implements Worker {
    work() {
        console.log('Robot is working');
    }

    // Robot must implement eat() because of the interface, even if it doesn't need it
    eat() {
        throw new Error('Robot doesn\'t eat!');
    }
}

// -----------------------------------------------------------------------------
// Good Example: Segregated Interfaces
// -----------------------------------------------------------------------------

interface Workable {
    work(): void;
}

interface Eatable {
    eat(): void;
}

// Human needs both
class HumanWorker implements Workable, Eatable {
    work() {
        console.log('Human is working');
    }

    eat() {
        console.log('Human is eating');
    }
}

// Robot only needs to work
class RobotWorker implements Workable {
    work() {
        console.log('Robot is working');
    }
}

// -----------------------------------------------------------------------------
// React Example (Conceptual)
// -----------------------------------------------------------------------------

// Bad Example: Component depends on a massive data type (Fat Interface)
interface Video {
    title: string;
    duration: number;
    coverImage: string;
    description: string;
    author: string;
    date: string;
    // ... potentially many more properties
}

interface ThumbnailBadProps {
    video: Video; // Depends on the whole Video object
}

const ThumbnailBad = ({ video }: ThumbnailBadProps) => {
    return (
        <div>
            <img src={video.coverImage} alt="cover" />
            <span>{video.duration} </span>
        </div>
    );
};

// Good Example: Component defines its own specific interface for what it needs
interface ThumbnailGoodProps {
    coverImage: string;
    duration: number;
}

// Or we can just use the interface directly in the props
const ThumbnailGood = ({ coverImage, duration }: ThumbnailGoodProps) => {
    return (
        <div>
            <img src={coverImage} alt="cover" />
            <span>{duration} </span>
        </div>
    );
};