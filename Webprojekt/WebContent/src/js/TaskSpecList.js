describe('Tasklist', () => {
    let taskList;
       beforeEach(()=> {
        taskList = new TaskList('new tasklist');
        taskList.tasks.push(new Task('task 1'));    
        taskList.tasks.push(new Task('task 2'));    
        taskList.tasks.push(new Task('task 3'));    
        taskList.tasks.push(new Task('task 4'));    
       });
       describe('add task', () => {
        it('should add a new task to the tasklist', () => {
            taskList.tasks.addTask(new Task('task 5'));
            expect(taskList.tasks.length).toBe(5);
        });
       });

       describe('remove taks', () => {
           it('should remove a task from the tasklis', () => {
               taskList.tasks.splice(taskList.tasks[1], 1);
               expect(taskList.tasks.length).toBe(3);
           });
       });
    });

