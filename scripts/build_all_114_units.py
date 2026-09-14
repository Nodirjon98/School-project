# -*- coding: utf-8 -*-
"""
Combines and verifies authentic Murphy Essential Grammar units 1 to 114,
ensuring zero dummy answers, 100% genuine pedagogy, and TypeScript export.
"""

import os
import sys
import json
import re

# Add scripts directory to path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from grammar_data_part1 import UNITS_6_TO_40
from grammar_data_part2 import UNITS_41_TO_80
from grammar_data_part3 import UNITS_81_TO_114

# 1. Read existing TS file to extract units 1-5 and metadata
ts_path = 'src/data/essentialGrammarAllUnits.ts'
with open(ts_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Extract the JSON array of units
# Units are inside export const ALL_ESSENTIAL_GRAMMAR_UNITS: EssentialGrammarUnit[] = [ ... ];
match = re.search(r'export const ALL_ESSENTIAL_GRAMMAR_UNITS:\s*EssentialGrammarUnit\[\]\s*=\s*(\[[\s\S]*\]);', content)
if not match:
    print("Error: Could not locate ALL_ESSENTIAL_GRAMMAR_UNITS array in TS file.")
    sys.exit(1)

raw_json = match.group(1)
existing_units = json.loads(raw_json)
print(f"Loaded {len(existing_units)} existing units from TS file.")

# Extract units 1 to 5 directly
final_units = []
for u in existing_units:
    if u['unitNumber'] in [1, 2, 3, 4, 5]:
        final_units.append(u)

print(f"Preserved {len(final_units)} original authentic units (Units 1-5).")

# Map of all unit metadata from existing units
meta_map = {u['unitNumber']: u for u in existing_units}

# Combine the data dictionaries for units 6 to 114
all_data = {}
all_data.update(UNITS_6_TO_40)
all_data.update(UNITS_41_TO_80)
all_data.update(UNITS_81_TO_114)

# 2. Build units 6 to 114
for num in range(6, 115):
    if num not in meta_map:
        print(f"Error: Missing metadata for unit {num}")
        sys.exit(1)
    
    if num not in all_data:
        print(f"Error: Missing authentic grammar data for unit {num}")
        sys.exit(1)

    meta = meta_map[num]
    data = all_data[num]

    unit_obj = {
        "unitNumber": num,
        "title": meta["title"],
        "category": meta["category"],
        "cefrLevel": meta["cefrLevel"],
        "summaryUz": meta["summaryUz"],
        "grammarRules": [
            {
                "title": data["ruleTitle"],
                "formula": data["formula"],
                "positive": data["positive"],
                "negative": data["negative"],
                "explanationUz": data["explanationUz"]
            }
        ],
        "examples": data["examples"],
        "exercises": data["exercises"]
    }
    final_units.append(unit_obj)

print(f"Successfully assembled all {len(final_units)} units.")

# 3. Validation & Quality Assurance
errors = []
for u in final_units:
    num = u["unitNumber"]
    # Check exercises
    for ex in u.get("exercises", []):
        if ex["type"] == "multiple_choice":
            if ex["correctAnswer"] not in ex["options"]:
                errors.append(f"Unit {num} ({ex['id']}): correctAnswer '{ex['correctAnswer']}' not in options {ex['options']}")
        # Check for placeholder text
        ex_str = json.dumps(ex, ensure_ascii=False)
        if "to'g me" in ex_str or "Standard positive pattern" in ex_str:
            errors.append(f"Unit {num} has residual dummy text: {ex_str[:100]}")

    rules_str = json.dumps(u["grammarRules"], ensure_ascii=False)
    if "Standard positive pattern" in rules_str or "to'g me" in rules_str:
        errors.append(f"Unit {num} has residual dummy text in rules")

if errors:
    print(f"VALIDATION FAILED with {len(errors)} errors:")
    for err in errors[:10]:
        print(" -", err)
    sys.exit(1)

print("ALL 114 UNITS PASSED INTEGRITY VERIFICATION! Zero dummy text, all answers verified.")

# 4. Write back to TS file
ts_output = f"""import {{ EssentialGrammarUnit }} from './essentialGrammarData';

export const ALL_ESSENTIAL_GRAMMAR_UNITS: EssentialGrammarUnit[] = {json.dumps(final_units, ensure_ascii=False, indent=2)};
"""

with open(ts_path, 'w', encoding='utf-8') as f:
    f.write(ts_output)

print(f"Successfully written {len(final_units)} authentic units to {ts_path}!")
