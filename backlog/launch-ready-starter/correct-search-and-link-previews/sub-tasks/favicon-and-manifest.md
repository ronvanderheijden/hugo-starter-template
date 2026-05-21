---
type: sub-task
slug: favicon-and-manifest
title: Site icon set and web manifest
parent: ../story.md
status: drafted
---

# Site icon set and web manifest

## Description

The template ships a placeholder icon in the formats browsers actually request — a vector icon, a classic icon file, and an Apple touch icon — plus a web manifest, all referenced from every page. A cloner only swaps the image files to brand the site.

## Acceptance criteria

```gherkin
Feature: Site icon set and web manifest

  Scenario: Browsers find the site icon
    Given the built site
    When a browser loads any page
    Then it discovers the vector icon, the classic icon, and the Apple touch icon without a missing-file error

  Scenario: The site can be added to a phone's home screen
    Given the built site
    When a visitor adds the site to their home screen
    Then the icon and the site name from the manifest are used
```
