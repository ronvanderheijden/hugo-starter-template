---
type: story
slug: follow-posts-and-browse-archive
title: Reader can follow new posts and browse the archive
status: drafted
---

# Reader can follow new posts and browse the archive

## Problem

Readers who want to follow the organisation's news have no discoverable feed — feed readers find nothing to subscribe to. And as posts accumulate over the years, the posts page grows into one endless list.

## Solution notes

- The posts list shows ten posts per page with clear navigation between older and newer pages.
- The existing feed becomes discoverable: feed readers detect it automatically, and a visible feed link appears in the footer.
- Services and Info stay as single curated lists — pagination there would be noise.

## Acceptance criteria

```gherkin
Feature: Reader can follow new posts and browse the archive

  Scenario: A feed reader can subscribe to the site
    Given a site built from the template
    When a reader pastes the site address into a feed reader
    Then the reader discovers the posts feed automatically
    And new posts appear in the feed after publishing

  Scenario: A visitor browses an archive of many posts
    Given a site with more than ten published posts
    When a visitor opens the posts page
    Then they see the ten most recent posts
    And they can page through to the oldest post and back
```

## Acceptance criteria (from sub-tasks)

<!-- Derived section — the sub-task files are the source of truth. It is back-filled in Stage 3.4, once the sub-task files exist; after editing a sub-task's acceptance criteria, re-collect them here. -->

### Posts list shows ten per page

```gherkin
Feature: Posts list shows ten per page

  Scenario: Eleven posts split into two pages
    Given a site with eleven published posts
    When a visitor opens the posts page
    Then the ten most recent posts are listed with a control to the older page
    And the older page lists the remaining post with a control back

  Scenario: Few posts mean no pagination noise
    Given a site with three published posts
    When a visitor opens the posts page
    Then all three are listed and no page controls appear

  Scenario: Other sections stay single lists
    Given a site with many services and info pages
    When a visitor opens those sections
    Then each shows all of its pages on one page
```

### Make the posts feed discoverable

```gherkin
Feature: Make the posts feed discoverable

  Scenario: Feed readers auto-discover the feed
    Given the built site
    When a feed reader is given the address of any page
    Then it discovers the posts feed automatically

  Scenario: The footer offers the feed
    Given any page of the built site
    When a visitor reads the footer
    Then a feed link is visible and leads to a working feed listing the published posts
```
