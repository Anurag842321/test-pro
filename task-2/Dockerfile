FROM 933538/repo2026:vanilla-img-v1.0

LABEL maintainer="KISHAN MISHRA | kishan@gmail.com"

RUN dnf install -y nodejs && dnf clean all

WORKDIR /tgapp

COPY package.json /tgapp/

COPY Dockerfile /root

RUN npm install

COPY app1.js /tgapp/

EXPOSE 3000

CMD ["node", "app1.js"]

