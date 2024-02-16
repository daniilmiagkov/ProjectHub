export class Subject {
    Title: string = "";
    Labs: Array<Lab> = [];
    Tasks: Array<Task> = [];
    Visits: Array<Visit> = [];
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
    FileName: string = "";
    FileMethod: string = "";
    FileLab: string = "";
    Path: string = "";
    // Tasks: Array<Task> ;
    Date: String = "";
    Subject: string = "";
    Type: string = "not done";
    Types: Array<string> = [
        "overdue",
        "not done",
        "process",
        "done",
        "accepted",
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