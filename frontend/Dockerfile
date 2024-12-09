# Menggunakan image Nginx untuk menyajikan file frontend
FROM nginx:latest

# Hapus file default Nginx
RUN rm -rf /usr/share/nginx/html/*

# Salin file frontend Anda ke dalam container
COPY . /usr/share/nginx/html

# Port yang digunakan oleh Nginx
EXPOSE 80

# Perintah untuk menjalankan Nginx
CMD ["nginx", "-g", "daemon off;"]
