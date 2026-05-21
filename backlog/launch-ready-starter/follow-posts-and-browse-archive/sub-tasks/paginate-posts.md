---
type: sub-task
slug: paginate-posts
title: Posts list shows ten per page
parent: ../story.md
status: drafted
---

# Posts list shows ten per page

## Description

The posts list shows the ten most recent posts per page with styled controls for newer and older pages; the controls show the visitor where they are. Services and Info lists remain unpaginated single lists.

## Acceptance criteria

```gherkin
Feature: Posts list shows ten per page

  Scenario: Eleven posts split into two pages
    Given a site with eleven published posts
    When a visitor opens the posts page
    Then the ten most recent posts are listed with a control to the older page
    And the older page lists the remaining post with a control back

  Scenario: Few posts mean no pagination noise
    Given a site with three published posts
    When a visitor opens the posts page
    Then all three are listed and no page controls appear

  Scenario: Other sections stay single lists
    Given a site with many services and info pages
    When a visitor opens those sections
    Then each shows all of its pages on one page
```
