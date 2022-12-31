#!/usr/bin/python3

import typer
import os

app = typer.Typer()

@app.command()
def create_superuser():
    os.system("docker-compose run --rm api python manage.py createsuperuser")

@app.command()
def start():
    os.system("docker-compose up -d")

@app.command()
def stop():
    os.system("docker-compose down")

@app.command()
def build():
    os.system("docker-compose build")

@app.command()
def logs():
    os.system("docker-compose logs --tail 50")

@app.command()
def restart():
    os.system("docker-compose down; docker-compose build; docker-compose up -d")

@app.command()
def renew_https():
    os.system("docker-compose run --rm certbot renew")

if __name__ == "__main__":
    app()