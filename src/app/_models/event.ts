import * as mongoose from "mongoose";

export class Event {
    constructor(
        public _id : Number,
        public title : string,
        public eventDate : Date,
        public mainSpeaker : any,
        public otherSpeakers : [any],
        public students : [any]
    ){}
}
