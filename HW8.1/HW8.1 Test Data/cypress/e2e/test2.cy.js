describe('connect to test db', () => {
    it('can connect to the db', () => {
      cy.task(
        "queryDb",
         "CREATE TABLE Students (StudentID int, FirstName varchar(255), StudentGroup varchar(255), City varchar(255))"
      );
    });
  
    it('Input entries', () => {
      cy.task("queryDb", `
        INSERT INTO Students (StudentID, FirstName, StudentGroup, City) VALUES
        (1, "Ivan", "02-2022", "Barcelona"),
        (2, "Maria", "03-2022", "Tokio"),
        (3, "Andrey", "02-2023", "Milan")
      `).then((result) => {
        cy.log(JSON.stringify(result));
        expect(result.affectedRows).to.equal(3);
      });
    });
  
    it('Add two more students to existing group', () => {
      cy.task("queryDb", `
        INSERT INTO Students (StudentID, FirstName, StudentGroup, City) VALUES
        (4, "John", "02-2022", "Madrid"),
        (5, "Alice", "02-2022", "Berlin")
      `).then((result) => {
        cy.log(JSON.stringify(result));
        expect(result.affectedRows).to.equal(2);
      });
    });
  
    it('Select students from a specific group', () => {
      cy.task("queryDb", 'SELECT FirstName FROM Students WHERE StudentGroup="02-2022"'
      ).then ((result) => {
        cy.log(JSON.stringify(result));
        // Проверка, что вернулись студенты из группы "02-2022"
        expect(result.map((row) => row.FirstName)).to.deep.equal(["Ivan", "John", "Alice"]);
      });
    });
    
    it("can delete the db", () => {
      cy.task(
        "queryDb",
         'DROP TABLE Students' 
      );
    });
  });
  