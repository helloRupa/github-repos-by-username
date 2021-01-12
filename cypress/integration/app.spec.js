/// <reference types="cypress" />

context("Testing", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("can perform a search and see results and will not run it twice", () => {
    const username = "helloRupa";

    cy.get("input[type='text']").type(username).should("have.value", username);
    cy.get("input[type='submit']").click();
    cy.get("button[type='reset']").click();
    cy.get("input[type='text']").should("have.value", "");

    cy.get(".search-results")
      .should("contain", "Search Results")
      .contains(username, { matchCase: false });

    cy.get("a")
      .contains(username, { matchCase: false })
      .and("have.attr", "href")
      .and("include", username);

    cy.get("a")
      .contains(username, { matchCase: false })
      .should("have.attr", "target", "_blank")
      .should("have.attr", "rel", "noopener noreferrer nofollow");

    cy.contains("repos found", { matchCase: false });

    cy.get(".search-results").find("ul a").should("have.length", 10);
    cy.get(".load-more").click();
    cy.get(".search-results").find("ul a").should("have.length", 20);

    cy.get("input[type='submit']").click();
    cy.get(".search-results").find("ul a").should("have.length", 20);
  });

  it("does not perform invalid searches", () => {
    const username = ";akdfkjae---";

    cy.get("input[type='text']").type(username).should("have.value", username);
    cy.get(".input-error");

    cy.get("input[type='submit']").click();
    cy.get(".search-results").should("not.exist");
  });

  it("offers dark mode", () => {
    cy.get("button#dark-mode-toggle").click();
    cy.get("body").should("have.class", "dark-theme");

    cy.reload();
    cy.get("body").should("have.class", "dark-theme");

    cy.get("button#dark-mode-toggle").click();
    cy.get("body").should("have.class", "light-theme");
  });
});
