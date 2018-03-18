describe('Task', () => {
    let task;
    beforeEach(() => task = new Task('new task'));
    it('should assign the title to the new task object', () => {
        expect(task.title).toEqual('new task');
    })
    it('should not be done', () => {
        expect(task.done).toBe(false);
    })
    it('should change done to true when check function was called', () => {
        task.check();
        expect(task.done).toBe(true);
    })
    it('should change done to false when uncheck function was called', () => {
        task.done = true;
        task.uncheck();
        expect(task.done).toBe(false);
    })
})