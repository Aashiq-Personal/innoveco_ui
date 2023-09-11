FROM nginx:1.19.1
LABEL maintainer="MGT DUS"

COPY dist /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY nginx/replace_env_variables.sh /tmp
RUN chmod +x /tmp/replace_env_variables.sh
CMD /tmp/replace_env_variables.sh && nginx -g 'daemon off;'
