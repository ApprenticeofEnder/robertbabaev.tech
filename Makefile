.PHONY: compile-resume upload-resume watch-resume

resume:
	scripts/compile_resume.sh

upload-resume:
	scripts/upload_resume.sh

resume-watch:
	scripts/watch_resume.sh

install-fonts:
	sudo scripts/install_fonts.sh
