import {Lab} from "./Lab";
import {Task} from "./Task";

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