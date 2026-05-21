---
type: sub-task
slug: figure-shortcode
title: Figure with caption and size control
parent: ../story.md
status: drafted
blocked-by:
  - ./responsive-image-hook.md
---

# Figure with caption and size control

## Description

Editors who need a caption or an explicit display size use a figure shortcode. It reuses the same responsive-image building block as plain markdown images, adds the caption below the image, and accepts an optional size choice. The demo content gains a sample image using it, so cloners see the feature working.

## Acceptance criteria

```gherkin
Feature: Figure with caption and size control

  Scenario: A captioned image
    Given an editor uses the figure shortcode with an image and a caption
    When the page is built
    Then the image renders optimized exactly like plain markdown images
    And the caption appears with it

  Scenario: The demo shows a working figure
    Given a fresh clone of the template
    When the demo content is viewed
    Then at least one page shows a captioned, optimized image
```
