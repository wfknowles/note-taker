const { expect } = require('@jest/globals');
const Record = require("./../lib/Record");

test("create a new record", () => {
    const record = new Record();
    expect(record.id).toEqual(expect.any(Number));
});

test("save new record", () => {
    const record = new Record();
    record.save();

    const foundRecord = new Record().find(record.id);
    expect(foundRecord.id).toEqual(expect.any(Number));
});

test("update new record", () => {
    const record = new Record();
    record.save();

    record.title = 'Sample Title';
    record.update();

    const foundRecord = new Record().find(record.id);
    expect(foundRecord.title).toBe('Sample Title');
});

test("destroy record", () => {
    const record = new Record();
    const recordID = record.id;
    record.save();
    record.destroy();
    
    const foundRecord = new Record().find(recordID);
    expect(foundRecord).toBe(false);
});