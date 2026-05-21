---
type: sub-task
slug: pin-hugo-version
title: Reproducible builds with a pinned generator version
parent: ../story.md
status: drafted
---

# Reproducible builds with a pinned generator version

## Description

The local build environment names an exact generator version instead of "latest", so every clone builds with the same toolchain regardless of when it is cloned. The pinned version is visible in the README so cloners know what they are running and where to bump it.

## Acceptance criteria

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
