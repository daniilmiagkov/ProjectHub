export class Subject {
    Title: string = "";
    Labs: Array<Lab> = [];
    Tasks: Array<Task> = [];
    Visits: Array<Visit> = [];
    constructor(title: string) {
        this.Title = title;
    }
}

export class Visit {
    Date: Date = new Date();
    Type: string = "await";
    Types: Array<string> = [
        "cancelled",
        "skipped",
        "visited",
        "disease",
        "await"
    ];
}

export class Lab {
    Title: string = "";
    File: string = "";
    // Tasks: Array<Task> ;
    Date: String = "";
    Subject: string = "";
    Type: string = "not done";
    Types: Array<string> = [
        "done",
        "not done",
        "process",
        "accepted",
        "overdue"
    ];
    Score: number = 0;
    MaxScore: number = 0;
}

export class Task {
    Title: string;
    Done: boolean;
    constructor(title: string, done: boolean) {
        this.Title = title;
        this.Done = done;
    }
}