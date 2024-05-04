describe('Task API Operations', () => {
  let taskId;

  it('should create a new task', () => {
    cy.request({
      method: 'POST',
      url: '/api/tasks',
      headers: {
        'Authorization': 'Bearer <W3sibWFzdGVyIjp0cnVlLCJleHRlbnNpb25JZCI6ImVwcGlvY2VtaG1ubGJoanBsY2drb2ZjaWllZ29tY29uIiwiYWRibG9ja2VyU3RhdHVzIjp7IkRJU1BMQVkiOiJkaXNhYmxlZCIsIkZBQ0VCT09LIjoiZGlzYWJsZWQiLCJUV0lUVEVSIjoiZGlzYWJsZWQiLCJSRURESVQiOiJkaXNhYmxlZCIsIlBJTlRFUkVTVCI6ImRpc2FibGVkIiwiSU5TVEFHUkFNIjoiZGlzYWJsZWQiLCJDT05GSUciOiJkaXNhYmxlZCJ9LCJ2ZXJzaW9uIjoiMi4wLjE0Iiwic2NvcmUiOjIwMDE0fV0>'
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
        'Authorization': 'Bearer <W3sibWFzdGVyIjp0cnVlLCJleHRlbnNpb25JZCI6ImVwcGlvY2VtaG1ubGJoanBsY2drb2ZjaWllZ29tY29uIiwiYWRibG9ja2VyU3RhdHVzIjp7IkRJU1BMQVkiOiJkaXNhYmxlZCIsIkZBQ0VCT09LIjoiZGlzYWJsZWQiLCJUV0lUVEVSIjoiZGlzYWJsZWQiLCJSRURESVQiOiJkaXNhYmxlZCIsIlBJTlRFUkVTVCI6ImRpc2FibGVkIiwiSU5TVEFHUkFNIjoiZGlzYWJsZWQiLCJDT05GSUciOiJkaXNhYmxlZCJ9LCJ2ZXJzaW9uIjoiMi4wLjE0Iiwic2NvcmUiOjIwMDE0fV0>'
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
        'Authorization': 'Bearer' <W3sibWFzdGVyIjp0cnVlLCJleHRlbnNpb25JZCI6ImVwcGlvY2VtaG1ubGJoanBsY2drb2ZjaWllZ29tY29uIiwiYWRibG9ja2VyU3RhdHVzIjp7IkRJU1BMQVkiOiJkaXNhYmxlZCIsIkZBQ0VCT09LIjoiZGlzYWJsZWQiLCJUV0lUVEVSIjoiZGlzYWJsZWQiLCJSRURESVQiOiJkaXNhYmxlZCIsIlBJTlRFUkVTVCI6ImRpc2FibGVkIiwiSU5TVEFHUkFNIjoiZGlzYWJsZWQiLCJDT05GSUciOiJkaXNhYmxlZCJ9LCJ2ZXJzaW9uIjoiMi4wLjE0Iiwic2NvcmUiOjIwMDE0fV0>'
      },
    }).then(response => {
      expect(response.status).to.eq(204);
    });
  });
});
