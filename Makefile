.PHONY: install
install:
	cd core && yarn
	cd page1 && yarn

.PHONY: serve
serve:
	cd core && yarn serve &
	cd page1 && yarn serve