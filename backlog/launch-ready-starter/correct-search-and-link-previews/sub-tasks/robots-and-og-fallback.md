---
type: sub-task
slug: robots-and-og-fallback
title: Crawler welcome file and fallback preview image
parent: ../story.md
status: drafted
---

# Crawler welcome file and fallback preview image

## Description

The site serves a robots file that permits crawling and points at the sitemap. A single site-wide setting names a fallback preview image; the existing social-preview tags use a page's own image when present and otherwise fall back to it, so no shared link ever renders without an image.

## Acceptance criteria

```gherkin
Feature: Crawler welcome file and fallback preview image

  Scenario: Crawlers are welcomed and directed to the sitemap
    Given the built site
    When a crawler requests the robots file
    Then crawling is permitted and the sitemap address is listed

  Scenario: A page without its own image falls back to the site image
    Given a page that defines no image of its own
    When its social-preview tags are inspected
    Then they name the configured site-wide fallback image

  Scenario: A page with its own image keeps it
    Given a page that defines its own image
    When its social-preview tags are inspected
    Then they name that page's image, not the fallback
```
