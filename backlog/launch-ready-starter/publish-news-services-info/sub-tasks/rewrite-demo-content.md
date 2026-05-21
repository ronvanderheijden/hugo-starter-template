---
type: sub-task
slug: rewrite-demo-content
title: Rewrite the demo content for a small organisation
parent: ../story.md
status: drafted
blocked-by:
  - ./rename-sections.md
---

# Rewrite the demo content for a small organisation

## Description

Every demo page — home, about, contact, the example post, the example service, and the info pages — is rewritten in the voice of a generic small organisation, so a cloner sees a finished-looking small-org site instead of developer placeholder text. Each page still demonstrates the template's features (alerts, call-to-action buttons, tags) and carries a visible note that it is example content to replace.

## Acceptance criteria

```gherkin
Feature: Rewrite the demo content for a small organisation

  Scenario: The demo site reads as a small organisation
    Given a fresh clone of the template
    When each page of the built site is read end to end
    Then all copy is written from the perspective of a generic small organisation
    And no developer-oriented placeholder text remains

  Scenario: Demo pages still demonstrate the template's features
    Given the rewritten demo content
    When the demo pages are viewed
    Then at least one page shows an alert, one shows a call-to-action button, and one post carries tags
```
