// ! PART 1: Vocabulary & Recall
/* An enum is a numbered list with default values that one can use to save space when referring back to later. */
enum TaskStatus {
    ToDo = "TODO",
    InProgress = "IN PROGRESS",
    Completed = "COMPLETED"
}

/* An interface is very similar to a type alias, but is only used for objects */
interface UserProfile {
    name: string;
    age: number;
}

/* A function in TS is the same as JS, but you have to specify type of paramaters and type of output*/
function checkAge(user: UserProfile, checkAge: number): boolean {
    return checkAge > user.age;
}

// ! PART 2: Code Application
enum UserRole {
    Admin = "ADMIN",
    Editor = "EDITOR",
    Viewer = "VIEWER"
}

const currentRole = UserRole.Editor;
console.log(currentRole)

interface Student {
    name: string;
    gradeLevel: number;
    isEnrolled: boolean;
}

const student1: Student = {
    name: "John Doe",
    gradeLevel: 10,
    isEnrolled: true
}
console.log(student1)

function calculateTotal(price:number, taxRate:number): number {
    return price + (price * taxRate);
}
console.log(calculateTotal(100, 0.08))