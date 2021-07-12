FROM python:3
USER root

RUN apt-get update
RUN apt-get -y install locales && localedef -f UTF-8 -i ja_JP ja_JP.UTF-8

ENV LANG ja_JP.UTF-8
ENV LANGUAGE ja_JP:ja
ENV LC_ALL ja_JP.UTF-8
ENV TZ JST-9
ENV TERM xterm

ADD . /code
WORKDIR /code
RUN apt-get install -y vim less
RUN pip install --upgrade pip
RUN pip install --upgrade setuptools
RUN pip install -r requirements.txt

RUN mkdir /var/www
COPY /opt/server.py /var/www
RUN mkdir /var/www/templates
COPY /opt/templates/index.html /var/www/templates

CMD ["python", "/var/www/server.py"]