apt-get update
apt-get install -y npm nginx
cp /vagrant/nginx.conf /etc/nginx/nginx.conf
npm install -g pm2
cd /vagrant/webclient
npm install
