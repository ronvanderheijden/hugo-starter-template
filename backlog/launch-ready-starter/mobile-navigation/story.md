---
type: story
slug: mobile-navigation
title: Visitor can navigate the site comfortably on a phone
status: drafted
---

# Visitor can navigate the site comfortably on a phone

## Problem

On a phone, the six menu items stack into a tall block that pushes the actual content below the fold on every single page. Most small-org visitors arrive on mobile, and the first thing they see is a wall of navigation.

## Solution notes

- On small screens the menu collapses behind a standard menu button; on wide screens nothing changes.
- The menu button is fully usable with keyboard and assistive technology.
- If scripts fail to load, the menu falls back to today's stacked links — navigation never breaks.

## Acceptance criteria

```gherkin
Feature: Visitor can navigate the site comfortably on a phone

  Scenario: Content is visible above the fold on a phone
    Given a visitor on a phone-sized screen
    When they open any page
    Then the header shows the site title and a menu button only
    And the page content starts directly below the header

  Scenario: The menu opens and closes
    Given a visitor on a phone-sized screen
    When they activate the menu button
    Then the full menu appears and the button reflects the opened state
    And activating it again closes the menu

  Scenario: Navigation survives without scripts
    Given a visitor whose browser does not run scripts
    When they open any page on a phone-sized screen
    Then all menu links are visible and usable
```

## Acceptance criteria (from sub-tasks)

<!-- Derived section — the sub-task files are the source of truth. It is back-filled in Stage 3.4, once the sub-task files exist; after editing a sub-task's acceptance criteria, re-collect them here. -->

### Menu collapses behind a button on small screens

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

### Menu works without scripts and with assistive technology

```gherkin
Feature: Menu works without scripts and with assistive technology

  Scenario: No scripts, full navigation
    Given a browser with scripts disabled on a phone-sized screen
    When any page is opened
    Then every menu link is visible and usable

  Scenario: Keyboard-only operation
    Given a visitor navigating by keyboard on a phone-sized screen
    When they move focus to the menu button and press it
    Then the menu opens, focus remains visible, and each link can be reached and activated

  Scenario: The button is announced meaningfully
    Given a screen reader on a phone-sized screen
    When it reaches the menu button
    Then it announces a recognisable menu label and whether the menu is open or closed
```
