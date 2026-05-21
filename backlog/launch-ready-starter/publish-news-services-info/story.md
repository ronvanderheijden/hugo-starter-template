---
type: story
slug: publish-news-services-info
title: Site owner can publish news, services, and info pages
status: drafted
---

# Site owner can publish news, services, and info pages

## Problem

The demo sections speak to developers — "Projects" and "Docs" mean nothing to a sports club, foundation, or local business. A small organisation cloning the template has to guess how to map their world onto a developer portfolio before they can publish anything.

## Solution notes

- Rename the Projects section to Services and the Docs section to Info, everywhere a visitor or editor encounters them: menu, section pages, and new-page templates.
- Rewrite all demo content in the voice of a generic small organisation, so the example site reads as a finished small-org website rather than a developer playground.
- Layouts stay section-agnostic — this is a naming and content exercise, not a redesign.

## Acceptance criteria

```gherkin
Feature: Site owner can publish news, services, and info pages

  Scenario: A fresh clone presents a small organisation's site
    Given a fresh clone of the template
    When the site is built and opened in a browser
    Then the main menu offers Home, About, Posts, Services, Info, and Contact
    And every demo page reads as content of a generic small organisation
    And no page or menu item mentions Projects or Docs

  Scenario: An editor adds a page to each section
    Given a fresh clone of the template
    When the editor creates a new post, a new service, and a new info page using the provided templates
    Then each new page appears in its section's list with the expected fields pre-filled
```

## Acceptance criteria (from sub-tasks)

<!-- Derived section — the sub-task files are the source of truth. It is back-filled in Stage 3.4, once the sub-task files exist; after editing a sub-task's acceptance criteria, re-collect them here. -->

### Rename the Projects and Docs sections

```gherkin
Feature: Rename the Projects and Docs sections

  Scenario: The site builds with the new section names
    Given the renamed template
    When the site is built
    Then the build finishes without errors or warnings
    And the menu reads Home, About, Posts, Services, Info, Contact

  Scenario: The new section addresses serve the section lists
    Given the built site
    When a visitor opens the services and info section addresses
    Then each shows its section list page
    And the former projects and docs addresses no longer exist

  Scenario: New-page templates follow the rename
    Given the renamed template
    When an editor creates a new service and a new info page from the provided templates
    Then each file lands in the renamed section with the expected fields pre-filled
```

### Rewrite the demo content for a small organisation

```gherkin
Feature: Rewrite the demo content for a small organisation

  Scenario: The demo site reads as a small organisation
    Given a fresh clone of the template
    When each page of the built site is read end to end
    Then all copy is written from the perspective of a generic small organisation
    And no developer-oriented placeholder text remains

  Scenario: Demo pages still demonstrate the template's features
    Given the rewritten demo content
    When the demo pages are viewed
    Then at least one page shows an alert, one shows a call-to-action button, and one post carries tags
```
