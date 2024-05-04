describe('Task API Operations', () => {
  let taskId;

  it('should create a new task', () => {
    cy.request({
      method: 'POST',
      url: '/api/tasks',
      headers: {
        'Authorization': 'Bearer <eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0ZXIyIiwiZXhwIjoxNzEzMzIzNzYzLCJhdXRoIjoiUk9MRV9VU0VSX1NUVURFTlQiLCJpYXQiOjE3MTA3MzE3NjN9.rr70IFKn6r-u_audnDjupTI7xy1afdyazZINT4O4CaIGRzO_fuBP8NU0lToutG1ABH88bl4tNrYO9BAMO817pQ>'
      },
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
      headers: {
        'Authorization': 'Bearer <eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0ZXIyIiwiZXhwIjoxNzEzMzIzNzYzLCJhdXRoIjoiUk9MRV9VU0VSX1NUVURFTlQiLCJpYXQiOjE3MTA3MzE3NjN9.rr70IFKn6r-u_audnDjupTI7xy1afdyazZINT4O4CaIGRzO_fuBP8NU0lToutG1ABH88bl4tNrYO9BAMO817pQ>'
      },
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
      url: `/api/tasks/${taskId}`,
      headers: {
        'Authorization': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0ZXIyIiwiZXhwIjoxNzEzMzIzNzYzLCJhdXRoIjoiUk9MRV9VU0VSX1NUVURFTlQiLCJpYXQiOjE3MTA3MzE3NjN9.rr70IFKn6r-u_audnDjupTI7xy1afdyazZINT4O4CaIGRzO_fuBP8NU0lToutG1ABH88bl4tNrYO9BAMO817pQ>'
      }
    }).then(response => {
      expect(response.status).to.eq(204);
    });
  });
});
