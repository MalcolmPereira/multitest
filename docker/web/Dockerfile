#Use nginx alpine
FROM nginx:alpine

#Copy source code
COPY dist /usr/share/nginx/html

#Expose API port to the outside
EXPOSE 80 443

#Start NGINX
CMD ["nginx", "-g", "daemon off;"]
