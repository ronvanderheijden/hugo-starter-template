# Pinned toolchain: bump these two defaults together. HUGO_VERSION is the
# Alpine package version (Hugo 0.152.2) from
# https://pkgs.alpinelinux.org/packages?name=hugo&branch=v3.23
ARG ALPINE_VERSION=3.23.4
FROM alpine:${ALPINE_VERSION}
ARG HUGO_VERSION=0.152.2-r6
ARG APP_DIR=/app

RUN apk add --no-cache --no-progress hugo=${HUGO_VERSION} bash

WORKDIR ${APP_DIR}

CMD ["/usr/bin/hugo", "server", "--bind", "0.0.0.0"]
