#!/bin/bash
clear
echo -e "552525\n" | sudo -S /opt/NEO4J_HOME/bin/neo4j start
clear 
export DEBUG=rede ; PORT=3000 ; nodemon bin/www 

#sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000
