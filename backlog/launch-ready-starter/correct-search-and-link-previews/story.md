---
type: story
slug: correct-search-and-link-previews
title: Site is represented correctly in search results and link previews
status: drafted
---

# Site is represented correctly in search results and link previews

## Problem

When someone shares the site in a chat or on social media today, the preview has no image; browser tabs show no icon; crawlers find no robots.txt and no structured data. To search engines and to anyone receiving a link, the site looks unfinished before they even click.

## Solution notes

- Ship a favicon set and web manifest so the site has an identity in browser tabs, bookmarks, and home screens.
- Provide a robots.txt that welcomes crawlers and points at the sitemap.
- Add a site-wide fallback preview image, configurable in one place, used whenever a page has no image of its own.
- Describe the organisation and its articles in the structured-data format search engines read, fed entirely by existing site configuration — no extra work per page.

## Acceptance criteria

```gherkin
Feature: Site is represented correctly in search results and link previews

  Scenario: A shared link always shows a preview image
    Given a site built from the template with a fallback preview image configured
    When any page without its own image is shared on a platform that renders link previews
    Then the preview shows the site-wide fallback image with the page's title and description

  Scenario: A crawler understands who the site belongs to
    Given a site built from the template with the organisation's details configured
    When a search engine crawls the home page and a post
    Then it finds valid structured data describing the organisation on the home page
    And valid structured data describing the article on the post
    And a robots.txt that permits crawling and references the sitemap
```

## Acceptance criteria (from sub-tasks)

<!-- Derived section — the sub-task files are the source of truth. It is back-filled in Stage 3.4, once the sub-task files exist; after editing a sub-task's acceptance criteria, re-collect them here. -->

### Site icon set and web manifest

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

### Crawler welcome file and fallback preview image

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

### Structured data for the organisation and its articles

```gherkin
Feature: Structured data for the organisation and its articles

  Scenario: The home page describes the organisation
    Given a site with its identity configured
    When the home page's structured data is run through a structured-data validator
    Then it validates as an Organization and a WebSite without errors

  Scenario: A post describes itself as an article
    Given a published post
    When the post's structured data is run through a structured-data validator
    Then it validates as an Article with headline and publication date

  Scenario: Missing optional details degrade gracefully
    Given a site whose configuration omits a logo
    When the home page's structured data is validated
    Then it still validates, simply without the logo property
```
