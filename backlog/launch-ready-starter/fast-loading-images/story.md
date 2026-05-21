---
type: story
slug: fast-loading-images
title: Editor publishes fast-loading images without manual optimization
status: drafted
---

# Editor publishes fast-loading images without manual optimization

## Problem

Small-org editors upload photos straight from their phone. Each one is several megabytes, so pages get slow — especially on the mobile connections most of their visitors use — and nobody on the team knows how to resize images by hand.

## Solution notes

- Any image an editor places in a page the ordinary way is automatically delivered resized, in a modern compact format, and loaded lazily — the editor does nothing special.
- A figure option is available when an image needs a caption or an explicit size.
- Uses the site generator's built-in image processing only — no external tools or services for the editor or the developer to maintain.

## Acceptance criteria

```gherkin
Feature: Editor publishes fast-loading images without manual optimization

  Scenario: A phone photo is delivered optimized
    Given an editor writes a page and inserts a 4 MB phone photo the ordinary way
    When the page is published and a visitor opens it
    Then the visitor's browser downloads a resized, compact version appropriate to their screen
    And images below the fold load only as the visitor scrolls

  Scenario: An image with a caption
    Given an editor wants an image with a caption under it
    When they use the figure option in their page
    Then the published page shows the image with its caption, optimized the same way
```

## Acceptance criteria (from sub-tasks)

<!-- Derived section — the sub-task files are the source of truth. It is back-filled in Stage 3.4, once the sub-task files exist; after editing a sub-task's acceptance criteria, re-collect them here. -->

### Plain markdown images delivered responsive

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

### Figure with caption and size control

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
