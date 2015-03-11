#!/bin/bash
clear
export DEBUG=rede ; nodemon bin/www
echo 'server On'

#sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000
