---
type: story
slug: launch-from-checklist
title: New site owner can take the template live from a checklist
status: drafted
blocked-by:
  - ../publish-news-services-info/story.md
---

# New site owner can take the template live from a checklist

## Problem

Someone cloning the template today has to reverse-engineer what must be replaced or configured before launch — which demo text to remove, which settings to fill in, what the template already handles. And because the build environment doesn't fix a generator version, the same site can build differently next month.

## Solution notes

- The README gains a step-by-step launch checklist: replace demo content, fill in the site's identity and preview image, swap the favicon, check each page.
- The README is brought in line with the finalized template: renamed sections, dark mode, image handling, feed, and mobile menu.
- It states explicitly that hosting, contact-form handling, and analytics are per-customer choices the template deliberately leaves open.
- The local build environment pins the generator version so every clone builds identically.

## Acceptance criteria

```gherkin
Feature: New site owner can take the template live from a checklist

  Scenario: A newcomer reaches launch-ready without outside help
    Given a person with basic computer skills and a fresh clone
    When they work through the README launch checklist top to bottom
    Then every customisation needed before going live is covered by a checklist step
    And no demo content or placeholder remains on the finished site

  Scenario: Builds are reproducible
    Given two fresh clones built months apart
    When each runs the documented build
    Then both use the same pinned generator version and produce a working site
```

## Acceptance criteria (from sub-tasks)

<!-- Derived section — the sub-task files are the source of truth. It is back-filled in Stage 3.4, once the sub-task files exist; after editing a sub-task's acceptance criteria, re-collect them here. -->

### Reproducible builds with a pinned generator version

```gherkin
Feature: Reproducible builds with a pinned generator version

  Scenario: The build uses the pinned version
    Given a fresh clone of the template
    When the documented build is run
    Then the build reports exactly the pinned generator version
    And the site builds without errors

  Scenario: The pin is documented
    Given the README
    When a cloner looks up the toolchain
    Then the pinned version and the single place to change it are stated
```

### Launch checklist in the README

```gherkin
Feature: Launch checklist in the README

  Scenario: The checklist covers every pre-launch customisation
    Given a fresh clone and the README checklist
    When a newcomer completes every checklist step
    Then no demo content, placeholder icon, or unset identity setting remains on the built site

  Scenario: The README matches the template
    Given the finalized template
    When the README is read against the actual sections and features
    Then section names and described features match what the template ships
    And hosting, contact form, and analytics are named as per-customer choices
```
