import { ObjectId } from "mongodb";
export default interface People {
    _id: ObjectId;
    person: string;
}

