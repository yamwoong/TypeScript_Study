// const names: Array<string> = [];

// const promise: Promise<number> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10);
//     }, 2000)
// });

// promise.then(data => {
//     // data.split(' ');
// })

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergeObj = merge({name : 'kim', hobbies: ['Sportss']}, {age : 30});

console.log(mergeObj);

interface Length {
    length: number;
}

function countAndDescribe<T extends Length>(element: T) {
    let descriptionText = 'Got no value.';
    if(element.length === 1) {
        descriptionText = 'Got 1 element.';
    } else if(element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}

console.log(countAndDescribe(['Sports', 'Cooking']));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key];
}

extractAndConvert({name: 'kim'}, 'name');

class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if(this.data.indexOf(item) === -1) {
            return;    
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('kim');
textStorage.addItem('park');
textStorage.removeItem('kim');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// objStorage.addItem({name: 'kim'});
// objStorage.addItem({name: 'park'});

// objStorage.removeItem({name:'kim'});
// console.log(objStorage.getItems());

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};    
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date
    return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['kim', 'park'];
// names.push('choi'); // error
// names.pop(); // error