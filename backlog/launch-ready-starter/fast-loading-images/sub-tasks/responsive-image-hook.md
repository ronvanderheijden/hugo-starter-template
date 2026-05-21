---
type: sub-task
slug: responsive-image-hook
title: Plain markdown images delivered responsive
parent: ../story.md
status: drafted
---

# Plain markdown images delivered responsive

## Description

An image placed in a page the ordinary markdown way is automatically rendered as a responsive image: several widths for different screens, a modern compact format with a universal fallback, and lazy loading below the fold. The rendering lives in one reusable building block so the figure shortcode can use the exact same processing. Images the site cannot process (external addresses) are passed through untouched rather than breaking the build.

## Acceptance criteria

```gherkin
Feature: Plain markdown images delivered responsive

  Scenario: A large local image becomes a responsive image
    Given a page containing a large image inserted with plain markdown
    When the site is built and the page inspected
    Then the image offers multiple widths and a modern compact format with a fallback
    And it is marked to load lazily

  Scenario: External images pass through
    Given a page containing an image hosted on another site
    When the site is built
    Then the build succeeds and the external image is referenced unchanged

  Scenario: The alt text is preserved
    Given a markdown image with alt text
    When the page is built
    Then the rendered image carries the same alt text
```
