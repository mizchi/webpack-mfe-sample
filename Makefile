.PHONY: install
install:
	cd core && npm i
	cd page1 && npm i

.PHONY: serve
serve:
	cd core && npm run serve &
	cd page1 && npm run serve