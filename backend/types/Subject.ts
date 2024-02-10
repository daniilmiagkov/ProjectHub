export class Subject {
    Title: string;
    Labs: Array<Lab> = [];
    Tasks: Array<Task> = [];
    Visits: Array<Visit> = [];
    constructor(title: string) {
        this.Title = title;
    }
}

export class Visit {
    Date: Date;
    Type: string;
    Types: Array<string> = [
        "cancelled",
        "skipped",
        "visited",
        "disease",
    ];
}

export class Lab {
    Title: string;
    File: string;
    Tasks: Array<Task>;
    Date: Date;
    Subject: string;
    Type: string;
    Types: Array<string> = [
        "done",
        "not done",
        "process",
        "accepted"
    ];
    Score: number;
    MaxScore: number;
    constructor(title: string) {
        this.Title = title;
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