# Chunithm (International) Score Viewer

A bookmarklet tool to let you view the records of [CHUNITHM-NET (International)](https://chunithm-net-eng.com/) in rating order.

Chart constant data extracted from [chunirec](https://chunirec.net/dev/api/1.3/docs).

# Usage

1. Drag [chuni intl viewer](https://github.com/kyroslee/chuni_intl_viewer) to your bookmark bar.
2. Edit the bookmark. Copy the following code and paste it as the url of the bookmark
```
javascript:(function(d,s){s=d.createElement('script');s.src='https://cdn.jsdelivr.net/gh/kyroslee/chuni_intl_viewer/main.min.js?'+Date.now();d.getElementsByTagName('head')[0].appendChild(s);})(document);

```
4. Open https://chunithm-net-eng.com/ and run the bookmarklet
5. Wait for the program to finish

# Dev

1. `npm install`
2. `npm run compile`

# Tips
- If you want to run the bookmarklet on mobile chrome, type the name of the bookmark at url bar, and then click on the bookmark to execute the code.
- [How can a bookmarklet be ADDED on mobile Chrome without copying and pasting? - Android Enthusiasts Stack Exchange](https://android.stackexchange.com/questions/159308/how-can-a-bookmarklet-be-added-on-mobile-chrome-without-copying-and-pasting)
