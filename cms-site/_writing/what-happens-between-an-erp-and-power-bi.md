---
title: "What happens between an ERP and Power BI?"
category: "Data engineering"
description: "The five layers most dashboards hide — extraction, staging, modelling, testing and the semantic layer — explained with one stock report."
date: 2026-09-04
featured: false
related_project: "manufacturing-data-platform"
---
A stock report in Power BI looks like a single step: connect to the ERP, drag in a table, publish. In practice, a reliable report sits on five layers, each with its own failure modes.

*Extract → Stage → Model → Test → Semantic layer*

## Extract

Pull changed rows from the ERP on a schedule. Incremental loads keep the source system fast and give you a history of what changed when.

## Stage

Land the data untouched in PostgreSQL. Staging is your audit trail: if a number looks wrong later, you can prove what the ERP actually said.

## Model

Reshape transactions into facts and dimensions. A stock ledger becomes *fact_stock_movement* with item, warehouse and date dimensions — the grain every stock question needs.

## Test

Check keys, nulls and business rules before anyone sees a chart. Negative stock is a data question before it is an inventory question.

## Semantic layer

Define measures once in DAX — days on hand, turnover, ageing — so every report means the same thing by “inventory.”
