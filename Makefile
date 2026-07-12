# Top-level convenience targets for the XogotDocs repository.

DIAGRAMS_DIR := Documentation.docc/Resources/diagrams

.PHONY: all diagrams clean

# Build everything that is generated in the repo.
all: diagrams

# Render the Mermaid diagrams to PNGs under Documentation.docc/Resources/.
# Pass MMDC through so you can render without a global install, e.g.:
#     make diagrams MMDC="npx -y @mermaid-js/mermaid-cli"
diagrams:
	$(MAKE) -C $(DIAGRAMS_DIR) $(if $(MMDC),MMDC="$(MMDC)") $(if $(SCALE),SCALE=$(SCALE))

clean:
	$(MAKE) -C $(DIAGRAMS_DIR) clean
