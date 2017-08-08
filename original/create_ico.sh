#!/bin/sh

filename=favicon.png

filenamebase=$(echo $filename | cut -f 1 -d '.')

# Favicon for browsers in ico format
sizes_favicon="16 24 32 48 64"
resultstr=
sizes_txt=

for s in $sizes_favicon; do
  dest="$filenamebase-$s.png"
  size="${s}x${s}"
  sizes_txt="$sizes_txt $size"
  resultstr="$resultstr $dest"
  #echo "Will convert $filename to size $size in $dest"
  convert $filename -resize $size $dest
done

echo $resultstr
favicon_name="favicon.ico"
convert $resultstr $favicon_name
rm $resultstr


cat << EOF
Add this line to the header of your site:
<link rel="shortcut icon" sizes="$sizes_txt" href="/$favicon_name">
EOF

# Favicon for iOS and Android
sizes_favicon="57 72 114 120 144 152"
resultstr=
sizes_txt=

for s in $sizes_favicon; do
  dest="$filenamebase-$s.png"
  size="${s}x${s}"
  #echo "Will convert $filename to size $size in $dest"
  convert $filename -resize $size $dest
  if [ "$s" == "57" ];then
cat << EOF
<link rel="apple-touch-icon" sizes="$size" href="/$dest">
<link rel="apple-touch-icon-precomposed" sizes="$size" href="/$dest">
EOF
  else
cat << EOF
<link rel="apple-touch-icon" sizes="$size" href="/$dest">
EOF
  fi

done



##resize to 64x64 at 80% jpg quality
#convert $filename -resize 64x64 -quality 80% "$filenamebase-64x64.jpg"
#
##resize to 128x128
#convert $filename -resize 128x128 "$filenamebase-128x128.png"

echo "Done"
