---
type: sub-task
slug: organisation-and-article-json-ld
title: Structured data for the organisation and its articles
parent: ../story.md
status: drafted
---

# Structured data for the organisation and its articles

## Description

The home page embeds structured data describing the organisation and the website (name, address of the site, logo); each post embeds structured data describing the article (headline, dates, author). Everything is derived from existing site configuration and page fields — pages need no extra fields beyond what the templates already provide.

## Acceptance criteria

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
