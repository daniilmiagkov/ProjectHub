export class Subject {
    Title: string;
    Labs: Array<Lab>;
    Tasks: Array<Task>;
    constructor(title: string) {
        this.Title = title;
        this.Labs = new Array<Lab>();
        this.Tasks = new Array<Task>();
    }
}

export class Lab {
    Title: string;
    File: string;
    Tasks: Array<Task>;
    Date: Date;
    Subject: string;
    Done: boolean;

    constructor(title: string) {
        this.Title = title;
        this.File = title;
        this.Tasks = new Array<Task>;
    }
}

export class Task {
    Title: string;
    Done: boolean;
    constructor(title: string, done: boolean) {
        this.Title = title;
        this.Done = done;
    }
}