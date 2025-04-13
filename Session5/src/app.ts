class Department {
    static fiscalYear = 2020;
    // private readonly id: string;
    // private name: string;
    protected employees: string[] = [];

    constructor(private readonly id: string, public name: string) {
        // this.id = id;
        // this.name = n;

        
    }
    
    static createEmployee(name: string) {
        return {name: name}
    }

    describre(this: Department) {
        console.log(`Department (${this.id}): ${this.name}`); 
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDeapartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }
}

class AccountingDeapartment extends Department {
    private lastReport: string;

    get mostRecentReport() {
        if(this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found!');
    }

    set mostRecentReport(value: string)  {
        if(!value) {
            throw new Error('Please pass in a valid value!');
        }
        this.addReport(value);
    }

    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    addEmployee(name: string) {
        if(name === 'Max') {
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }
}

const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);

const it = new ITDeapartment('d2', ['Max']);

it.addEmployee('Max');
it.addEmployee('Manu');

// accounting.employees[2] = 'Anna';

it.describre();
it.name = 'NEW NAME';
it.printEmployInformation();

console.log(it);

const accounting = new AccountingDeapartment('d2', []);

accounting.mostRecentReport = 'Year End Report';
accounting.addReport('Something went wrong...');
console.log(accounting.mostRecentReport);


accounting.addEmployee('Max');
accounting.addEmployee('Manu');

accounting.printReports();
accounting.printEmployInformation();

// const accountingCopy = {name: 's', describre: accounting.describre};
// accountingCopy.describre();

