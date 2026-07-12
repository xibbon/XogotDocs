# Renders Mermaid diagram sources (*.mmd) in this folder to PNGs in Resources/,
# where DocC picks them up as image assets.
#
# Requirements: the Mermaid CLI (`mmdc`). Install it with either:
#     npm install -g @mermaid-js/mermaid-cli      # provides `mmdc` on PATH
# or run without installing via `npx`:
#     make MMDC="npx -y @mermaid-js/mermaid-cli"
#
# Usage:
#     make            # render all diagrams that changed
#     make clean      # remove generated PNGs

MMDC ?= mmdc
OUT  := ..
CONFIG := mermaid.config.json

# Render density. Higher = larger/crisper image on the page. Override per run,
# e.g. `make SCALE=1.5` for a smaller diagram.
SCALE ?= 2

SRC := $(wildcard *.mmd)
PNG := $(SRC:%.mmd=$(OUT)/%.png)

.PHONY: all clean
all: $(PNG)

$(OUT)/%.png: %.mmd $(CONFIG)
	$(MMDC) --input $< --output $@ --configFile $(CONFIG) --backgroundColor transparent --scale $(SCALE)

clean:
	rm -f $(PNG)
