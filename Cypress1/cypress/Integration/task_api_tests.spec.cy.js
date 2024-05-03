describe('Task API Operations', () => {
    let taskId;
  
    it('should create a new task', () => {
      cy.request({
        method: 'POST',
        url: '/api/tasks', // Допустим, так выглядит эндпоинт для создания задачи
        body: {
          name: 'Test Task',
          description: 'Test Description'
        }
      }).then(response => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('id');
        taskId = response.body.id; // Сохраняем ID для последующих операций
      });
    });
  
    it('should update the created task', () => {
      cy.request({
        method: 'PUT',
        url: `/api/tasks/${taskId}`,
        body: {
          name: 'Updated Test Task',
          description: 'Updated Test Description'
        }
      }).then(response => {
        expect(response.status).to.eq(200);
        expect(response.body.name).to.eq('Updated Test Task');
      });
    });
  
    it('should delete the created task', () => {
      cy.request({
        method: 'DELETE',
        url: `/api/tasks/${taskId}`
      }).then(response => {
        expect(response.status).to.eq(204);
      });
    });
  });

  