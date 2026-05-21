---
type: sub-task
slug: rename-sections
title: Rename the Projects and Docs sections
parent: ../story.md
status: drafted
---

# Rename the Projects and Docs sections

## Description

The Projects section becomes Services and the Docs section becomes Info, consistently across the whole template: content directories, menu entries, and the new-page templates editors use. After the rename the site builds cleanly, the menu shows the new names, and the old section addresses no longer exist.

## Acceptance criteria

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
