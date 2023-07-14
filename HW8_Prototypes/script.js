class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = [];
        this.dismissed = false;
    }

    getInfo() {
        return this.course + ' ' + this.university + ', ' + this.fullName;
    }

    set mark(val) {
        if (this.dismissed) return;

        if (val > 0) this.marks.push(val);
    }

    get getMarks() {
        if (this.dismissed) {
            console.log('Студента виключено, не можливо подивитись його оцінки');
            return null;
        }

        return this.marks;
    }

    getAverageMark() {
        if (this.dismissed) {
            console.log('Студента виключено, не можливо подивитись його середній бал');
            return null;
        }

        return this.marks.reduce((sum, current) => sum + current) / this.marks.length;
    }

    dismiss() {
        this.dismissed = true;
        console.log('Виключаємо студента');
    }

    recover() {
        this.dismissed = false;
        console.log('Поновлюємо студента');
    }
}

const student = new Student('Вищої Школи Психотерапії м.Одеса', 'Студент 1го курсу', 'Остап Родоманський Бендер');
console.log(student.getInfo());
student.marks = [5, 4, 4, 5];
console.log('Оцінки студента ', student.marks);
console.log('Ставимо студенту оцінку ', student.mark = 5);
console.log('Оцінки студента ', student.marks);
console.log('Середній бал студента - ', student.getAverageMark());
student.dismiss();
console.log('Ставимо студенту оцінку ', student.mark = 3);
console.log('Оцінки студента - ', student.getMarks);
student.recover();
console.log('Ставимо студенту оцінку після поновлення ', student.mark = 3);
console.log('Оцінки студента - ', student.getMarks);
console.log('------------------------------------------');

class BudgetStudent extends Student {
    constructor(university, course, fullName) {
        super(university, course, fullName);
        this.scholarship = null;
        setInterval(() => this.getScholarship(1400), 30000);
    }

    getScholarship(val) {
        if (this.dismissed) {
            console.log('Студента виключено');
            return;
        }
        if (this.getAverageMark() < 4){
            console.log('Середній бал студента менше 4, він не має права на стипендію');
        } else {
            this.scholarship = val;
            console.log(`Ви отримали ${val} грн. стипендії`);
        }
    }
}

const budgetStudent = new BudgetStudent('Вищої Школи Психотерапії м.Одеса', 'Студент 2го курсу бюджету', 'Іван Іванович Іванов');
console.log('\nСтворено бюджетного студента')
console.log(budgetStudent.getInfo());
budgetStudent.marks = [5, 4, 3, 5];
console.log('Оцінки студента ', budgetStudent.marks);
console.log('Пробуємо видати йому стипендію');
budgetStudent.getScholarship(1400);
budgetStudent.marks = [5, 4, 3, 3];
console.log('Змінили оцінки студента ', budgetStudent.marks);
console.log('Пробуємо видати йому стипендію');
budgetStudent.getScholarship(1400);
budgetStudent.dismiss();
console.log('Пробуємо видати стипендію виключеному студенту');
budgetStudent.getScholarship(1400);