---
type: story
slug: helpful-404
title: Visitor landing on a broken link gets a helpful 404 page
status: drafted
---

# Visitor landing on a broken link gets a helpful 404 page

## Problem

A mistyped or outdated link currently dead-ends in the hosting provider's default error page — unstyled, off-brand, and with no way back into the site. For a small organisation, that stray link in an old newsletter is a lost visitor.

## Solution notes

- A not-found page in the site's own look and feel, with a short friendly message.
- It offers the visitor a way forward: a link home and links to the main sections.
- Works wherever the site is hosted, since hosts serve the site's own not-found page when present.

## Acceptance criteria

```gherkin
Feature: Visitor landing on a broken link gets a helpful 404 page

  Scenario: A broken link keeps the visitor on the site
    Given a site built from the template
    When a visitor opens an address that does not exist
    Then they see the site's own not-found page in the site's design
    And they can continue to the home page or any main section in one click
```

## Acceptance criteria (from sub-tasks)

<!-- Derived section — the sub-task files are the source of truth. It is back-filled in Stage 3.4, once the sub-task files exist; after editing a sub-task's acceptance criteria, re-collect them here. -->

### Styled not-found page

```gherkin
Feature: Styled not-found page

  Scenario: The not-found page is part of the build
    Given the built site
    When the build output is inspected
    Then a not-found page exists with the site's header, footer, and styling

  Scenario: The visitor can continue
    Given a visitor on the not-found page
    When they look for a way forward
    Then a link to the home page and links to the main sections are offered
```
