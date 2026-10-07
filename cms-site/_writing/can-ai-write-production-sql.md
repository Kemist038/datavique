---
title: "Can AI write production SQL?"
category: "AI + Data"
description: "Notes from building an AI data analyst: where LLM-generated SQL is reliable, where it fails, and the validation layer that makes it usable."
date: 2026-08-07
featured: false
related_project: "ai-data-analyst"
---
Large language models write plausible SQL. Plausible isn’t the same as correct, and correct isn’t the same as safe to run on production data.

## Where it works

Well-documented star schemas with clear names. When tables and columns describe themselves, generation quality rises more than any prompt tweak delivers.

## Where it fails

Ambiguous business language. “Revenue” might mean gross, net of freight or net of refunds. The model picks one silently — the most dangerous kind of error.

> “The hard part isn’t SQL syntax. It’s agreeing what the question means.”

## The validation layer

Parse the query, restrict it to allow-listed read-only tables, check the EXPLAIN cost, enforce a row limit — and always show the SQL alongside the answer so a human can audit it.

## So, can it?

Not unsupervised. With a documented model, a glossary of business terms and validation before execution, it becomes a fast first draft that analysts review rather than write.
