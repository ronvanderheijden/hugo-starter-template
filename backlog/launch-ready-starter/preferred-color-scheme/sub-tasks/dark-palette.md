---
type: sub-task
slug: dark-palette
title: Dark color palette following the device preference
parent: ../story.md
status: drafted
---

# Dark color palette following the device preference

## Description

The existing color variables get dark counterparts that apply automatically when the visitor's device prefers a dark scheme, and the page declares both supported schemes so the browser styles its own UI (scrollbars, form controls) to match. Every component — header, cards, alerts in all four types, buttons, tag lists, footer — is checked in both schemes.

## Acceptance criteria

```gherkin
Feature: Dark color palette following the device preference

  Scenario: Dark preference renders the dark palette instantly
    Given a device set to prefer a dark color scheme
    When any page is opened
    Then it renders dark from the first paint with no light flash

  Scenario: Every component is readable in both schemes
    Given the demo site showing header, cards, all four alert types, buttons, tags, and footer
    When each is viewed in light and in dark scheme
    Then text keeps sufficient contrast against its background in both
```
