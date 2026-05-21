---
type: sub-task
slug: advertise-feed
title: Make the posts feed discoverable
parent: ../story.md
status: drafted
---

# Make the posts feed discoverable

## Description

Every page announces the posts feed in its metadata so feed readers detect it from any address on the site, and the footer carries a visible feed link for visitors who look for one.

## Acceptance criteria

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
