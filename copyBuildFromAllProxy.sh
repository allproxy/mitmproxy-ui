# cp -r ../allproxy/build/* pages-test/docs

if [ -z "$1" ]; then
    echo "Usage: copyBuildFromAllProxy.sh allproxy_dir"
    exit 1
fi

cmd="rm -r docs/static"
echo $cmd
$cmd

cmd="cp -r $1/client/build/* docs/"
echo $cmd
$cmd

#line1='\t<base href="https://github.ibm.com/Dave-Christenson/jsonlogs/">'
line2='\t<link rel="shortcut icon" type="image/x-icon" href="favicon.ico">'
line3='\t<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">'

echo "\nThese lines must be added to the start of the <header> tag:"
#echo $line1
echo $line2
echo $line3

echo "\nRemove '/' from href and src properties."
