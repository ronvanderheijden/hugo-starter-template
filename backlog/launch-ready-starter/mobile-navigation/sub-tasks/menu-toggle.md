---
type: sub-task
slug: menu-toggle
title: Menu collapses behind a button on small screens
parent: ../story.md
status: drafted
---

# Menu collapses behind a button on small screens

## Description

On small screens the navigation hides behind a menu button in the header; activating the button opens and closes the menu, and the button announces its open or closed state. On wide screens the header is unchanged. The toggle script becomes the first real content of the template's existing script pipeline.

## Acceptance criteria

```gherkin
Feature: Menu collapses behind a button on small screens

  Scenario: Small screens show a collapsed menu
    Given a phone-sized screen
    When any page is opened
    Then the header shows the site title and a menu button, and the menu links are hidden
    And the page content starts directly below the header

  Scenario: The button toggles the menu
    Given the collapsed menu on a phone-sized screen
    When the visitor activates the menu button
    Then all menu links appear and the button announces the opened state
    And activating it again hides them and announces the closed state

  Scenario: Wide screens are unaffected
    Given a desktop-sized screen
    When any page is opened
    Then the full menu is visible inline and no menu button appears
```
