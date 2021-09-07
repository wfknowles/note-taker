const fs = require("fs");
const path = require("path");
const records = require("../db/db");

/*
    This is an alright base class for writing a single class to a json file. 
    For expansion, the json file would need to be organized by json[class_name]
    and the below would need to be updated to manage multiple ID counts.
*/

class Record {

    constructor(args = false) {
        this.id = records[records.length-1].id + 1 || 0; // Set ID to last id + 1
    }

    set(records) {
        // write records array to file
        fs.writeFileSync(
            path.join(__dirname, "./../db/db.json"),
            JSON.stringify(records)
        );
        return records;
    }

    save() {
        // insert and save record to records file
        records.push(this);
        this.set(records);
        return this;
    }

    all() {
        // return all records
        return records;
    }

    find(id) {
        // return record with matching id or false
        return records.filter(record => record.id == id)[0] || false;
    }

    destroy(id) {
        //remove from records in records file
        const rIndex = records.findIndex((r => r.id == id));
        if (rIndex) {
            // if id exists, remove record
            records.splice(rIndex, 1);
            this.set(records);
            return true;
        }
    }

    update(id) {
        // update record within records file
        const rIndex = records.findIndex((r => r.id == id));
        if (rIndex) {
            // if id exists, update record
            records[rIndex] = this;
            this.set(records);
            return this;
        } else {
            // if id doesnt exist, save record to file instead
            return this.save();
        }
    }

}

module.exports = Record;