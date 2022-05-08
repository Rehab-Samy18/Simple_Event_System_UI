import * as mongoose from "mongoose";

export class Speaker {
    constructor(
        public _id : any,
        public email : string,
        public username : string,
        public password : string,
        public city : string,
        public street : string,
        public building : string
    ){}
}
