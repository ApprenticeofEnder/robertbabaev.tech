.PHONY: resume deploy resume-watch

resume:
	scripts/compile_resume.sh

deploy:
	devenv shell deploy

resume-watch:
	scripts/watch_resume.sh

install-fonts:
	sudo scripts/install_fonts.sh
