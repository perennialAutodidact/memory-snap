FROM node:18-alpine

WORKDIR /app

RUN mkdir -p packages/frontend packages/backend .

# INSTALL
COPY .node-version package.json yarn.lock nx.json .
COPY packages/backend/package.json packages/backend/yarn.lock .
COPY packages/frontend/package.json packages/frontend/yarn.lock .

RUN yarn install --production
RUN ls -al
RUN npx nx run-many --target=install --production

# COPY APP FILES

COPY packages/backend/* packages/backend/
COPY packages/frontend/* packages/frontend/

# START APPS
RUN npx nx run-many --target serve

