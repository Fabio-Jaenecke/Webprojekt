describe("Tasklist", () => {
  let taskList;

  beforeEach(() => {
    taskList = new TaskList("new tasklist");
    taskList.tasks.push(new Task("task 1"));
    taskList.tasks.push(new Task("task 2"));
    taskList.tasks.push(new Task("task 3"));
    taskList.tasks.push(new Task("task 4"));
  });

  describe("add task", () => {
    it("should add a new task to the tasklist", () => {
      taskList.addTask(new Task("task 5"));
      expect(taskList.tasks.length).toBe(5);
    });
  });

  describe("remove taks", () => {
    it("should remove a task from the tasklist", () => {
      taskList.tasks.splice(taskList.tasks[1], 1);
      expect(taskList.tasks.length).toBe(3);
    });
  });

  describe("renders tasklist to JSON", () => {

    it("rendered tasklist should not be null", () => {
        expect(taskList.toJson()).not.toEqual(null);
    });

    it("rendered json should contain right title", () => {
        expect(taskList.toJson()).toContain('"title":"new tasklist"');
    });

    it("rendered tasklist should contain a single task title", () => {
        expect(taskList.toJson()).toContain('"title":"task 1"');
    })

    it("rendered tasklist should contain checked property", () => {
        expect(taskList.toJson()).toContain('"done":false');
    })
  });
});
