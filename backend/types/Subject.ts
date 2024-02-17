export class Subject {
    Title: string = "";
    Labs: Array<Lab> = [];
    Tasks: Array<Task> = [];
    Visits: Array<Visit> = [];
    constructor(title: string) {
        this.Title = title;
    }
}

export class SubjectElement {
    Title: string = "";
    FileName: string = "";
    Path: string = "";
    // Tasks: Array<Task> ;
    Date: String = "";
    Subject: string = "";
}

export class Visit extends SubjectElement{
    Type: string = "await";
    Types: Array<string> = [
        "skipped",
        "await",
        "disease",
        "cancelled",
        "visited",
    ];
}

export class Lab extends SubjectElement{
    FileMethod: string = "";
    FileLab: string = "";
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