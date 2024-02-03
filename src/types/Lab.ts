import {Task} from "./Task";

export class Lab {
    Title: string;
    File: string;
    Tasks: Array<Task>;
    constructor(title: string) {
        this.Title = title;
        this.File = title;
        this.Tasks = new Array<Task>;
    }
}