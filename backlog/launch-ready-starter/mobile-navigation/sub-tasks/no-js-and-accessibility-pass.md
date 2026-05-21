---
type: sub-task
slug: no-js-and-accessibility-pass
title: Menu works without scripts and with assistive technology
parent: ../story.md
status: drafted
blocked-by:
  - ./menu-toggle.md
---

# Menu works without scripts and with assistive technology

## Description

The collapsed menu degrades safely: when scripts do not run, all menu links are visible as today's stacked list, so navigation never depends on the script loading. The button is operable by keyboard, keeps a visible focus style, and carries a label assistive technology announces meaningfully.

## Acceptance criteria

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
