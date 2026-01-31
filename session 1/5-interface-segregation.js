// Interface Segregation Principle (ISP)
class Worker {
    work() {
        throw new Error('Method "work" must be implemented.');
    }

    eat() {
        console.log('Worker is eating');
    }
}

class RobotWorker extends Worker {
    work() {
        console.log('Robot is working');
    }
}

class HumanWorker extends Worker {
    work() {
        console.log('Human is working');
    }
}

class JanitorWorker extends Worker {
    work() {
        console.log('Janitor is cleaning');
    }
}

// Good Example: Segregated Interfaces
class Workable {
    work() {
        throw new Error('Method "work" must be implemented.');
    }
}

class Eatable {
    eat() {
        throw new Error('Method "eat" must be implemented.');
    }
}

class RobotWorkerGood extends Workable {
    work() {
        console.log('Robot is working');
    }
}

class HumanWorkerGood extends Eatable {
    eat() {
        console.log('Human is eating');
    }
}

class JanitorWorkerGood extends Workable {
    work() {
        console.log('Janitor is cleaning');
    }
}

// React Example

// Bad Example: Component forced to depend on a massive data structure (Fat Interface)
const ThumbnailBad = ({ video }) => {
    return (
        <div>
            <img src={video.coverImage} alt="cover" />
            <span>{video.duration}</span>
        </div>
    )
}

// Good Example: Component depends only on the data it actually uses
const ThumbnailGood = ({ coverImage, duration }) => {
    return (
        <div>
            <img src={coverImage} alt="cover" />
            <span>{duration}</span>
        </div>
    )
}