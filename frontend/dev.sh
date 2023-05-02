# ng build;
rsync -ar -e 'ssh -p 34522' dist/log-inolinx/* dev@45.159.150.153:/var/www/inolinx_log;
