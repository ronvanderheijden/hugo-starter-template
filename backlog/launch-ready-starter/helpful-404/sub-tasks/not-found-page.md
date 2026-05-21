---
type: sub-task
slug: not-found-page
title: Styled not-found page
parent: ../story.md
status: drafted
---

# Styled not-found page

## Description

The template renders its own not-found page in the site's design: a short friendly message, a link to the home page, and links to the main sections. The page is produced as part of the normal build so any host that honors a site's own not-found page serves it.

## Acceptance criteria

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
