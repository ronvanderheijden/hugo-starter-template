---
type: sub-task
slug: readme-launch-checklist
title: Launch checklist in the README
parent: ../story.md
status: drafted
---

# Launch checklist in the README

## Description

The README gains a step-by-step launch checklist covering everything a cloner must do before going live: replace the demo content, fill in the site identity and fallback preview image, swap the placeholder icons, and review each page. The rest of the README is brought in line with the finalized template — renamed sections, dark mode, image handling, feed, mobile menu — and states explicitly that hosting, contact-form handling, and analytics are deliberate per-customer choices the template leaves open.

## Acceptance criteria

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
