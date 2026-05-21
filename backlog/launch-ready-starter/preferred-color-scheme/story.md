---
type: story
slug: preferred-color-scheme
title: Visitor sees the site in their preferred color scheme
status: drafted
---

# Visitor sees the site in their preferred color scheme

## Problem

Visitors who keep their device in dark mode get a glaring white site at night. Small-org audiences read news posts in the evening on their phones; the site should respect how their device is set up.

## Solution notes

- The site follows the visitor's operating-system color preference automatically — no toggle button, nothing to click or remember.
- A dark counterpart of the existing color palette; every component must remain readable and recognisable in both schemes.
- Pure styling — no scripts involved, so the correct scheme appears instantly on first paint.

## Acceptance criteria

```gherkin
Feature: Visitor sees the site in their preferred color scheme

  Scenario: Dark-mode visitor gets a dark site
    Given a visitor whose device prefers a dark color scheme
    When they open any page of the site
    Then the page renders in the dark palette from the first paint
    And all text, cards, alerts, and navigation remain readable

  Scenario: Light-mode visitor sees the site unchanged
    Given a visitor whose device prefers a light color scheme
    When they open any page of the site
    Then the page renders in the existing light palette
```

## Acceptance criteria (from sub-tasks)

<!-- Derived section — the sub-task files are the source of truth. It is back-filled in Stage 3.4, once the sub-task files exist; after editing a sub-task's acceptance criteria, re-collect them here. -->

### Dark color palette following the device preference

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
