---
order: 3
num: "03"
title: "IPL Moneyball"
kicker: "Business analytics · Sport"
description: "Can data identify undervalued T20 players? A metric-design project that treats the IPL auction as a pricing problem."
flow:
  - "Question"
  - "Data"
  - "Metric design"
  - "Analysis"
  - "Model"
  - "Decision"
problem: "Auction prices follow reputation and recent headlines. The question: which players deliver more match impact per rupee than their price suggests?"
data: "Ball-by-ball IPL match data across seasons, joined to publicly reported auction prices."
engineering:
  - "Ball-by-ball ingestion into PostgreSQL with match, innings and phase dimensions"
  - "Phase-aware metrics: powerplay, middle and death-over impact"
  - "Context adjustments for venue and opposition strength"
  - "Value score = impact per match ÷ auction price"
analysis: "Death-over specialists and middle-order strikers are priced well below their impact, while powerplay run volume is over-rewarded at auction."
model:
  - item: "Batting impact"
    detail: "Runs above phase average per ball"
  - item: "Bowling impact"
    detail: "Runs saved vs phase average"
  - item: "Pressure index"
    detail: "Performance when required rate > 9"
  - item: "Value score"
    detail: "Impact per match ÷ price"
sql: |
  -- Runs above phase average per ball
  SELECT batter,
         phase,
         AVG(runs) - AVG(AVG(runs)) OVER (PARTITION BY phase)
           AS runs_above_avg
  FROM ipl.balls
  GROUP BY batter, phase;
result: "A shortlist method a franchise analyst could defend in an auction room: clear metrics, transparent assumptions, ranked by value."
stack:
  - "Python"
  - "PostgreSQL"
  - "SQL"
  - "pandas"
  - "Statistics"
repository: "https://github.com/"
demo: ""
---
